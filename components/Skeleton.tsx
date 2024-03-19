'use client'
import { Skeleton } from './ui/skeleton';
import { DisplayCard } from './Card';
export function TableSkeleton() {
  return (
    <div className="overflow-x-auto px-5">
      <table className="table-fixed overflow-x-auto">
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
          {[...Array(10)].map(
            (
              _,
              index // Perulangan sebanyak 10 kali
            ) => (
              <tr key={index} className="border-slate-200 border-b p-4">
                <td className="px-4 py-2">
                  <Skeleton className="w-5 h-8" />
                </td>
                <td className="px-4 py-2">
                  <Skeleton className="w-40 h-8" />
                </td>
                <td className="px-4 py-2">
                  <Skeleton className="w-40 h-8" />
                </td>
                <td className="px-4 py-2">
                  <Skeleton className="w-40 h-8" />
                </td>
                <td className="px-4 py-2">
                  <Skeleton className="w-40 h-8" />
                </td>
                <td className="px-4 py-2">
                  <Skeleton className="w-40 h-8" />
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

// Display Card Alat Skeleton
export function DisplayCardSkeleton() {
  return (
    <div className='flex flex-col gap-10'>
      {[...Array(3)].map(
        (
          _,
          index // Perulangan sebanyak 10 kali
        ) => (
          <DisplayCard key={index}>
            <div className="flex font-bold text-white rounded-t-2xl text-center">
              <Skeleton className="w-full rounded-t-[30px] h-10" />
            </div>
            <div className="p-5 flex flex-col gap-3">
              <Skeleton className="w-full h-5" />
              <Skeleton className="w-full h-5" />
              <Skeleton className="w-full h-5" />
            </div>
          </DisplayCard>
        )
      )}
    </div>
  );
}
