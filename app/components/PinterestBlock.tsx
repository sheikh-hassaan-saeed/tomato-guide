type Props = {
  title: string;
  description: string;
};

export default function PinterestBlock({ title, description }: Props) {
  return (
    <aside
      aria-label="Pinterest sharing info"
      className="my-6 bg-red-50 border border-red-200 rounded-2xl px-5 py-4 flex items-start gap-3"
    >
      <span className="text-2xl shrink-0" aria-hidden="true">
        📌
      </span>
      <div>
        <p className="text-xs font-bold text-red-600 uppercase tracking-widest mb-1">
          Save This Guide
        </p>
        <p className="font-bold text-gray-800 text-sm leading-snug mb-1">
          {title}
        </p>
        <p className="text-gray-600 text-xs leading-relaxed">{description}</p>
      </div>
    </aside>
  );
}
