import { fetchAlat } from '@/lib/data';

export default async function TabelAlat() {
  const alat = await fetchAlat();
  return (
    <>
      <table className="table-fixed overflow-x-auto">
        <thead>
          <tr>
            <th className="w-1/5">IP</th>
            <th className="w-1/5">ID</th>
            <th className="w-1/5">Nama</th>
            <th className="w-1/5">Longitude</th>
            <th className="w-1/5">Latitude</th>
          </tr>
        </thead>
        <tbody>
          {alat?.map((item: any) => (
            <tr key={item.idalat} className="border-slate-200 border-b p-4">
              <td className="px-4 py-2">{item.ip}</td>
              <td className="px-4 py-2">{item.idalat}</td>
              <td className="px-4 py-2">{item.namaalat}</td>
              <td className="px-4 py-2">{item.longitude}</td>
              <td className="px-4 py-2">{item.latitude}</td>
            </tr>
          ))}
        </tbody>
      </table>  
    </>
  );
}
