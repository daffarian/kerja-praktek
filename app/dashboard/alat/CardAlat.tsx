import { Card } from '@/components/ui/card';
import { fetchAlat } from '@/lib/data';

export default async function CardAlat() {
  const alat = await fetchAlat();
  return (
    <div className="grid gap-5 sm:grid-cols-2 place-items-center md:grid-cols-3 p-5">
      {alat?.map((item: any) => (
        <div key={item.idalat}>
          <Card className="p-3">
            <p>IP : {item.ip}</p>
            <p>ID : {item.idalat}</p>
            <p>Nama : {item.namaalat}</p>
            <p>Longitude : {item.longitude}</p>
            <p>Latitude : {item.latitude}</p>
          </Card>
        </div>
      ))}
    </div>
  );
}
