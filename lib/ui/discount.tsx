export function DiscountBadge({ discount }: { discount?: number }) {
  if (!discount) return null;
  return (
    <span className="absolute left-4 top-4 z-10 rounded-full bg-[#0F172A] px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-white shadow-sm">
      {discount}% OFF
    </span>
  );
}
