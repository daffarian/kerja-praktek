import dynamic from 'next/dynamic';
const Maps = dynamic(() => import('@/components/Maps'), {
  ssr: false
});


export default async function Page() {
  
  return (
    <main className="pt-20 static h-svh">
      <div className='h-full'>
        <Maps className={'pt-20'}>
        </Maps>
      </div>
    </main>
  );
}
