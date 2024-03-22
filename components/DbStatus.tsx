'use client';
import { getStatusDb } from '@/lib/data';
import { useCallback, useState, useEffect } from 'react';
import clsx from 'clsx';
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover';

export default function DbStatus() {
  const [status, setStatus] = useState(true);

  const getStatus = useCallback(async () => {
    const data = await getStatusDb();
    setStatus(data);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      getStatus();
      console.log(status);
    }, 10000);

    // Membersihkan interval saat komponen di-unmount
    return () => {
      clearInterval(interval);
    };
  }, [getStatus]);

  return (
    <Popover>
      <PopoverTrigger>
        <div
          className={clsx(
            'w-3 h-3 rounded-full shadow-inner m-2',
            {
              'bg-green-500': status === true
            },
            { 'bg-red-500': status === false }
          )}
        ></div>
      </PopoverTrigger>
      <PopoverContent className={'text-xs px-2 py-1'}>
        {status == true ? (
          <p className="text-green-400">DB Conected</p>
        ) : (
          <p className="text-red-500">DB Conection Lost</p>
        )}
      </PopoverContent>
    </Popover>
  );
}
