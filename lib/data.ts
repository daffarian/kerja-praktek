'use server';
import sql from './db';
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchAlat() {
  noStore();
  try {
    await new Promise((resolve) => setTimeout(resolve, 3000));  
    const data = await sql`SELECT * FROM get_alat()`;
    return data;
  } catch (err) {   
    console.error(`fetch alat gagal : ${err}`);
  }
}

export async function fetchWilayah() {
  noStore();
  try {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const data = await sql`SELECT * FROM tblwilayah ORDER BY id_wilayah ASC`;
    return data;
  } catch (err) {
    console.error(`fetch alat gagal : ${err}`);
  }
} 
