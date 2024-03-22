'use client'
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet'

const icon = L.divIcon({
  className: 'bg-yellow-500 rounded-full',
  html: '<div class="custom-marker">●</div>',
  iconSize: [20, 20], // ukuran marker
  iconAnchor: [10, 10] // titik ancor marker
});
export default function Maps() {

  return (
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
      <Marker position={[-6.2088, 106.8456]} icon={icon} >
        <Popup>Jakarta</Popup>
      </Marker>
    </MapContainer>
  );
}
