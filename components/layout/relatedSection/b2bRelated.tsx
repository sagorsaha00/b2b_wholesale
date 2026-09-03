import React from "react";
import Image from "next/image";
import { products } from "@/lib/constant/dummyProduct";
import { useRouter } from "next/navigation";

export default function B2BRelated() {
  const router = useRouter();
  const routerPush = (id: number) => () => {
    router.push(`/${id}`);
  };
  return (
    <section className="container mx-auto max-w-[1250px] px-4 py-8 sm:px-6 lg:px-8">
      <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
        Related Products
      </h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {products.map((product) => (
          <article
            onClick={routerPush(product.id)}
            key={product.id}
            className="group cursor-pointer flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white p-3 transition-shadow hover:shadow-md  "
          >
            <div className="relative aspect-square w-full overflow-hidden rounded-md bg-gray-100 ">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="mt-3 flex flex-1 flex-col justify-between">
              <h3 className="line-clamp-2 text-sm font-medium text-black/80 dark:text-gray-800 group-hover:text-blue-600 dark:text-gray-200 dark:group-hover:text-blue-400">
                {product.name}
              </h3>
              <p className="mt-2 text-base font-bold text-gray-900 dark:text-white">
                {product.price}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
