'use client';
import { getStatusDb } from '@/lib/data';
import { useCallback, useState, useEffect } from 'react';
import clsx from 'clsx';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';

export default function DbStatus() {
  const [status, setStatus] = useState(false);

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
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <div
            className={clsx(
              'w-3 h-3 rounded-full shadow-inner',
              {
                'bg-green-400': status === true
              },
              { 'bg-red-500': status === false }
            )}
          ></div>
        </TooltipTrigger>
        <TooltipContent className='bg-white text-green-400 text-xs border-[1px] border-slate-200'>
          {status == true ? <p className='text-green-400'>DB Conected</p>: <p className='text-red-500'>DB Conection Lost</p>}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
