'use server';
import sql from './db';
import { unstable_noStore as noStore } from 'next/cache';

// Fetch Alat
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

// Fetch Wilayah
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

// Fetch Log Ping
export async function fetchLogPing(limit: number) {
  noStore()
  
  try {
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    const data =
      await sql`SELECT * FROM tbllogping ORDER BY date DESC LIMIT ${limit}`
    return data;
  } catch (err) {
    console.error(`fetch alat gagal : ${err}`);
  }
}
