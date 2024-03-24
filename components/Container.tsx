import { DisplayCard } from './Card';
import { fetchAlat } from '@/lib/data';
import { fetchWilayah } from '@/lib/data';

export async function DisplayCardContainer() {
  const alat = await fetchAlat();

  return (
    <div className="grid gap-10 md:grid-cols-2 py-10">
      {alat?.map((item: any, index: number) => (
        <DisplayCard key={index + 1}>
          <div className="bg-sky-500 font-bold text-white rounded-t-[30px] p-5 text-center">
            {item.namaalat} @ {item.namawilayah}
          </div>
          <div className="p-5">
            <table>
              <tbody>
                <tr>
                  <th className="text-left w-1/4">IP</th>
                  <td>:</td>
                  <td>{item.ip}</td>
                </tr>
                <tr>
                  <th className="text-left">Long</th>
                  <td>:</td>
                  <td>{item.longitude}</td>
                </tr>
                <tr>
                  <th className="text-left">Lat</th>
                  <td>:</td>
                  <td>{item.latitude}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </DisplayCard>
      ))}
    </div>
  );
}

export async function CardWilayahContainer(){
  const wilayah = await fetchWilayah();
  return (
    <div className='grid gap-8 py-10'>
      {wilayah?.map((item:any) => (
        <DisplayCard key={item.id_wilayah}>
          <div className="flex flex-row">
            <div className="w-1/3 bg-sky-500 text-center text-nowrap font-bold text-white px-2 py-5 rounded-l-[30px]">
              ID : {item.id_wilayah}
            </div>
            <div className="py-5 px-2 font-bold text-left w-full">
              {item.nama_wilayah}
            </div>
          </div>
        </DisplayCard>
      ))}
    </div>
  );
}
