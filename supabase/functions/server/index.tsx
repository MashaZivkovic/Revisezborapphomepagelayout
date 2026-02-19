import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.7";
import * as kv from "./kv_store.tsx";

const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

const API_PREFIX = "/make-server-e535a4b3";

const supabase = createClient(
  Deno.env.get('SUPABASE_URL') || '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '',
);

// Helper for auth check
async function checkAuth(c: any) {
  const accessToken = c.req.header('Authorization')?.split(' ')[1];
  if (!accessToken) return null;
  const { data: { user }, error } = await supabase.auth.getUser(accessToken);
  if (error || !user) return null;
  return user;
}

// Routes
app.get(`${API_PREFIX}/health`, (c) => c.json({ status: "ok" }));

// User Signup
app.post(`${API_PREFIX}/signup`, async (c) => {
  try {
    const { email, password, name, zborName } = await c.req.json();
    const { data, error } = await supabase.auth.admin.createUser({
      email,
      password,
      user_metadata: { name, zborName, role: 'pending_admin' },
      email_confirm: true
    });

    if (error) return c.json({ error: error.message }, 400);

    // Store registration request in KV for verification process
    const regId = crypto.randomUUID();
    await kv.set(`registration:${regId}`, {
      userId: data.user.id,
      email,
      name,
      zborName,
      status: 'pending',
      createdAt: new Date().toISOString()
    });

    return c.json({ message: 'Registracija uspešna. Čeka se verifikacija.', user: data.user });
  } catch (err) {
    return c.json({ error: 'Greška pri registraciji' }, 500);
  }
});

// GET Mesne Zajednice
app.get(`${API_PREFIX}/mesne-zajednice`, async (c) => {
  try {
    const MOCK_DATA = [
      { id: 1, name: 'Vračar', opstina: 'Vračar', grad: 'Beograd', lat: 44.7981, lon: 20.4716, osm_id: 'm1' },
      { id: 2, name: 'Stari Grad', opstina: 'Stari Grad', grad: 'Beograd', lat: 44.8178, lon: 20.4570, osm_id: 'm2' },
      { id: 3, name: 'Novi Beograd', opstina: 'Novi Beograd', grad: 'Beograd', lat: 44.8152, lon: 20.4208, osm_id: 'm3' },
      { id: 4, name: 'Zemun', opstina: 'Zemun', grad: 'Beograd', lat: 44.8436, lon: 20.4005, osm_id: 'm4' },
      { id: 5, name: 'Palilula', opstina: 'Palilula', grad: 'Beograd', lat: 44.8158, lon: 20.4735, osm_id: 'm5' },
      { id: 6, name: 'Voždovac', opstina: 'Voždovac', grad: 'Beograd', lat: 44.7770, lon: 20.4764, osm_id: 'm6' },
      { id: 7, name: 'Liman 1', opstina: 'Novi Sad', grad: 'Novi Sad', lat: 45.2441, lon: 19.8435, osm_id: 'm7' },
      { id: 8, name: 'Liman 2', opstina: 'Novi Sad', grad: 'Novi Sad', lat: 45.2400, lon: 19.8390, osm_id: 'm8' },
      { id: 9, name: 'Liman 3', opstina: 'Novi Sad', grad: 'Novi Sad', lat: 45.2360, lon: 19.8350, osm_id: 'm9' },
      { id: 10, name: 'Liman 4', opstina: 'Novi Sad', grad: 'Novi Sad', lat: 45.2320, lon: 19.8300, osm_id: 'm10' },
      { id: 11, name: 'Medijana', opstina: 'Medijana', grad: 'Niš', lat: 43.3225, lon: 21.9033, osm_id: 'm11' },
      { id: 12, name: 'Palilula (Niš)', opstina: 'Palilula', grad: 'Niš', lat: 43.3100, lon: 21.8900, osm_id: 'm12' },
      { id: 13, name: 'Aerodrom', opstina: 'Aerodrom', grad: 'Kragujevac', lat: 44.0200, lon: 20.9200, osm_id: 'm13' },
      { id: 14, name: 'Stari Grad (Kragujevac)', opstina: 'Stari Grad', grad: 'Kragujevac', lat: 44.0100, lon: 20.9100, osm_id: 'm14' },
    ];

    // Try to get from KV first
    let stored = await kv.get("mesne_zajednice");
    
    // If not found, seed it
    if (!stored) {
      await kv.set("mesne_zajednice", MOCK_DATA);
      stored = MOCK_DATA;
    }

    return c.json(stored);
  } catch (err) {
    return c.json({ error: 'Failed to fetch mesne zajednice' }, 500);
  }
});

// Zbor Registration with File Upload
app.post(`${API_PREFIX}/register-zbor`, async (c) => {
  try {
    const body = await c.req.parseBody();
    const email = body['email'] as string;
    const password = body['password'] as string;
    const name = body['name'] as string;
    const zborName = body['zborName'] as string;
    const description = body['description'] as string;
    const mesneZajedniceStr = body['mesneZajednice'] as string;
    const logo = body['logo']; // might be File or undefined

    // 1. Create User
    const { data: authData, error: authError } = await supabase.auth.admin.createUser({
      email,
      password,
      user_metadata: { name, zborName, role: 'pending_admin' },
      email_confirm: true
    });

    if (authError) {
      console.error('Auth error:', authError);
      return c.json({ error: authError.message }, 400);
    }

    const userId = authData.user.id;
    let logoPath = null;

    // 2. Handle Logo Upload
    if (logo && logo instanceof File) {
      const bucketName = 'zbor-assets';
      // Ensure bucket exists (idempotent check)
      const { data: buckets } = await supabase.storage.listBuckets();
      if (!buckets?.some(b => b.name === bucketName)) {
        await supabase.storage.createBucket(bucketName, { public: false });
      }

      const fileExt = logo.name.split('.').pop();
      const fileName = `${userId}/logo-${crypto.randomUUID()}.${fileExt}`;
      
      const { error: uploadError } = await supabase.storage
        .from(bucketName)
        .upload(fileName, logo, {
          contentType: logo.type,
          upsert: true
        });

      if (uploadError) {
        console.error('Logo upload error:', uploadError);
      } else {
        logoPath = fileName;
      }
    }

    // 3. Store Zbor Data
    const zborId = crypto.randomUUID();
    let mesneZajednice = [];
    try {
      mesneZajednice = JSON.parse(mesneZajedniceStr);
    } catch (e) {
      console.error('JSON parse error for mesneZajednice', e);
    }

    const zborData = {
      id: zborId,
      ownerId: userId,
      name: zborName,
      description,
      mesneZajednice,
      logoPath,
      status: 'pending',
      createdAt: new Date().toISOString(),
      members: 1, 
    };

    await kv.set(`zbor:${zborId}`, zborData);
    
    // Link user to zbor
    await supabase.auth.admin.updateUserById(userId, {
      user_metadata: { ...authData.user.user_metadata, zborId }
    });

    return c.json({ message: 'Registration successful', zborId });
  } catch (err: any) {
    console.error('Registration Zbor error:', err);
    return c.json({ error: 'Registration failed: ' + err.message }, 500);
  }
});

// Admin Verification (Mock list check as requested)
app.post(`${API_PREFIX}/verify-admin`, async (c) => {
  const user = await checkAuth(c);
  if (!user) return c.json({ error: 'Unauthorized' }, 401);

  // In a real scenario, we'd check against a specific list.
  // Here we simulate the check for the "studentska podrška" list.
  const isVerified = true; // Logic: compare user.email with the external list

  if (isVerified) {
    await supabase.auth.admin.updateUserById(user.id, {
      user_metadata: { ...user.user_metadata, role: 'verified_admin' }
    });
    return c.json({ message: 'Admin verifikovan', role: 'verified_admin' });
  }

  return c.json({ error: 'Niste na listi podržavalaca studentskih zahteva.' }, 403);
});

app.get(`${API_PREFIX}/posts`, async (c) => {
  const posts = await kv.getByPrefix("post:");
  return c.json(posts);
});

app.post(`${API_PREFIX}/posts`, async (c) => {
  const user = await checkAuth(c);
  if (!user) return c.json({ error: 'Moraš biti prijavljen' }, 401);
  
  const body = await c.req.json();
  const id = crypto.randomUUID();
  const post = { 
    ...body, 
    id, 
    authorId: user.id,
    timestamp: 'сада',
    likes: 0,
    comments: 0
  };
  await kv.set(`post:${id}`, post);
  return c.json(post);
});

Deno.serve(app.fetch);
