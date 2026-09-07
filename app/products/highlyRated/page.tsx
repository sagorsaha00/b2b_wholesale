import ProductCardSection from "@/components/product/productCard";
import { Allproducts } from "@/lib/constant/dummyData";

const MIN_RATING = 4.5;

export default function HighlyRatedGrid() {
  const items = Allproducts.filter((p) => (p.rating ?? 0) >= MIN_RATING).sort(
    (a, b) => (b.rating ?? 0) - (a.rating ?? 0),
  );

  return (
    <section className="mx-auto max-w-[1400px] px-6 py-10 md:px-8">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900">Highly Rated</h2>
        <p className="mt-1 text-sm text-gray-500">
          Products rated {MIN_RATING}★ and above by buyers.
        </p>
      </div>

      {items.length === 0 ? (
        <div className="border border-dashed border-gray-300 py-20 text-center text-sm text-gray-400">
          No highly rated products yet.
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {items.map((p) => (
            <ProductCardSection key={p.id} product={p} />
          ))}
        </div>
      )}
    </section>
  );
}
