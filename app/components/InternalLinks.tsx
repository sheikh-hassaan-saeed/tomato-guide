import Link from "next/link";

export type InternalLink = { label: string; href: string; desc: string };

export default function InternalLinks({ links }: { links: InternalLink[] }) {
  return (
    <aside className="my-8 p-5 bg-green-50 border border-green-200 rounded-2xl">
      <p className="text-xs font-bold text-green-700 mb-3 uppercase tracking-widest">
        Related Guides
      </p>
      <div className="space-y-3">
        {links.map(({ label, href, desc }) => (
          <Link key={href} href={href} className="flex items-start gap-3 group">
            <span className="text-green-600 font-bold mt-0.5 shrink-0">→</span>
            <span>
              <span className="text-green-800 font-semibold group-hover:underline">
                {label}
              </span>
              {desc && (
                <span className="text-gray-500 text-sm"> - {desc}</span>
              )}
            </span>
          </Link>
        ))}
      </div>
    </aside>
  );
}
