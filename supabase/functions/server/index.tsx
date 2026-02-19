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
      { id: 15, name: 'Centar', opstina: 'Pančevo', grad: 'Pančevo', lat: 44.8708, lon: 20.6403, osm_id: 'm15' },
      { id: 16, name: 'Strelište', opstina: 'Pančevo', grad: 'Pančevo', lat: 44.8620, lon: 20.6550, osm_id: 'm16' },
      { id: 17, name: 'Centar', opstina: 'Čačak', grad: 'Čačak', lat: 43.8914, lon: 20.3506, osm_id: 'm17' },
      { id: 18, name: 'Centar', opstina: 'Kraljevo', grad: 'Kraljevo', lat: 43.7254, lon: 20.6893, osm_id: 'm18' },
      { id: 19, name: 'Centar', opstina: 'Užice', grad: 'Užice', lat: 43.8556, lon: 19.8425, osm_id: 'm19' },
      { id: 20, name: 'Centar', opstina: 'Subotica', grad: 'Subotica', lat: 46.1004, lon: 19.6676, osm_id: 'm20' },
      { id: 21, name: 'Prozivka', opstina: 'Subotica', grad: 'Subotica', lat: 46.0900, lon: 19.6600, osm_id: 'm21' },
      { id: 22, name: 'Centar', opstina: 'Zrenjanin', grad: 'Zrenjanin', lat: 45.3814, lon: 20.3862, osm_id: 'm22' },
      { id: 23, name: 'Bagljaš', opstina: 'Zrenjanin', grad: 'Zrenjanin', lat: 45.3850, lon: 20.3700, osm_id: 'm23' },
      { id: 24, name: 'Sremčica', opstina: 'Čukarica', grad: 'Beograd', lat: 44.6738, lon: 20.3924, osm_id: 'm24' },
      { id: 25, name: 'Žarkovo', opstina: 'Čukarica', grad: 'Beograd', lat: 44.7578, lon: 20.4190, osm_id: 'm25' },
      { id: 26, name: 'Batajnica', opstina: 'Zemun', grad: 'Beograd', lat: 44.9080, lon: 20.2760, osm_id: 'm26' },
      { id: 27, name: 'Surčin', opstina: 'Surčin', grad: 'Beograd', lat: 44.7938, lon: 20.2800, osm_id: 'm27' },
      { id: 28, name: 'Slavujev Potok', opstina: 'Zvezdara', grad: 'Beograd', lat: 44.8050, lon: 20.4950, osm_id: 'm28' },
      { id: 29, name: 'Vuk Karadžić', opstina: 'Zvezdara', grad: 'Beograd', lat: 44.8030, lon: 20.4850, osm_id: 'm29' },
      { id: 30, name: 'Mirijevo', opstina: 'Zvezdara', grad: 'Beograd', lat: 44.7960, lon: 20.5230, osm_id: 'm30' },
      { id: 31, name: 'Lion', opstina: 'Zvezdara', grad: 'Beograd', lat: 44.7980, lon: 20.4980, osm_id: 'm31' },
    ];

const getMesneZajednice = (c: any) => c.json(MOCK_DATA);

// Handle both full path and potentially stripped path
app.get(`${API_PREFIX}/mesne-zajednice`, getMesneZajednice);
app.get('/mesne-zajednice', getMesneZajednice);

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
