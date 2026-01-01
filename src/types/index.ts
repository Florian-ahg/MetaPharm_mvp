// src/types/index.ts

export interface Pharmacy {
  id: number;
  name: string;
  lat: number;
  lng: number;
  is_on_duty: boolean;
  quartier?: string;
  phone?: string;
  distance?: number;
  stock_info?: string; // Ajouté dynamiquement
  price?: number;      // Ajouté dynamiquement
  product_id?: number; // Ajouté dynamiquement
}

export interface Product {
  id: number;
  name: string;
  image_url?: string;
}

export interface Stock {
  id: number;
  pharmacy_id: number;
  product_id: number;
  price: number;
  available: boolean;
  products?: Product; // Jointure
  pharmacies?: Pharmacy; // Jointure
}

export interface SaleItem {
  id: number;
  quantity: number;
  unit_price: number;
  products?: { name: string };
}

export interface Order {
  id: number;
  created_at: string;
  total_amount: number;
  status: 'pending' | 'accepted' | 'delivering' | 'completed' | 'cancelled';
  customer_phone: string;
  delivery_address: string;
  sale_items: SaleItem[];
}

export interface UserLocation {
  lat: number;
  lng: number;
}
