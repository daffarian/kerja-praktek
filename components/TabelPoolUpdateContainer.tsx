'use client';
import { columnsTabelPoolUpdate } from '@/lib/definition';
import { DataTable } from './Tabel';
import { fetchPoolUpdate} from '@/lib/data';
import { useState, useEffect, useCallback } from 'react';

export default function TabelPoolUpdteContainer() {
  const [data, setData] = useState([]);

  const getData = useCallback(async () => {
    const data = await fetchPoolUpdate(100);
    console.log('get Data');
    setData(data);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      getData();
    }, 5000);

    // Membersihkan interval saat komponen di-unmount
    return () => {
      clearInterval(intervalId);
    };
  }, [getData]);

  return (
    <div className="">
      <DataTable columns={columnsTabelPoolUpdate} data={data} />
    </div>
  );
}
