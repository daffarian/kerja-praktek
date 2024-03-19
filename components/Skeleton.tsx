import { Skeleton } from './ui/skeleton';
export function TableSkeleton() {
  return (
    <div className="overflow-x-auto px-5">
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
          {[...Array(10)].map(
            (
              _,
              index // Perulangan sebanyak 10 kali
            ) => (
              <tr key={index} className="border-slate-200 border-b p-4">
                <td className="px-4 py-2">
                  <Skeleton className="w-40 h-10" />
                </td>
                <td className="px-4 py-2">
                  <Skeleton className="w-40 h-10" />
                </td>
                <td className="px-4 py-2">
                  <Skeleton className="w-40 h-10" />
                </td>
                <td className="px-4 py-2">
                  <Skeleton className="w-40 h-10" />
                </td>
                <td className="px-4 py-2">
                  <Skeleton className="w-40 h-10" />
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}
