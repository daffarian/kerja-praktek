import TabelPoolUpdateContainer from '@/components/TabelPoolUpdateContainer';
import { Suspense } from 'react';
import { TableSkeleton } from '@/components/Skeleton';
export default function Page() {
  return (
    <div className="mx-auto pt-24 container">
      <h1 className="text-xl font-bold text-sky-500 mb-5 text-center">
        Pool Update
      </h1>
      <Suspense fallback={<TableSkeleton />}>
        <TabelPoolUpdateContainer />
      </Suspense>
    </div>
  );
}
