import ProductCardSection from "@/components/product/productCard";
import { Allproducts } from "@/lib/constant/dummyProduct";


export default function NewArrivalsGrid() {
  const items = Allproducts.filter((p) => p.isNew);

  return (
    <section className="mx-auto max-w-[1400px] px-6 py-10 md:px-8">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900">New Arrivals</h2>
        <p className="mt-1 text-sm text-gray-500">
          The latest products added by our suppliers.
        </p>
      </div>

      {items.length === 0 ? (
        <div className="border border-dashed border-gray-300 py-20 text-center text-sm text-gray-400">
          No new arrivals yet.
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
