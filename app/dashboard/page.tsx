'use client';
import { LogPing, columns } from './columns';
import { DataTable } from './data-table';
import { fetchLogPing } from '@/lib/data';
import { ButtonRefresh } from '@/components/Button';
import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';

export default function Page() {
  const [data, setData] = useState([]);
  const [click, setClick] = useState(0);

  const getData = useCallback(async () => {
    const data = await fetchLogPing(1000);
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
    }, 10000);
    getData();

    // Membersihkan interval saat komponen di-unmount
    return () => {
      clearInterval(intervalId);
    };
  }, [click, getData]);

  return (
    // <div className="container mx-auto pt-24">
    //   <Button onClick={handleRefresh}>Refresh</Button>
    //   <DataTable columns={columns} data={data} />
    // </div>
    <main className='pt-24 pl-5'><p>Dashboard</p></main>
  );
}
