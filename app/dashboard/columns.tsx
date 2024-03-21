import { ColumnDef } from '@tanstack/react-table';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type LogPing = {
  date: Date;
  ip: string;
  kecepatan: number;
  status: string;
};
const dateFormatter = new Intl.DateTimeFormat('id-ID', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric'
});

export const columns: ColumnDef<LogPing>[] = [
  {
    id: 'date',
    accessorFn: (row) => dateFormatter.format(row.date),

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
