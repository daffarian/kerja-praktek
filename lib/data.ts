'use server';
import sql from './db';
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchAlat() {
  noStore();
  try {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const data = await sql`SELECT * FROM tblalat`;
    return data;
  } catch (err) {
    console.error(`fetch alat gagal : ${err}`);
  }
}
