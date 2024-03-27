'use client';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import { useCallback, useState, useEffect } from 'react';
import { fetchStatus } from '@/lib/data';
import { Icons } from '@/components/Icons';
import { fetchStatusUp, fetchStatusDown } from '@/lib/data';


// Marker
const markerRed = L.divIcon({
  className: 'bg-red-500 border-[1px] border-black rounded-full',
  html: '<div class="custom-marker"></div>',
  iconSize: [10, 10], // ukuran marker
  iconAnchor: [10, 10] // titik ancor marker
});
const markerGreen = L.divIcon({
  className: 'bg-green-500 border-[1px] border-black rounded-full',
  html: '<div class="custom-marker"></div>',
  iconSize: [10, 10], // ukuran marker
  iconAnchor: [10, 10] // titik ancor marker
});



export default function Maps({className}:{className:any}) {
  const [up, setUp] = useState()
  const [down, setDown] = useState()
  const [data, setData] = useState([]);
  const getData = useCallback(async () => {
    const [statusUp, statusDown, status] = await Promise.all([
      fetchStatusUp(),
      fetchStatusDown(),
      fetchStatus()
    ]);
    setUp(statusUp)
    setDown(statusDown)
    setData(status);
  }, []);

  // Interval fetch
  useEffect(() => {
    getData();
    const interval = setInterval(() => {
      getData();
    }, 5000);

    // Membersihkan interval saat komponen di-unmount
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <MapContainer
      className={`h-full static z-0 border-y-[1px] border-slate-400 ${className}`}
      center={[-3.2122243, 108.952847]}
      zoom={5}
      minZoom={3}
      maxZoom={19}
      maxBounds={[
        [-85.06, -180],
        [85.06, 180]
      ]}
    >
      <TileLayer url="https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}@2x.png?key=22QvCdWFvSOHrDKkmR9M" />
      {data?.map((item: any) => (
        <Marker
          key={item.ip}
          position={[item.lat, item.long]}
          icon={item.status == 'UP' ? markerGreen : markerRed}
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        >
          <Popup>
            <div className="flex flex-col text-left text-slate-500 dark:text-slate-500">
              <div className="font-bold text-slate-500 dark:text-slate-500">
                {item.nama_wilayah}
              </div>
              <div className="text-slate-500 dark:text-slate-500">
                {item.ip}
              </div>
              <div className="text-slate-500 dark:text-slate-500">
                {item.nama_alat}
              </div>
              <div className="text-slate-500 dark:text-slate-500">
                Status : {item.status}
              </div>
              <div className="text-slate-500 dark:text-slate-500">
                Latency : {item.kecepatan}
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
      {/* Panel Info */}
      {/* Status Up */}
      <div className="flex flex-row gap-2 w-[16rem] z-[1000] absolute top-3 inset-x-0 mx-auto">
        <div className="bg-green-500 py-2 w-1/2  rounded-xl flex flex-row justify-between">
          <div className="px-3">
            <div className="text-white text-xs">Status Up</div>
            <div className="text-white text-lg">{up || '0'}</div>
          </div>
          <div className="w-1/4 flex items-center justify-center border-l border-white">
            {Icons.up}
          </div>
        </div>

        {/* Status Down */}
        <div className="bg-red-500 py-2 w-1/2  rounded-xl flex flex-row justify-between">
          <div className="px-3">
            <div className="text-white text-xs">Status Down</div>
            <div className="text-white text-lg">{down || '0'}</div>
          </div>
          <div className="w-1/4 flex items-center justify-center border-r rotate-180 border-white">
            {Icons.up}
          </div>
        </div>
      </div>
    </MapContainer>
  );
}
