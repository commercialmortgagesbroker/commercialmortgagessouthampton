import Link from "next/link";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
}

export function BlogCard({
  title,
  excerpt,
  date,
  readTime,
  category,
  slug,
}: BlogCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="group block overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
    >
      <div className="bg-accent/10 p-4">
        <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-white">
          {category}
        </span>
      </div>
      <div className="p-6">
        <h3 className="font-heading text-lg font-bold text-primary group-hover:text-secondary">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-gray-600">{excerpt}</p>
        <div className="mt-4 flex items-center gap-4 text-xs text-gray-400">
          <span>{date}</span>
          <span>&bull;</span>
          <span>{readTime}</span>
        </div>
      </div>
    </Link>
  );
}
