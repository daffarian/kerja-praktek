'use client';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import { useCallback, useState, useEffect } from 'react';
import { fetchStatus } from '@/lib/data';

const markerRed = L.divIcon({
  className: 'bg-red-500 rounded-full',
  html: '<div class="custom-marker">●</div>',
  iconSize: [10, 10], // ukuran marker
  iconAnchor: [10, 10] // titik ancor marker
});
const markerGreen = L.divIcon({
  className: 'bg-green-500 rounded-full',
  html: '<div class="custom-marker">●</div>',
  iconSize: [10, 10], // ukuran marker
  iconAnchor: [10, 10] // titik ancor marker
});



export default function Maps() {
  const [data, setData] = useState([]);
  const getData = useCallback(async () => {
    const status = await fetchStatus();
    setData(status);
  }, []);

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
      className="h-80 static z-0"
      center={[-3.2122243, 108.9528470]}
      zoom={4.5}
      minZoom={3}
      maxZoom={19}
      maxBounds={[
        [-85.06, -180],
        [85.06, 180]
      ]}
      scrollWheelZoom={true}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {data.map((item: any) => (
        <Marker
          key={item.ip}
          position={[item.lat, item.long]}
          icon={item.status == 'UP' ? markerGreen : markerRed}
        >
          <Popup>
            <div className='flex flex-col text-left'>
              <div className='font-bold'>{item.nama_wilayah}</div>
              <div>{item.ip}</div>
              <div>{item.nama_alat}</div>
              <div>{item.status}</div>
              <div>{item.kecepatan}</div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
