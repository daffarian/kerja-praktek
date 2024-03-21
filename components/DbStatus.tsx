'use client';
import { getStatusDb } from '@/lib/data';
import { useCallback, useState, useEffect } from 'react';
import clsx from 'clsx';
export default function DbStatus() {
  const [status, setStatus] = useState(false);

  const getStatus = useCallback(async () => {
    const data = await getStatusDb();
    setStatus(data);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      getStatus();
    }, 10000);

    // Membersihkan interval saat komponen di-unmount
    return () => {
      clearInterval(interval);
    };
  }, [getStatus]);

  return (
    <div
      className={clsx('w-3 h-3 rounded-full bg-red-500 shadow-inner',{
        'bg-green-400' : status === true
      })}
    ></div>
  );
}
