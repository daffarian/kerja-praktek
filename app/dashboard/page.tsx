import dynamic from "next/dynamic";
const Maps = dynamic(() => import('@/components/Maps'), {
  ssr: false
});

export default function Page() {
  return (
    <main className="pt-24">
      <Maps/>
    </main>
  );
}
