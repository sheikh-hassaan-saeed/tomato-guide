export type FAQItem = { q: string; a: string };

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  return (
    <div className="space-y-3">
      {items.map(({ q, a }) => (
        <details
          key={q}
          className="bg-white border border-gray-200 rounded-xl shadow-sm group"
        >
          <summary className="flex justify-between items-center cursor-pointer px-5 py-4 font-semibold text-green-800 list-none">
            {q}
            <span className="ml-4 text-green-600 text-lg group-open:rotate-45 transition-transform duration-200 select-none">
              +
            </span>
          </summary>
          <div className="px-5 pb-4 pt-2 text-gray-700 text-sm leading-relaxed border-t border-gray-100">
            {a}
          </div>
        </details>
      ))}
    </div>
  );
}
