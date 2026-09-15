"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, MouseEvent } from "react";
import {
  ArrowRight,
  Check,
  Heart,
  Minus,
  Plus,
  ShieldCheck,
  ShoppingCart,
  Truck,
  MapPin,
  BadgeCheck,
  Package,
  ChevronLeft,
  ChevronRight,
  Loader2,
} from "lucide-react";

import ProductRating from "../../../../lib/ui/ratingCard";
import B2BRelated from "../../../../components/layout/relatedSection/b2bRelated";
import ReviewsSection from "@/components/review/ReviewsSection";
import SupplierDetails from "@/components/product/SupplierDetails";
import { useProductDetails } from "@/lib/hooks/useAuthMutations";
import { useParams } from "next/navigation";
import { Product } from "@/lib/constant/type/product.type";

export default function ProductDetails() {
  const params = useParams();

  const productId = Number(params?.id);

  const {
    data: product,
    isLoading,
    isError,
  } = useProductDetails(productId) as {
    data: Product | undefined;
    isLoading: boolean;
    isError: boolean;
  };

  // ============================================================
  // STATES
  // ============================================================

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const [quantity, setQuantity] = useState(product?.minimumQty || 1);

  const [liked, setLiked] = useState(false);

  const [zoomPos, setZoomPos] = useState({
    x: 50,
    y: 50,
    show: false,
  });

  const [mobileImageIndex, setMobileImageIndex] = useState(0);

  const imgContainerRef = useRef<HTMLDivElement>(null);

  // ============================================================
  // LOADING
  // ============================================================

  if (isLoading) {
    return (
      <div className="flex min-h-[500px] w-full items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="h-8 w-8 animate-spin text-gray-500" />

          <p className="text-sm text-gray-400">Loading product...</p>
        </div>
      </div>
    );
  }

  // ============================================================
  // ERROR
  // ============================================================

  if (isError || !product) {
    return (
      <div className="flex min-h-[500px] w-full items-center justify-center bg-white">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gray-100">
            <Package className="h-6 w-6 text-gray-400" />
          </div>

          <h2 className="text-lg font-bold text-black">Product not found</h2>

          <p className="mt-1 text-sm text-gray-500">
            This product may have been removed or is unavailable.
          </p>
        </div>
      </div>
    );
  }

  // ============================================================
  // SAFE DATA
  // ============================================================

  const images = product.images ?? [];

  const tiers = product.tiers ?? [];

  const seller = product.seller;

  const currentImage =
    images[selectedImageIndex]?.url || images[0]?.url || "/placeholder.png";

  const discount = Number(product.discount || 0);

  const discountedPrice =
    discount > 0
      ? product.price - (product.price * discount) / 100
      : product.price;

  // ============================================================
  // IMAGE ZOOM
  // ============================================================

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!imgContainerRef.current) return;

    const { left, top, width, height } =
      imgContainerRef.current.getBoundingClientRect();

    const x = ((e.clientX - left) / width) * 100;

    const y = ((e.clientY - top) / height) * 100;

    setZoomPos({
      x,
      y,
      show: true,
    });
  };

  const handleMouseLeave = () => {
    setZoomPos((prev) => ({
      ...prev,
      show: false,
    }));
  };

  // ============================================================
  // IMAGE NAVIGATION
  // ============================================================

  const nextImage = () => {
    if (!images.length) return;

    setSelectedImageIndex((current) =>
      current === images.length - 1 ? 0 : current + 1,
    );
  };

  const previousImage = () => {
    if (!images.length) return;

    setSelectedImageIndex((current) =>
      current === 0 ? images.length - 1 : current - 1,
    );
  };

  // ============================================================
  // QUANTITY
  // ============================================================

  const increaseQuantity = () => {
    setQuantity((current) => current + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((current) => Math.max(product.minimumQty || 1, current - 1));
  };

  // ============================================================
  // CURRENT TIER
  // ============================================================

  const activeTier = tiers.find(
    (tier) =>
      quantity >= tier.minQty &&
      (tier.maxQty === null || quantity <= tier.maxQty),
  );

  const currentUnitPrice = activeTier?.unitPrice ?? discountedPrice;

  const totalPrice = currentUnitPrice * quantity;

  // ============================================================
  // SELLER VERIFICATION
  // ============================================================

  const isVerified = seller?.verificationStatus?.toLowerCase() === "verified";

  // ============================================================
  // RENDER
  // ============================================================

  return (
    <>
      <main className="min-h-screen bg-white">
        {/* ======================================================
            MAIN PRODUCT SECTION
        ====================================================== */}

        <section className="border-b border-gray-100 py-5 sm:py-8 lg:py-12">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-7 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)_310px] xl:gap-10">
              {/* ==================================================
                  PRODUCT IMAGE AREA
              ================================================== */}

              <div className="min-w-0">
                <div
                  ref={imgContainerRef}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  className="group relative aspect-square w-full overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 sm:aspect-[4/4.5] lg:aspect-square"
                >
                  {/* Discount Badge */}

                  {discount > 0 && (
                    <div className="absolute left-4 top-4 z-30 rounded-full bg-black px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
                      {discount}% OFF
                    </div>
                  )}

                  {/* Wishlist */}

                  <button
                    type="button"
                    onClick={() => setLiked((current) => !current)}
                    aria-label="Add to wishlist"
                    className="absolute right-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white/95 shadow-sm backdrop-blur transition hover:scale-105 hover:border-black"
                  >
                    <Heart
                      className={`h-5 w-5 transition ${
                        liked ? "fill-red-500 text-red-500" : "text-gray-600"
                      }`}
                    />
                  </button>

                  {/* Previous */}

                  {images.length > 1 && (
                    <button
                      type="button"
                      onClick={previousImage}
                      className="absolute left-3 top-1/2 z-20 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white/90 shadow-sm backdrop-blur transition hover:scale-105 group-hover:flex"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                  )}

                  {/* Main Image */}

                  <Image
                    src={currentImage}
                    alt={product.name}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={`object-contain p-5 sm:p-8 transition-opacity duration-200 ${
                      zoomPos.show ? "opacity-0" : "opacity-100"
                    }`}
                  />

                  {/* Hover Zoom */}

                  {zoomPos.show && (
                    <div
                      className="pointer-events-none absolute inset-0 hidden bg-no-repeat md:block"
                      style={{
                        backgroundImage: `url(${currentImage})`,
                        backgroundPosition: `${zoomPos.x}% ${zoomPos.y}%`,
                        backgroundSize: "250%",
                      }}
                    />
                  )}

                  {/* Next */}

                  {images.length > 1 && (
                    <button
                      type="button"
                      onClick={nextImage}
                      className="absolute right-3 top-1/2 z-20 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white/90 shadow-sm backdrop-blur transition hover:scale-105 group-hover:flex"
                      aria-label="Next image"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  )}

                  {/* Image Counter */}

                  {images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 rounded-full bg-black/75 px-3 py-1 text-[10px] font-medium text-white backdrop-blur">
                      {selectedImageIndex + 1} / {images.length}
                    </div>
                  )}
                </div>

                {/* ==================================================
                    THUMBNAILS
                ================================================== */}

                {images.length > 0 && (
                  <div className="mt-3 flex gap-2 overflow-x-auto pb-1 sm:mt-4 sm:grid sm:grid-cols-5">
                    {images.map((image, index) => (
                      <button
                        key={image.id}
                        type="button"
                        onClick={() => {
                          setSelectedImageIndex(index);
                          setMobileImageIndex(index);
                        }}
                        className={`relative h-16 min-w-16 overflow-hidden rounded-xl border bg-white transition sm:h-20 sm:min-w-0 ${
                          selectedImageIndex === index
                            ? "border-black ring-1 ring-black"
                            : "border-gray-100 hover:border-gray-300"
                        }`}
                      >
                        <Image
                          src={image.url}
                          alt={`${product.name} ${index + 1}`}
                          fill
                          sizes="80px"
                          className="object-contain p-1.5 transition duration-300 hover:scale-105"
                        />
                      </button>
                    ))}
                  </div>
                )}

                {/* Zoom hint */}

                {images.length > 0 && (
                  <p className="mt-2 hidden text-center text-[10px] text-gray-400 md:block">
                    Move your cursor over the image to zoom
                  </p>
                )}
              </div>

              {/* ==================================================
                  PRODUCT INFORMATION
              ================================================== */}

              <div className="min-w-0">
                {/* Tags */}

                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-700">
                    Wholesale
                  </span>

                  <span
                    className={`rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${
                      product.stock > 0
                        ? "border-green-200 bg-green-50 text-green-700"
                        : "border-red-200 bg-red-50 text-red-700"
                    }`}
                  >
                    {product.stock > 0 ? "In Stock" : "Out of Stock"}
                  </span>

                  {isVerified && (
                    <span className="flex items-center gap-1 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-600">
                      <BadgeCheck className="h-3 w-3" />
                      Verified
                    </span>
                  )}
                </div>

                {/* Product Name */}

                <h1 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-black sm:text-3xl lg:text-4xl">
                  {product.name}
                </h1>

                {/* Rating + Category */}

                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <ProductRating
                    rating={seller?.verificationStatus === "verified" ? 5 : 4.8}
                  />

                  <span className="text-xs text-gray-300">|</span>

                  <span className="text-xs text-gray-500">
                    Category{" "}
                    <strong className="font-semibold text-black">
                      {product.category}
                    </strong>
                  </span>
                </div>

                {/* ==================================================
                    PRICE
                ================================================== */}

                <div className="mt-6">
                  <div className="flex flex-wrap items-end gap-2">
                    <span className="text-3xl font-black tracking-tight text-black sm:text-4xl">
                      ${currentUnitPrice.toFixed(2)}
                    </span>

                    <span className="pb-1 text-xs font-medium text-gray-400">
                      / {product.unit}
                    </span>
                  </div>

                  {discount > 0 && !activeTier && (
                    <div className="mt-1 flex items-center gap-2">
                      <span className="text-sm text-gray-400 line-through">
                        ${product.price.toFixed(2)}
                      </span>

                      <span className="text-xs font-bold text-green-600">
                        Save {discount}%
                      </span>
                    </div>
                  )}
                </div>

                {/* Description */}

                {product.description && (
                  <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base">
                    {product.description}
                  </p>
                )}

                {/* ==================================================
                    QUICK FEATURES
                ================================================== */}

                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50/50 p-3.5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white border border-gray-100">
                      <Check className="h-4 w-4 text-black" />
                    </div>

                    <div>
                      <p className="text-xs font-bold text-black">
                        Quality Guaranteed
                      </p>

                      <p className="mt-0.5 text-[11px] text-gray-400">
                        Reliable wholesale quality
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50/50 p-3.5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white border border-gray-100">
                      <ShieldCheck className="h-4 w-4 text-black" />
                    </div>

                    <div>
                      <p className="text-xs font-bold text-black">
                        Trusted Supplier
                      </p>

                      <p className="mt-0.5 text-[11px] text-gray-400">
                        Business verified
                      </p>
                    </div>
                  </div>
                </div>

                {/* ==================================================
                    TIER PRICING
                ================================================== */}

                {tiers.length > 0 && (
                  <div className="mt-6 overflow-hidden rounded-2xl border border-gray-100">
                    <div className="flex items-center justify-between border-b border-gray-100 bg-gray-50 px-4 py-3">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-black">
                          Bulk Pricing
                        </p>

                        <p className="mt-0.5 text-[10px] text-gray-400">
                          Order more, pay less
                        </p>
                      </div>

                      <Package className="h-4 w-4 text-gray-400" />
                    </div>

                    <div className="grid grid-cols-2 border-b border-gray-100 px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-gray-400">
                      <span>Quantity</span>
                      <span className="text-right">Price / {product.unit}</span>
                    </div>

                    {tiers.map((tier) => {
                      const isActive =
                        quantity >= tier.minQty &&
                        (tier.maxQty === null || quantity <= tier.maxQty);

                      return (
                        <div
                          key={tier.id}
                          className={`cursor-pointer group relative grid grid-cols-2 items-center overflow-hidden border-b px-4 py-3.5 text-xs transition-all duration-200 last:border-none sm:text-sm ${
                            isActive
                              ? "border-blue-400 bg-blue-600 text-white shadow-sm"
                              : "border-gray-50 bg-white text-gray-700 hover:bg-blue-700"
                          }`}
                        >
                          {/* Active tier indicator */}
                          {isActive && (
                            <div className="absolute left-0 top-0 h-full w-1 bg-blue-600]" />
                          )}

                          <div className="flex items-center gap-2">
                            {isActive && (
                              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600 text-[#0055ff]">
                                <Check className="h-3 w-3 stroke-[3]" />
                              </span>
                            )}

                            <span
                              className={`font-semibold ${
                                isActive ? "text-white" : "text-gray-700"
                              }`}
                            >
                              {tier.minQty}
                              {tier.maxQty ? ` - ${tier.maxQty}` : "+"}{" "}
                              {product.unit}
                            </span>
                          </div>

                          <div className="flex justify-end">
                            <span
                              className={`inline-flex items-center rounded-lg px-2.5 py-1.5 font-bold transition ${
                                isActive
                                  ? "bg-[#febb13] text-black shadow-sm"
                                  : "bg-blue-50 text-[#0055ff] group-hover:bg-[#0055ff] group-hover:text-white"
                              }`}
                            >
                              ${tier.unitPrice.toFixed(2)}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                <div className="mt-6 rounded-2xl border border-gray-100 bg-gray-50/50 p-4">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
                    <div>
                      <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-gray-400">
                        Quantity
                      </p>

                      <div className="flex h-12 w-full items-center justify-between rounded-xl border border-gray-200 bg-white sm:w-36">
                        <button
                          type="button"
                          onClick={decreaseQuantity}
                          className="flex h-full w-11 items-center justify-center text-gray-500 transition hover:text-black"
                        >
                          <Minus className="h-4 w-4" />
                        </button>

                        <span className="text-sm font-bold text-black">
                          {quantity}
                        </span>

                        <button
                          type="button"
                          onClick={increaseQuantity}
                          className="flex h-full w-11 items-center justify-center text-gray-500 transition hover:text-black"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </div>

                    <button
                      type="button"
                      disabled={product.stock <= 0}
                      className="flex cursor-pointer h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 text-sm font-bold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-300"
                    >
                      <ShoppingCart className="h-4 w-4" />

                      {product.stock > 0 ? "Add To Cart" : "Out of Stock"}
                    </button>
                  </div>

                  {/* Total */}

                  <div className="mt-4 flex items-center justify-between border-t border-gray-200 pt-3">
                    <span className="text-xs text-gray-500">
                      Estimated total
                    </span>

                    <span className="text-sm font-bold text-black">
                      ${totalPrice.toFixed(2)}
                    </span>
                  </div>

                  {/* MOQ */}

                  <p className="mt-2 text-[10px] text-gray-400">
                    Minimum order quantity:{" "}
                    <span className="font-semibold text-gray-600">
                      {product.minimumQty} {product.unit}
                    </span>
                  </p>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-x-5 gap-y-3 border-t border-gray-100 pt-5 text-xs">
                  <div>
                    <p className="text-gray-400">SKU</p>

                    <p className="mt-1 font-semibold text-black">
                      {product.sku || `MK-${product.id}`}
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-400">Stock</p>

                    <p className="mt-1 font-semibold text-black">
                      {product.stock.toLocaleString()} {product.unit}
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-400">Category</p>

                    <p className="mt-1 truncate font-semibold text-black">
                      {product.category}
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-400">Supplier Country</p>

                    <p className="mt-1 font-semibold text-black">
                      {product.supplierCountry || "Not specified"}
                    </p>
                  </div>
                </div>
              </div>

              <aside className="min-w-0 space-y-4">
                {/* Need Help */}

                <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gray-50">
                      <Truck className="h-5 w-5 text-black" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                        Need Help?
                      </p>

                      <p className="mt-1 truncate text-sm font-bold text-black">
                        {seller?.number || "Contact supplier"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* ==================================================
                    PREMIUM SELLER CARD
                ================================================== */}

                {seller && (
                  <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
                    {/* Cover */}

                    <div className="relative h-24 w-full overflow-hidden bg-gray-100">
                      {seller.coverPhoto ? (
                        <Image
                          src={seller.coverPhoto}
                          alt={`${seller.name} cover`}
                          fill
                          sizes="310px"
                          className="object-cover transition duration-500 hover:scale-105"
                        />
                      ) : (
                        <div className="h-full w-full bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200" />
                      )}

                      <div className="absolute inset-0 bg-black/10" />
                    </div>

                    {/* Seller Body */}

                    <div className="relative px-5 pb-5">
                      {/* Logo */}

                      <div className="-mt-8">
                        {seller.logo ? (
                          <div className="relative h-16 w-16 overflow-hidden rounded-2xl border-4 border-white bg-white shadow-md">
                            <Image
                              src={seller.logo}
                              alt={seller.name}
                              fill
                              sizes="64px"
                              className="object-cover"
                            />
                          </div>
                        ) : (
                          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border-4 border-white bg-black text-xl font-bold text-white shadow-md">
                            {seller.name?.charAt(0).toUpperCase()}
                          </div>
                        )}
                      </div>

                      {/* Seller Name */}

                      <div className="mt-3">
                        <div className="flex items-center gap-1.5">
                          <h3 className="truncate text-base font-bold text-black">
                            {seller.name}
                          </h3>

                          {isVerified && (
                            <BadgeCheck className="h-4 w-4 shrink-0 text-blue-500" />
                          )}
                        </div>

                        <p className="mt-1 text-[11px] text-gray-500">
                          B2B Wholesale Supplier
                        </p>
                      </div>

                      {/* Seller Status */}

                      <div className="mt-4 flex items-center gap-2">
                        <span
                          className={`h-2 w-2 rounded-full ${
                            isVerified ? "bg-green-500" : "bg-yellow-500"
                          }`}
                        />

                        <span className="text-[11px] font-medium text-gray-600">
                          {isVerified
                            ? "Verified Business"
                            : "Verification Pending"}
                        </span>
                      </div>

                      {/* Seller Details */}

                      <div className="mt-4 space-y-3 border-t border-gray-100 pt-4">
                        {/* Location */}

                        <div className="flex gap-3">
                          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" />

                          <div className="min-w-0">
                            <p className="text-[10px] uppercase tracking-wider text-gray-400">
                              Business Location
                            </p>

                            <p className="mt-0.5 break-words text-xs font-semibold text-gray-700">
                              {seller.businessLocation ||
                                "Location not specified"}
                            </p>
                          </div>
                        </div>

                        {/* Phone */}

                        {seller.number && (
                          <div className="flex gap-3">
                            <Truck className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" />

                            <div>
                              <p className="text-[10px] uppercase tracking-wider text-gray-400">
                                Contact
                              </p>

                              <p className="mt-0.5 text-xs font-semibold text-gray-700">
                                {seller.number}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Storefront */}

                      <Link
                        href={`/storeFront/${seller.id}`}
                        className="mt-5 cursor-pointer  flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 text-xs font-bold text-white transition hover:bg-blue-800"
                      >
                        View Storefront
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                      </Link>

                      {/* Seller Trust */}

                      <div className="mt-3 flex items-center justify-center gap-2 text-[10px] text-gray-400">
                        <ShieldCheck className="h-3.5 w-3.5" />
                        Secure B2B supplier information
                      </div>
                    </div>
                  </div>
                )}

                {/* Seller Quick Benefits */}

                <div className="rounded-2xl border border-gray-100 bg-gray-50/50 p-4">
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white border border-gray-100">
                        <Package className="h-4 w-4 text-gray-600" />
                      </div>

                      <div>
                        <p className="text-xs font-bold text-black">
                          Bulk Orders
                        </p>

                        <p className="mt-0.5 text-[10px] leading-4 text-gray-400">
                          Designed for wholesale purchasing
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white border border-gray-100">
                        <ShieldCheck className="h-4 w-4 text-gray-600" />
                      </div>

                      <div>
                        <p className="text-xs font-bold text-black">
                          Buyer Protection
                        </p>

                        <p className="mt-0.5 text-[10px] leading-4 text-gray-400">
                          Safe and transparent transactions
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <B2BRelated />

        <ReviewsSection />

        <SupplierDetails />
      </main>
    </>
  );
}
