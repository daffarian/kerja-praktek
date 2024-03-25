import dynamic from 'next/dynamic';
const Maps = dynamic(() => import('@/components/Maps'), {
  ssr: false
});
import { Icons } from '@/components/Icons';
import { fetchStatusUp, fetchStatusDown } from '@/lib/data';

export default async function Page() {
  const statusUp = await fetchStatusUp();
  const statusDown = await fetchStatusDown();
  return (
    <main className="pt-20  h-screen flex flex-col">
      <Maps className={''}>
        {/* Status Up */}
        <div className="flex flex-row gap-2 w-[20rem] z-[1000] absolute top-8 inset-x-0 mx-auto">
          <div className="bg-green-500 py-2 w-1/2  rounded-xl flex flex-row justify-between">
            <div className="px-3">
              <div className="text-white text-sm">Status Up</div>
              <div className="text-white text-2xl">{statusUp[0].total}</div>
            </div>
            <div className="w-1/3 flex items-center justify-center border-l border-white">
              {Icons.up}
            </div>
          </div>

          {/* Status Down */}
          <div className="bg-red-500 py-2 w-1/2  rounded-xl flex flex-row justify-between">
            <div className="px-3">
              <div className="text-white text-sm">Status Down</div>
              <div className="text-white text-2xl">{statusDown[0].total}</div>
            </div>
            <div className="w-1/3 flex items-center justify-center border-r rotate-180 border-white">
              {Icons.up}
            </div>
          </div>
        </div>
      </Maps>
    </main>
  );
}
