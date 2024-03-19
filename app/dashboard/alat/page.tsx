import { Suspense } from 'react';
import TabelAlat from './TabelAlat';
import { TableSkeleton } from '@/components/Skeleton';
export default async function Page() {
  return (
    <main className="flex flex-col justify-center pt-5">
      <Suspense fallback={<TableSkeleton />}>
        <div className="overflow-x-auto px-5">
          <TabelAlat />
        </div>
      </Suspense>
    </main>
  );
}
