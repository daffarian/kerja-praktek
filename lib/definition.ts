import { ColumnDef } from '@tanstack/react-table';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
// Type untuk tabel logping
export type LogPing = {
  date: Date;
  ip: string;
  kecepatan: number;
  status: string;
};

// Type untuk tabel pool update
export type PoolUpdate = {
  id: number;
  sql: string;
};

// format data singkat
function formatDate(date:any) {
  const year = date.getFullYear().toString().slice(-2); // Ambil 2 digit terakhir tahun
  const month = ('0' + (date.getMonth() + 1)).slice(-2); // Tambah 0 di depan jika bulan kurang dari 10
  const day = ('0' + date.getDate()).slice(-2); // Tambah 0 di depan jika hari kurang dari 10
  const hours = ('0' + date.getHours()).slice(-2); // Tambah 0 di depan jika jam kurang dari 10
  const minutes = ('0' + date.getMinutes()).slice(-2); // Tambah 0 di depan jika menit kurang dari 10
  const seconds = ('0' + date.getSeconds()).slice(-2); // Tambah 0 di depan jika detik kurang dari 10

  return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
}

// Export column tabel log ping
export const columnsTabelLogPing: ColumnDef<LogPing>[] = [
  {
    id: 'date',
    accessorFn: (row) => formatDate(row.date),

    header: 'WAKTU'
  },
  {
    accessorKey: 'ip',
    header: 'IP'
  },
  {
    accessorKey: 'kecepatan',
    header: 'KECEPATAN'
  },
  {
    accessorKey: 'status',
    header: 'STATUS'
  }
];

// Export column tabel pool update
export const columnsTabelPoolUpdate: ColumnDef<PoolUpdate>[] =[
  {
    accessorKey: 'id',
    header: 'ID'
  },
  {
    accessorKey: 'sql',
    header: 'SQL'
  }
];
