import { DisplayCardContainer } from "@/components/Container";
import { DisplayCardSkeleton } from "@/components/Skeleton";
import { Suspense } from "react";
export default async function Page() {
  return (
    <main className="flex flex-col justify-center pt-24 w-full container">
      <h1 className="text-xl font-bold text-sky-500 mb-5 text-center">
        Daftar Alat
      </h1>
      <Suspense fallback={<DisplayCardSkeleton />}>
        <DisplayCardContainer />
      </Suspense>
    </main>
  );
}
