import { DisplayCardContainer } from "@/components/Container";
import { DisplayCardSkeleton } from "@/components/Skeleton";
import { Suspense } from "react";
export default async function Page() {
  return (
    <main className="flex flex-col justify-center w-full p-5">
      <Suspense fallback={<DisplayCardSkeleton />}>
        <DisplayCardContainer />
      </Suspense>
    </main>
  );
}
