"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AREAS, SOUTHAMPTON_CENTER } from "@/lib/constants";

interface Area {
  slug: string;
  name: string;
  coordinates: [number, number];
  type: string;
  activeSchemeCount: number;
}

interface AreaMapProps {
  areas?: Area[];
  center?: [number, number];
  zoom?: number;
  variant?: "full" | "locator" | "mini" | "pins";
  activeSlug?: string;
  height?: string;
}

export function AreaMap({
  areas = AREAS,
  center = SOUTHAMPTON_CENTER,
  zoom = 12,
  variant = "mini",
  activeSlug,
  height = variant === "mini" ? "250px" : variant === "locator" ? "300px" : "400px",
}: AreaMapProps) {
  const [MapComponent, setMapComponent] = useState<React.ComponentType<{
    areas: Area[];
    center: [number, number];
    zoom: number;
    variant: string;
    activeSlug?: string;
    height: string;
  }> | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    import("./AreaMapLeaflet").then((mod) => {
      setMapComponent(() => mod.AreaMapLeaflet);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <div style={{ height }} className="relative rounded-lg overflow-hidden border border-gray-200 bg-gray-100">
        {loading || !MapComponent ? (
          <div className="flex h-full items-center justify-center">
            <div className="text-center">
              <div className="mx-auto mb-3 h-8 w-8 animate-spin rounded-full border-4 border-secondary border-t-transparent" />
              <p className="text-sm text-gray-500">Loading map...</p>
            </div>
          </div>
        ) : (
          <MapComponent
            areas={areas}
            center={center}
            zoom={zoom}
            variant={variant}
            activeSlug={activeSlug}
            height={height}
          />
        )}
      </div>
      {/* Accessible text links for crawlability */}
      <nav aria-label="Area links" className="mt-4">
        <ul className="flex flex-wrap gap-2">
          {areas.map((area) => (
            <li key={area.slug}>
              <Link
                href={`/areas/${area.slug}`}
                className={`inline-block rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                  area.slug === activeSlug
                    ? "bg-secondary text-white"
                    : "bg-white text-primary border border-gray-200 hover:border-secondary hover:text-secondary"
                }`}
              >
                {area.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
