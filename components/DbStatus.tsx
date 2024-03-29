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
    getStatus();
    const interval = setInterval(() => {
      getStatus();
    }, 5000);

    // Membersihkan interval saat komponen di-unmount
    return () => {
      clearInterval(interval);
    };
  }, [status]);

  return (
    <Popover>
      <PopoverTrigger>
        <div
          className={clsx(
            'w-3 h-3 rounded-full shadow-inner m-2',
            { '!bg-red-500': status === false },
            {
              '!bg-[#90ff11]': status === true
            }
          )}
        ></div>
      </PopoverTrigger>
      <PopoverContent className={'text-xs px-2 py-1 dark:bg-slate-900'}>
        {status == true ? (
          <p className="text-[#9ef13e]">DB Conected</p>
        ) : (
          <p className="text-red-500">DB Conection Lost</p>
        )}
      </PopoverContent>
    </Popover>
  );
}
