'use client';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';

const icon = L.divIcon({
  className: 'bg-yellow-500 rounded-full',
  html: '<div class="custom-marker">●</div>',
  iconSize: [20, 20], // ukuran marker
  iconAnchor: [10, 10] // titik ancor marker
});
export default function Maps() {
  return (
    <MapContainer
      className="h-60 static z-0"
      center={[-6.2088, 106.8456]}
      zoom={8}
      minZoom={3}
      maxZoom={19}
      maxBounds={[
        [-85.06, -180],
        [85.06, 180]
      ]}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>'
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
      />
      <Marker position={[-6.2088, 106.8456]} icon={icon}>
        <Popup>Jakarta</Popup>
      </Marker>
    </MapContainer>
  );
}
