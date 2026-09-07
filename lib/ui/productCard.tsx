import Image from "next/image";
import ProductRating from "./ratingCard";
import { MarketplaceSection, Product } from "../constant/data.type";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ProductItem({ product }: { product: Product }) {
  return (
    <div className="group relative flex min-w-0 items-center gap-4 border border-gray-100 bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#2563EB]/20 hover:shadow-md sm:p-5">
      <span className="ease absolute left-0 top-0 z-20 h-0 w-0 border-t-2 border-[#febb13] transition-all duration-200 group-hover:w-full" />
      <span className="ease absolute right-0 top-0 z-20 h-0 w-0 border-r-2 border-[#0055ff] transition-all duration-200 group-hover:h-full" />
      <span className="ease absolute bottom-0 right-0 z-20 h-0 w-0 border-b-2 border-[#febb13] transition-all duration-200 group-hover:w-full" />
      <span className="ease absolute bottom-0 left-0 z-20 h-0 w-0 border-l-2 border-[#0055ff] transition-all duration-200 group-hover:h-full" />

      {product.discount && (
        <span className="absolute right-3 top-3 z-10 rounded-full bg-[#FBBF24] px-2.5 py-1 text-[9px] font-black uppercase tracking-wide text-[#0F172A]">
          {product.discount}% OFF
        </span>
      )}

      <div className="relative flex h-24 w-24 shrink-0 items-center justify-center sm:h-28 sm:w-28">
        <Image
          src={product.image ?? ""}
          alt={product.name ? "" + product.name : "Product Image"}
          width={120}
          height={120}
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="min-w-0 flex-1">
        {/* Product Name */}
        <h3 className="line-clamp-2 text-sm font-bold leading-5 text-[#0F172A] sm:text-base">
          {product.name}
        </h3>

        {product.description && (
          <p className="mt-1 line-clamp-2 text-xs leading-5 text-gray-500 sm:text-sm">
            {product.description}
          </p>
        )}

        <div className="mt-2">
          <ProductRating
            rating={product.rating ?? 0}
            reviews={product.reviews}
          />
        </div>

        <div className="mt-2 flex items-center gap-2">
          {product.oldPrice && (
            <span className="text-xs font-medium text-gray-400 line-through">
              {product.oldPrice}
            </span>
          )}

          <span className="text-base font-bold text-[#2563EB]">
            {product.price}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function ProductCardSection({ product }: { product: Product }) {
  return (
    <div className="group relative flex min-w-0 cursor-pointer flex-col overflow-hidden border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <span className="ease absolute left-0 top-0 z-20 h-0 w-0 border-t-2 border-[#febb13] transition-all duration-200 group-hover:w-full" />
      <span className="ease absolute right-0 top-0 z-20 h-0 w-0 border-r-2 border-[#0055ff] transition-all duration-200 group-hover:h-full" />
      <span className="ease absolute bottom-0 right-0 z-20 h-0 w-0 border-b-2 border-[#febb13] transition-all duration-200 group-hover:w-full" />
      <span className="ease absolute bottom-0 left-0 z-20 h-0 w-0 border-l-2 border-[#0055ff] transition-all duration-200 group-hover:h-full" />
      <div className="relative flex h-[190px] items-center justify-center overflow-hidden bg-white p-5 sm:h-[210px]">
        {product.sale && (
          <span className="absolute right-3 top-3 z-10 rounded-sm bg-[#0055ff] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
            Sale!
          </span>
        )}

        <Image
          src={product.image || ""}
          alt={product.name || ""}
          width={220}
          height={220}
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col border-t border-gray-100 p-4 sm:p-5">
        <h3 className="line-clamp-2 min-h-[42px] text-sm font-semibold leading-5 text-gray-900 transition-colors duration-200 group-hover:text-[#0055ff]">
          {product.name}
        </h3>

        {product.description && (
          <p className="mt-1.5 line-clamp-2 text-xs leading-5 text-gray-500">
            {product.description}
          </p>
        )}

        <div className="mt-2">
          <ProductRating
            rating={product.rating || 0}
            reviews={product.reviews}
          />
        </div>

        <div className="mt-2 flex items-center gap-2">
          {product.oldPrice && (
            <span className="text-sm font-medium text-gray-400 line-through">
              {product.oldPrice}
            </span>
          )}

          <span className="text-base font-bold text-black">
            {product.price}
          </span>
        </div>
      </div>
    </div>
  );
}

export function SpecialProDuctItem({ product }: { product: Product }) {
  return (
    <div className="group relative min-w-0 overflow-hidden border border-[#eeeeee] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <span className="ease absolute left-0 top-0 z-20 h-0 w-0 border-t-2 border-[#febb13] transition-all duration-200 group-hover:w-full" />
      <span className="ease absolute right-0 top-0 z-20 h-0 w-0 border-r-2 border-[#0055ff] transition-all duration-200 group-hover:h-full" />
      <span className="ease absolute bottom-0 right-0 z-20 h-0 w-0 border-b-2 border-[#febb13] transition-all duration-200 group-hover:w-full" />
      <span className="ease absolute bottom-0 left-0 z-20 h-0 w-0 border-l-2 border-[#0055ff] transition-all duration-200 group-hover:h-full" />

      {product.discount && (
        <span className="absolute right-3 top-3 z-10 rounded-sm bg-[#0055ff] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-white">
          SALE!
        </span>
      )}

      <div className="relative flex h-[220px] w-full items-center justify-center border-b border-[#eeeeee] p-6">
        <Image
          src={product.image ?? ""}
          alt={product.name ? "" + product.name : "Product Image"}
          width={220}
          height={220}
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <h3 className="line-clamp-2 min-h-[48px] text-[16px] font-bold leading-6 text-[#222222]">
          {product.name}
        </h3>

        <ProductRating rating={product.rating ?? 0} reviews={product.reviews} />

        <div className="mt-3 flex items-center gap-2">
          {product.oldPrice && (
            <span className="text-[15px] font-medium text-[#b8b8b8] line-through">
              {product.oldPrice}
            </span>
          )}

          <span className="text-[18px] font-bold text-black">
            {product.price}
          </span>
        </div>
      </div>
    </div>
  );
}

export function B2bMarketPlaceCard({
  section,
}: {
  section: MarketplaceSection;
}) {
  const SectionIcon = section.icon;
  const isYellow = section.type === "yellow";

  return (
    <div
      className="
        group relative overflow-hidden
        rounded-[24px]
        border border-slate-200
        bg-white
        p-5
        sm:p-6
        shadow-[0_8px_35px_rgba(7,26,61,0.05)]
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-[0_18px_50px_rgba(7,26,61,0.10)]
      "
    >
      {/* Top Line */}
      <div
        className="
          absolute left-0 top-0
          h-[4px]
          w-[85px]
          rounded-br-full
          transition-all duration-300
          group-hover:w-full
        "
        style={{
          backgroundColor: isYellow ? "#febb13" : "#0055ff",
        }}
      />

      {/* Header */}
      <div className="mb-7 flex items-start gap-4 pt-2">
        <div
          className="
            flex h-[78px] w-[78px]
            shrink-0 items-center justify-center
            rounded-2xl border
          "
          style={{
            backgroundColor: isYellow
              ? "rgba(254,187,19,0.08)"
              : "rgba(0,85,255,0.07)",
            borderColor: isYellow
              ? "rgba(254,187,19,0.25)"
              : "rgba(0,85,255,0.18)",
          }}
        >
          <SectionIcon
            size={38}
            strokeWidth={1.8}
            style={{
              color: isYellow ? "#febb13" : "#0055ff",
            }}
          />
        </div>

        <div className="min-w-0 pt-1">
          <h2
            className="
              text-[25px]
              font-extrabold
              tracking-tight
              text-[#0055ff]
            "
          >
            {section.title}
          </h2>

          <p className="mt-1.5 max-w-[280px] text-[15px] leading-6 text-slate-600">
            {section.description}
          </p>
        </div>
      </div>

      {/* Items */}
      <div className="space-y-3">
        {section.items.map((item) => {
          const ItemIcon = item.icon;

          const isClearance =
            item.title === "Clearance Warehouse" ||
            item.title === "Clearance Stock";

          return (
            <Link
              key={item.title}
              href={item.href}
              className="
                group/item
                relative flex w-full
                items-center gap-4
                rounded-[18px]
                border border-slate-100
                bg-white
                p-4
                text-left
                shadow-[0_4px_18px_rgba(7,26,61,0.045)]
                transition-all duration-300
                hover:-translate-y-0.5
                hover:border-[#0055ff]/20
                hover:shadow-[0_10px_25px_rgba(0,85,255,0.09)]
              "
            >
              <div
                className="
                  flex h-[68px] w-[68px]
                  shrink-0
                  items-center justify-center
                  rounded-2xl
                  transition-transform duration-300
                  group-hover/item:scale-105
                "
                style={{
                  backgroundColor: isClearance
                    ? "rgba(254,187,19,0.10)"
                    : "rgba(0,85,255,0.055)",
                }}
              >
                <ItemIcon
                  size={32}
                  strokeWidth={1.8}
                  style={{
                    color: isClearance ? "#febb13" : "#0055ff",
                  }}
                />
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="text-[17px] font-bold text-[#071A3D] transition-colors group-hover/item:text-[#0055ff]">
                  {item.title}
                </h3>

                <p className="mt-1 text-[14px] leading-5 text-slate-600">
                  {item.description}
                </p>
              </div>

              <div
                className="
                  flex h-9 w-9
                  shrink-0
                  items-center justify-center
                  rounded-full
                  bg-[#0055ff]/[0.06]
                  transition-all duration-300
                  group-hover/item:translate-x-1
                "
              >
                <ArrowRight
                  size={19}
                  strokeWidth={2}
                  className="text-[#0055ff]"
                />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
