import TabelLogPing from '@/components/TabelLogPing';
import { Suspense } from 'react';
import { TableSkeleton } from '@/components/Skeleton';
export default async function Page() {
  return (
    <div className="mx-auto pt-24 container">
      <Suspense fallback={<TableSkeleton />}>
        <TabelLogPing />
      </Suspense>
    </div>
  );
}
