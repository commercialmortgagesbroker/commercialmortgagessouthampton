import { InitialAvatar } from "@/components/InitialAvatar";

interface TestimonialCardProps {
  quote: string;
  name: string;
  company: string;
  rating?: number;
  /** Optional photo URL, if not supplied, a warm initials avatar is used. */
  avatarSrc?: string;
}

export function TestimonialCard({
  quote,
  name,
  company,
  rating = 5,
  avatarSrc,
}: TestimonialCardProps) {
  return (
    <figure className="flex h-full flex-col rounded-lg border border-[color:var(--color-rule)] bg-[color:var(--color-white)] p-6 transition-all duration-200 hover:border-[color:var(--color-accent)]/40 hover:shadow-[0_12px_32px_-20px_rgba(14,14,18,0.2)]">
      <div className="mb-5 flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: rating }).map((_, i) => (
          <svg
            key={i}
            className="h-4 w-4"
            style={{ color: "var(--color-accent)" }}
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <blockquote className="grow font-editorial text-lg leading-relaxed text-[color:var(--color-ink)]">
        <span aria-hidden className="text-[color:var(--color-accent)]">&ldquo;</span>
        {quote}
        <span aria-hidden className="text-[color:var(--color-accent)]">&rdquo;</span>
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-[color:var(--color-rule)] pt-4">
        <InitialAvatar name={name} size={44} src={avatarSrc} />
        <div>
          <p className="text-sm font-semibold text-[color:var(--color-ink)]">{name}</p>
          <p className="text-xs text-[color:var(--color-muted)]">{company}</p>
        </div>
      </figcaption>
    </figure>
  );
}
