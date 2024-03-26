'use server';
const pgp = require('pg-promise')();

const { QueryResultError } = require('pg-promise');
const { PostgresError } = require('pg-promise');

import sql from './db';
import { unstable_noStore as noStore } from 'next/cache';

// Fetch Status
export async function fetchStatus() {
  noStore();
  try {
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    const data = await sql`SELECT * FROM tblstatus`;
    return data;
  } catch (err) {
    if (err instanceof pgp.errors.QueryResultError) {
      // Tangani kasus jika query timeout di sini
      console.error('Query timed out.');
      return []
    }
    console.error(`fetch status gagal : ${err}`);
    return []
  }
}
// Fetch Alat
export async function fetchAlat() {
  noStore();
  try {
    // await new Promise((resolve) => setTimeout(resolve, 3000));
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
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    const data = await sql`SELECT * FROM tblwilayah ORDER BY id_wilayah ASC`;
    return data;
  } catch (err) {
    console.error(`fetch wilayah gagal : ${err}`);
  }
}

// Fetch Log Ping
export async function fetchLogPing(limit: number) {
  noStore();

  try {
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    const data =
      await sql`SELECT * FROM tbllogping ORDER BY date DESC LIMIT ${limit}`;
    return data;
  } catch (err) {
    console.error(`fetch log ping gagal : ${err}`);
  }
}

// Fetch Pool Update
export async function fetchPoolUpdate(limit: number) {
  noStore();

  try {
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    const data =
      await sql`SELECT * FROM tblpool_update ORDER BY id ASC LIMIT ${limit}`;
    return data;
  } catch (err) {
    console.error(`fetch pool update gagal : ${err}`);
  }
}

// Get Status Db
export async function getStatusDb() {
  noStore();
  try {
    await sql`SELECT 1`;
    return true;
  } catch (err: any) {
    if (err instanceof pgp.errors.QueryResultError) {
      // Tangani kasus jika query timeout di sini
      console.error('Query timed out.');
      return false;
    }
    console.error(err);
    return false;
  }
}

// fetch status up
export async function fetchStatusUp() {
  noStore();

  try {
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    const data =
      await sql`SELECT COUNT(*) FROM tblstatus WHERE status='UP';`;
    return data[0].count;
  } catch (err) {
    console.error(`fetch status up update gagal : ${err}`);
  }
}
// fetch status down
export async function fetchStatusDown() {
  noStore();

  try {
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    const data =
      await sql`SELECT COUNT(*) FROM tblstatus WHERE status='DOWN';`;
    return data[0].count;
  } catch (err) {
    console.error(`fetch status up update gagal : ${err}`);
  }
}
