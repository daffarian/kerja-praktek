import { CardWilayahContainer } from '@/components/Container';
import { CardWilayahSkeleton } from '@/components/Skeleton';
import { Suspense } from 'react';
export default function Page() {
  return (
    <main className="flex flex-col justify-center pt-24 w-full container">
      <Suspense fallback={<CardWilayahSkeleton />}>
        <CardWilayahContainer />
      </Suspense>
    </main>
  );
}
