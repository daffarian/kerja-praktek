import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";
import CardAlat from "./CardAlat";

export default async function Page(){
  
  return (
    <main className="flex justify-center pt-5">
      <Suspense
        fallback={<Skeleton className="h-[125px] w-[250px] rounded-md" />}
      >
        <CardAlat />
      </Suspense>
    </main>
  );
}