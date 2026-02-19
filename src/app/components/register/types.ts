export interface MesnaZajednica {
  id: number;
  name: string;
  opstina: string;
  grad: string;
  lat: number;
  lon: number;
  osm_id: string;
}

export interface RegisterFormData {
  name: string;
  zborName: string;
  email: string;
  password: string;
  description: string;
  logoFile: File | null;
  mesneZajednice: MesnaZajednica[];
}
