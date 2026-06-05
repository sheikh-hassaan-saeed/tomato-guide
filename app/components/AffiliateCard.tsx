type Props = {
  icon: string;
  name: string;
  description: string;
  benefit: string;
  placement: string;
  cta: string;
};

export default function AffiliateCard({
  icon,
  name,
  description,
  benefit,
  placement,
  cta,
}: Props) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col">
      <div className="text-3xl mb-2" aria-hidden="true">
        {icon}
      </div>
      <h3 className="font-bold text-gray-800 mb-1">{name}</h3>
      <p className="text-sm text-gray-600 mb-3 flex-1">{description}</p>
      <p className="text-sm text-green-700 font-medium mb-1">✓ {benefit}</p>
      <p className="text-xs text-gray-400 italic mb-4">{placement}</p>
      <div className="mt-auto flex items-center justify-center gap-2 bg-amber-50 border border-amber-200 rounded-lg px-4 py-2.5">
        <span className="text-sm" aria-hidden="true">🔗</span>
        <span className="text-sm font-semibold text-amber-700">
          Amazon Link Coming Soon
        </span>
      </div>
    </div>
  );
}
