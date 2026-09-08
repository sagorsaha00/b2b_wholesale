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
        <span className="absolute right-3 top-3 z-10 rounded-full bg-red-600 px-2.5 py-1 text-[9px] font-black uppercase tracking-wide text-[#0F172A]">
          {product.discount}% OFF
        </span>
      )}

      <div className="relative flex h-28 w-24 shrink-0 items-center justify-center sm:h-28 sm:w-28">
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
          <span className="absolute right-3 top-3 z-10 rounded-sm bg-red-600 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
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

        <p className="mt-1.5 line-clamp-2 text-xs leading-5 text-gray-500">
          {product.description}
        </p>

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
        <p className="mt-1.5 line-clamp-2 text-xs leading-5 text-gray-500">
          {product.description}
        </p>
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

  // Theme configuration based on pillar type
  const theme = (() => {
    switch (section.type) {
      case "amber":
      case "yellow":
        return {
          topBar: "from-amber-500 via-orange-500 to-amber-600",
          iconBg: "bg-amber-50 border-amber-200/80 text-amber-600",
          badge: "bg-amber-50 text-amber-800 border-amber-200/80",
          itemHoverBorder: "hover:border-amber-300",
          itemIconHover:
            "group-hover/item:bg-amber-50 group-hover/item:text-amber-600 group-hover/item:border-amber-200",
          itemTitleHover: "group-hover/item:text-amber-700",
          arrowHover:
            "group-hover/item:bg-amber-600 group-hover/item:text-white",
        };
      case "purple":
        return {
          topBar: "from-purple-600 via-indigo-600 to-violet-600",
          iconBg: "bg-purple-50 border-purple-200/80 text-purple-600",
          badge: "bg-purple-50 text-purple-800 border-purple-200/80",
          itemHoverBorder: "hover:border-purple-300",
          itemIconHover:
            "group-hover/item:bg-purple-50 group-hover/item:text-purple-600 group-hover/item:border-purple-200",
          itemTitleHover: "group-hover/item:text-purple-700",
          arrowHover:
            "group-hover/item:bg-purple-600 group-hover/item:text-white",
        };
      case "blue":
      default:
        return {
          topBar: "from-blue-600 via-indigo-600 to-blue-500",
          iconBg: "bg-blue-50 border-blue-200/80 text-blue-600",
          badge: "bg-blue-50 text-blue-700 border-blue-200/80",
          itemHoverBorder: "hover:border-blue-300",
          itemIconHover:
            "group-hover/item:bg-blue-50 group-hover/item:text-blue-600 group-hover/item:border-blue-200",
          itemTitleHover: "group-hover/item:text-blue-600",
          arrowHover:
            "group-hover/item:bg-blue-600 group-hover/item:text-white",
        };
    }
  })();

  return (
    <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-[0_4px_25px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-slate-300 hover:shadow-[0_20px_45px_rgba(15,23,42,0.09)]">
      {/* Top Accent Gradient Bar */}
      <div
        className={`absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r ${theme.topBar} transition-all duration-300 group-hover:h-2`}
      />

      {/* Card Header */}
      <div>
        <div className="flex items-center justify-between gap-3 pt-1">
          <div
            className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border shadow-xs transition-transform duration-300 group-hover:scale-105 ${theme.iconBg}`}
          >
            <SectionIcon size={28} strokeWidth={2} />
          </div>

          {section.subtitle && (
            <span
              className={`rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${theme.badge}`}
            >
              {section.subtitle}
            </span>
          )}
        </div>

        <div className="mt-5">
          <h2 className="text-2xl font-black tracking-tight text-slate-900 sm:text-[26px]">
            {section.title}
          </h2>
          <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
            {section.description}
          </p>
        </div>
      </div>

      {/* Action Items List */}
      <div className="mt-6 flex-1 space-y-3">
        {section.items.map((item) => {
          const ItemIcon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              className={`group/item flex items-center gap-3.5 rounded-2xl border border-slate-100 bg-slate-50/70 p-3.5 text-left transition-all duration-200 hover:bg-white hover:shadow-md ${theme.itemHoverBorder}`}
            >
              <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200/80 bg-white text-slate-600 shadow-xs transition-all duration-200 ${theme.itemIconHover}`}
              >
                <ItemIcon size={22} strokeWidth={1.9} />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <h3
                    className={`truncate text-sm font-bold text-slate-900 transition-colors ${theme.itemTitleHover}`}
                  >
                    {item.title}
                  </h3>
                  {item.badge && (
                    <span className="rounded-md bg-slate-200/70 px-1.5 py-0.5 text-[10px] font-bold text-slate-700">
                      {item.badge}
                    </span>
                  )}
                </div>

                <p className="mt-0.5 line-clamp-1 text-xs text-slate-500">
                  {item.description}
                </p>
              </div>

              <div
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-slate-400 shadow-xs border border-slate-200/60 transition-all duration-200 group-hover/item:translate-x-0.5 ${theme.arrowHover}`}
              >
                <ArrowRight size={15} strokeWidth={2.2} />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
