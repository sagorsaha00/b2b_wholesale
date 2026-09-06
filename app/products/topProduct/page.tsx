import ProductCardSection from "@/components/product/productCard";
import { Allproducts } from "@/lib/constant/dummyProduct";

export default function TopProductGrid() {
  const curated = Allproducts.filter((p) => p.isTopProduct);

  // Fallback: if nothing is explicitly curated yet, show the most-reviewed
  // products so the shelf is never empty.
  const items =
    curated.length > 0
      ? curated
      : [...Allproducts]
          .sort((a, b) => (b.reviews ?? 0) - (a.reviews ?? 0))
          .slice(0, 4);

  return (
    <section className="mx-auto max-w-[1400px] px-6 py-10 md:px-8">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900">Top Products</h2>
        <p className="mt-1 text-sm text-gray-500">
          Best-selling picks trusted by the most buyers.
        </p>
      </div>

      {items.length === 0 ? (
        <div className="border border-dashed border-gray-300 py-20 text-center text-sm text-gray-400">
          No top products yet.
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
