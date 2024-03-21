'use client';
import { columns } from '@/lib/definition';
import { DataTable } from './Tabel';
import { fetchLogPing } from '@/lib/data';
import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Icons } from './Icons';

export default function TabelLogPing() {
  const [data, setData] = useState([]);
  const [click, setClick] = useState(0);

  const getData = useCallback(async () => {
    const data = await fetchLogPing(100);
    console.log('get Data');
    setData(data);
  }, []);

  const handleRefresh = () => {
    console.log('Clicked');
    setClick((prev) => prev + 1);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      getData();
    }, 5000);
    getData();

    // Membersihkan interval saat komponen di-unmount
    return () => {
      clearInterval(intervalId);
    };
  }, [click, getData]);

  return (
    <div className="">
      <Button className="focus:rotate-180" onClick={handleRefresh}>
        <span className='active:rotate-90 inline-block'>{Icons.refresh}</span>
      </Button>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
