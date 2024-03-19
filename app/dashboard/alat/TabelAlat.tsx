import { fetchAlat } from '@/lib/data';

export default async function TabelAlat() {
  const alat = await fetchAlat();
  return (
    <>
      {/* <table className="table-fixed overflow-x-auto">
        <thead>
          <tr>
            <th className="w-1/12">NO</th>
            <th className="w-1/5">NAMA</th>
            <th className="w-1/5">IP</th>
            <th className="w-1/5">ID</th>
            <th className="w-1/5">Longitude</th>
            <th className="w-1/5">Latitude</th>
          </tr>
        </thead>
        <tbody>
          {alat?.map((item: any, index: number) => (
            <tr key={item.idalat} className="border-slate-200 border-b p-4">
              <td className="px-4 py-2 text-center">{index + 1}</td>
              <td className="px-4 py-2 text-center text-nowrap">{item.namaalat}</td>
              <td className="px-4 py-2 text-center">{item.ip}</td>
              <td className="px-4 py-2 text-center">{item.idalat}</td>
              <td className="px-4 py-2 text-center">{item.longitude}</td>
              <td className="px-4 py-2 text-center">{item.latitude}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </>
  );
}
