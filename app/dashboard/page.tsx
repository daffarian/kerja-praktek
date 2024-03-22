import dynamic from "next/dynamic";
const Maps = dynamic(() => import('@/components/Maps'), {
  ssr: false
});

export default function Page() {
  return (
    <main className="pt-24">
      <p className="pl-5">Dashboard</p>
      <Maps/>
    </main>
  );
}
