"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import Link from "next/link";
import "leaflet/dist/leaflet.css";

interface Area {
  slug: string;
  name: string;
  coordinates: [number, number];
  type: string;
  activeSchemeCount: number;
}

interface AreaMapLeafletProps {
  areas: Area[];
  center: [number, number];
  zoom: number;
  variant: string;
  activeSlug?: string;
  height: string;
}

const defaultIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const activeIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [30, 49],
  iconAnchor: [15, 49],
  popupAnchor: [1, -40],
  shadowSize: [49, 49],
});

export function AreaMapLeaflet({
  areas,
  center,
  zoom,
  activeSlug,
  height,
}: AreaMapLeafletProps) {
  return (
    <MapContainer
      center={center}
      zoom={zoom}
      style={{ height, width: "100%" }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {areas.map((area) => (
        <Marker
          key={area.slug}
          position={area.coordinates}
          icon={area.slug === activeSlug ? activeIcon : defaultIcon}
        >
          <Popup>
            <div className="text-center">
              <strong className="text-primary">{area.name}</strong>
              <br />
              <span className="text-xs text-gray-500">
                {area.activeSchemeCount} active schemes
              </span>
              <br />
              <Link
                href={`/areas/${area.slug}`}
                className="mt-1 inline-block text-sm font-semibold text-secondary"
              >
                View {area.name} commercial mortgages →
              </Link>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
