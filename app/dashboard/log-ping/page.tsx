import TabelLogPing from '@/components/TabelLogPing';
import { Suspense } from 'react';
import { TableSkeleton } from '@/components/Skeleton';
export default async function Page() {
  return (
    <div className="container mx-auto pt-24">
      <Suspense fallback={<TableSkeleton />}>
        <TabelLogPing />
      </Suspense>
    </div>
  );
}
