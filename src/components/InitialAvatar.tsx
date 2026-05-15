/**
 * Deterministic initials-avatar, no stock portraits, no photography.
 * Humanises testimonials / team cards without faking identities.
 *
 * Colour is derived from a hash of the person's name so the same person
 * always gets the same accent. Uses the site accent hue family by default.
 */

interface InitialAvatarProps {
  name: string;
  size?: number;
  className?: string;
  /** Optional override, if provided, renders a photo instead of initials. */
  src?: string;
}

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function hashHue(seed: string): number {
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  }
  return h % 360;
}

export function InitialAvatar({ name, size = 48, className = "", src }: InitialAvatarProps) {
  if (src) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={name}
        width={size}
        height={size}
        className={`rounded-full object-cover ${className}`}
        style={{ width: size, height: size }}
      />
    );
  }
  const initials = getInitials(name);
  const hue = hashHue(name);
  const bg = `hsl(${hue}, 62%, 32%)`;
  const ring = `hsl(${hue}, 62%, 24%)`;

  return (
    <div
      aria-hidden
      className={`inline-flex items-center justify-center rounded-full font-medium text-[color:var(--color-paper)] ${className}`}
      style={{
        width: size,
        height: size,
        background: bg,
        boxShadow: `inset 0 0 0 1px ${ring}`,
        fontSize: size * 0.38,
        fontFamily: "var(--font-serif)",
        letterSpacing: "-0.02em",
      }}
    >
      {initials}
    </div>
  );
}
