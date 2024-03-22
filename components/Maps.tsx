'use client';
import 'leaflet/dist/leaflet.css'; // Import stylesheet default Leaflet
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/images/marker-icon.png'; // Import icon default Leaflet
import 'leaflet/dist/images/marker-shadow.png'; // Import icon default Leaflet
import myIcon from './components/marker-icon.png';
import { Suspense } from 'react';

const MyIcon = L.icon({
  iconUrl: './marker-icon.png',
  iconSize: [32, 32], // Ukuran ikon (lebar, tinggi)
  iconAnchor: [16, 32], // Titik jangkar ikon (x, y)
  popupAnchor: [0, -32] // Posisi popup relatif terhadap jangkar ikon (x, y)
});

export default function Maps() {
  const position = [-6.2088, 106.8456];

  return (
    <Suspense fallback={'Loading..'}>
      <MapContainer
        className="h-60 mx-2 rounded-md static z-0"
        center={[-6.2088, 106.8456]}
        zoom={6}
        minZoom={3}
        maxZoom={19}
        maxBounds={[
          [-85.06, -180],
          [85.06, 180]
        ]}
        scrollWheelZoom={true}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {/* <Marker position={[-6.2088, 106.8456]}>
        <Popup>Jakarta</Popup>
      </Marker> */}
      </MapContainer>
    </Suspense>
  );
}
