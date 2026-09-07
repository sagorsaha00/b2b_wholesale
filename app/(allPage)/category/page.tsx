import CategoryCard from "@/components/other/cateGoryCard";
import { Allcategories } from "@/lib/constant/dummyData";

export default function CategoriesSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-black text-[#0F172A] sm:text-[28px]">
            Browse Categories
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Find suppliers across {Allcategories.length} product categories.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3 md:grid-cols-5 lg:grid-cols-10">
        {Allcategories.map((category) => (
          <CategoryCard key={category.slug} category={category} />
        ))}
      </div>
    </section>
  );
}
