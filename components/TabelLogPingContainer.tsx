'use client';
import { columnsTabelLogPing } from '@/lib/definition';
import { DataTable } from './Tabel';
import { fetchLogPing } from '@/lib/data';
import { useState, useEffect, useCallback } from 'react';

export default function TabelLogPingContainer() {
  const [data, setData] = useState([]);

  const getData = useCallback(async () => {
    const data = await fetchLogPing(100);
    console.log('get Data');
    setData(data);
  }, []);


  useEffect(() => {
    getData();
    const intervalId = setInterval(() => {
      getData();
    }, 5000);

    // Membersihkan interval saat komponen di-unmount
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="">
      <DataTable columns={columnsTabelLogPing} data={data} />
    </div>
  );
}


