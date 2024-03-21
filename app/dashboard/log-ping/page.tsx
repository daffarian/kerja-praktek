import TabelLogPing from '@/components/TabelLogPing';
import { Suspense } from 'react';
import { TableSkeleton } from '@/components/Skeleton';
export default async function Page() {
  return (
    <div className="mx-auto pt-24 container">
      <h1 className='text-xl font-bold text-sky-500 mb-5 text-center'>Log Ping</h1>
      <Suspense fallback={<TableSkeleton />}>
        <TabelLogPing />
      </Suspense>
    </div>
  );
}
