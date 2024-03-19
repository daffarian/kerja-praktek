import { DisplayCard } from './Card';
import { fetchAlat } from '@/lib/data';

export async function DisplayCardContainer() {
  const alat = await fetchAlat();

  return (
    <div className="grid gap-10 md:grid-cols-2">
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
