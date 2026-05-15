import Link from "next/link";
import Image from "next/image";

interface AreaCardProps {
  areaName: string;
  description: string;
  recentSchemes: number;
  linkUrl: string;
  /** Optional Unsplash photo ID or full image URL, if omitted, a gradient placeholder renders. */
  imageId?: string;
  /** Short lat/lon or postcode label, optional, shown as mono tag over the image. */
  coordLabel?: string;
}

const UNSPLASH_BASE = "https://images.unsplash.com";

function resolveSrc(idOrUrl: string, w: number) {
  if (idOrUrl.startsWith("http")) return idOrUrl;
  return `${UNSPLASH_BASE}/photo-${idOrUrl}?auto=format&fit=crop&w=${w}&q=70`;
}

export function AreaCard({
  areaName,
  description,
  recentSchemes,
  linkUrl,
  imageId,
  coordLabel,
}: AreaCardProps) {
  return (
    <Link
      href={linkUrl}
      className="group flex h-full flex-col overflow-hidden rounded-lg border border-[color:var(--color-rule)] bg-[color:var(--color-white)] transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--color-accent)]/40 hover:shadow-[0_24px_48px_-28px_rgba(14,14,18,0.22)]"
    >
      {/* Image / gradient top slab */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-[color:var(--color-paper-deep)]">
        {imageId ? (
          <Image
            src={resolveSrc(imageId, 600)}
            alt={`${areaName} development area`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, color-mix(in oklch, var(--color-accent), transparent 80%) 0%, color-mix(in oklch, var(--color-ink), transparent 85%) 100%)",
            }}
          />
        )}
        <div
          aria-hidden
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "linear-gradient(180deg, transparent 40%, color-mix(in oklch, var(--color-ink), transparent 40%) 100%)",
          }}
        />
        {coordLabel && (
          <span className="absolute bottom-3 right-3 rounded-sm bg-[color:var(--color-paper)]/90 px-2 py-0.5 font-mono text-[0.65rem] tracking-widest text-[color:var(--color-ink)]">
            {coordLabel}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex grow flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-editorial text-xl leading-tight text-[color:var(--color-ink)] transition-colors duration-200 group-hover:text-[color:var(--color-accent)]">
            {areaName}
          </h3>
          <span className="shrink-0 rounded-full bg-[color:var(--color-paper-deep)] px-2.5 py-1 text-xs font-medium text-[color:var(--color-ink-soft)]">
            <span className="fig">{recentSchemes}</span> active
          </span>
        </div>
        <p className="mt-3 grow text-sm leading-relaxed text-[color:var(--color-muted)]">
          {description}
        </p>
        <div className="mt-5 flex items-center gap-2 text-sm font-medium text-[color:var(--color-accent)]">
          Explore area
          <span
            aria-hidden
            className="inline-block translate-x-0 transition-transform duration-200 group-hover:translate-x-1"
          >
            →
          </span>
        </div>
      </div>
    </Link>
  );
}
