import { CardWilayahContainer } from '@/components/Container';
import { CardWilayahSkeleton } from '@/components/Skeleton';
import { Suspense } from 'react';
export default function Page() {
  return (
    <main className="flex flex-col justify-center pt-24 w-full container">
      <h1 className="text-xl font-bold text-sky-500 mb-5 text-center">
        Daftar Wilayah
      </h1>
      <Suspense fallback={<CardWilayahSkeleton />}>
        <CardWilayahContainer />
      </Suspense>
    </main>
  );
}
