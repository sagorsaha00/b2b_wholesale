"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  PlusCircle,
  Package,
  DollarSign,
  Layers,
  Truck,
  CheckCircle2,
  Info,
  X,
  Upload,
  ShieldCheck,
} from "lucide-react";
import {
  SellerProduct,
  productCategories,
  defaultProductImages,
  PricingTier,
} from "@/lib/constant/sellerData";

interface SellerAddProductFormProps {
  onProductCreated: (product: SellerProduct) => void;
  onCancel: () => void;
}

export default function SellerAddProductForm({
  onProductCreated,
  onCancel,
}: SellerAddProductFormProps) {
  // Form State
  const [name, setName] = useState("");
  const [category, setCategory] = useState(productCategories[0]);
  const [sku, setSku] = useState(`PRD-${Math.floor(1000 + Math.random() * 9000)}`);
  const [unit, setUnit] = useState("Carton");
  const [price, setPrice] = useState<number | "">("");
  const [moq, setMoq] = useState<number | "">(20);
  const [stock, setStock] = useState<number | "">(100);
  const [leadTime, setLeadTime] = useState("3-5 business days");
  const [selectedImage, setSelectedImage] = useState(defaultProductImages[0].path);
  const [customImageUrl, setCustomImageUrl] = useState("");
  const [description, setDescription] = useState("");

  // Certifications
  const availableCerts = ["ISO 9001", "ISO 22000", "Halal", "HACCP", "EU Organic", "GMP", "FDA Registered"];
  const [selectedCerts, setSelectedCerts] = useState<string[]>(["ISO 9001", "Halal"]);

  // Pricing Tiers
  const [tiers, setTiers] = useState<PricingTier[]>([
    { minQty: 50, maxQty: 199, pricePerUnit: 0 },
    { minQty: 200, pricePerUnit: 0 },
  ]);

  // Error handling
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const toggleCert = (cert: string) => {
    if (selectedCerts.includes(cert)) {
      setSelectedCerts(selectedCerts.filter((c) => c !== cert));
    } else {
      setSelectedCerts([...selectedCerts, cert]);
    }
  };

  const handleAddTier = () => {
    setTiers([...tiers, { minQty: 500, pricePerUnit: 0 }]);
  };

  const handleRemoveTier = (index: number) => {
    setTiers(tiers.filter((_, i) => i !== index));
  };

  const handleUpdateTier = (index: number, field: keyof PricingTier, value: number) => {
    const updated = [...tiers];
    updated[index] = {
      ...updated[index],
      [field]: value,
    };
    setTiers(updated);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name.trim()) {
      setError("Please provide a product title.");
      return;
    }
    if (!price || Number(price) <= 0) {
      setError("Please specify a valid wholesale base price.");
      return;
    }
    if (!moq || Number(moq) <= 0) {
      setError("Please set a Minimum Order Quantity (MOQ).");
      return;
    }

    const finalImage = customImageUrl.trim() ? customImageUrl.trim() : selectedImage;
    const numPrice = Number(price);
    const numStock = Number(stock) || 0;

    const newProduct: SellerProduct = {
      id: `PRD-${Date.now().toString().slice(-4)}`,
      name: name.trim(),
      sku: sku.trim() || `SKU-${Date.now().toString().slice(-6)}`,
      category,
      price: numPrice,
      unit: unit,
      moq: Number(moq),
      stock: numStock,
      stockStatus: numStock > 20 ? "In Stock" : numStock > 0 ? "Low Stock" : "Out of Stock",
      image: finalImage,
      description: description.trim() || "Wholesale commercial grade product. Verified manufacturer specifications.",
      leadTime,
      certifications: selectedCerts,
      pricingTiers: tiers.filter((t) => t.pricePerUnit > 0),
      createdAt: new Date().toISOString().split("T")[0],
    };

    setIsSuccess(true);
    setTimeout(() => {
      onProductCreated(newProduct);
    }, 900);
  };

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-slate-900">Post Business Product</h1>
          <p className="text-sm text-slate-500">
            Publish a new wholesale item to your Markood B2B merchant storefront.
          </p>
        </div>
        <button
          type="button"
          onClick={onCancel}
          className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-50 transition"
        >
          Cancel
        </button>
      </div>

      {isSuccess && (
        <div className="flex items-center gap-3 rounded-2xl bg-emerald-600 p-4 text-white shadow-lg shadow-emerald-500/20 animate-in fade-in zoom-in duration-300">
          <CheckCircle2 className="h-6 w-6 shrink-0 text-emerald-200" />
          <div>
            <h4 className="font-bold text-sm">Product Published Successfully!</h4>
            <p className="text-xs text-emerald-100">
              Your wholesale listing is now live and indexed on the marketplace.
            </p>
          </div>
        </div>
      )}

      {error && (
        <div className="flex items-center gap-2 rounded-xl bg-rose-50 p-3.5 text-xs font-semibold text-rose-700 border border-rose-200">
          <Info className="h-4 w-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Section 1: Basic Information */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-5">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <Package className="h-5 w-5 text-blue-600" />
            <h2 className="text-base font-bold text-slate-900">Product Identity</h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Product Title / Commercial Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Export Grade Premium Pure Sesame Oil 5L"
                className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Wholesale Category *
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-2.5 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white"
              >
                {productCategories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Internal SKU / Reference Code
              </label>
              <input
                type="text"
                value={sku}
                onChange={(e) => setSku(e.target.value)}
                placeholder="e.g. OIL-SES-5L"
                className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-2.5 text-sm font-mono text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white"
              />
            </div>
          </div>
        </div>

        {/* Section 2: B2B Pricing, MOQ & Packaging */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-5">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <DollarSign className="h-5 w-5 text-emerald-600" />
            <h2 className="text-base font-bold text-slate-900">Wholesale Pricing & MOQ</h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Base Price ($ USD) *
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-400">
                  $
                </span>
                <input
                  type="number"
                  step="0.01"
                  required
                  value={price}
                  onChange={(e) => setPrice(e.target.value === "" ? "" : Number(e.target.value))}
                  placeholder="0.00"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/60 py-2.5 pl-8 pr-4 text-sm font-bold text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Unit of Measurement *
              </label>
              <select
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-2.5 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white"
              >
                <option value="Carton">Carton</option>
                <option value="Box (Pack of 12)">Box (Pack of 12)</option>
                <option value="5kg Bag">5kg Bag</option>
                <option value="10kg Bag">10kg Bag</option>
                <option value="25kg Sack">25kg Sack</option>
                <option value="50kg Sack">50kg Sack</option>
                <option value="5L Canister">5L Canister</option>
                <option value="Metric Ton">Metric Ton</option>
                <option value="Pallet">Pallet</option>
                <option value="Piece">Piece</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Min. Order Quantity (MOQ) *
              </label>
              <input
                type="number"
                min="1"
                required
                value={moq}
                onChange={(e) => setMoq(e.target.value === "" ? "" : Number(e.target.value))}
                placeholder="20"
                className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-2.5 text-sm font-bold text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white"
              />
            </div>
          </div>

          {/* Volume Tier Pricing */}
          <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Layers className="h-4 w-4 text-blue-600" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                  Bulk Tier Pricing (Optional)
                </h4>
              </div>
              <button
                type="button"
                onClick={handleAddTier}
                className="text-xs font-bold text-blue-600 hover:underline"
              >
                + Add Pricing Tier
              </button>
            </div>

            <div className="space-y-2">
              {tiers.map((tier, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="text-xs font-medium text-slate-500 w-16">
                    Tier {idx + 1}:
                  </span>
                  <div className="flex items-center gap-2 flex-1">
                    <input
                      type="number"
                      placeholder="Min Qty"
                      value={tier.minQty}
                      onChange={(e) =>
                        handleUpdateTier(idx, "minQty", Number(e.target.value))
                      }
                      className="w-24 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-800"
                    />
                    <span className="text-xs text-slate-400">units → $</span>
                    <input
                      type="number"
                      placeholder="Price/unit"
                      value={tier.pricePerUnit || ""}
                      onChange={(e) =>
                        handleUpdateTier(idx, "pricePerUnit", Number(e.target.value))
                      }
                      className="w-24 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-bold text-slate-800"
                    />
                    <span className="text-xs text-slate-400">per {unit}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRemoveTier(idx)}
                    className="p-1 text-slate-400 hover:text-rose-500"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 3: Stock & Logistics */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-5">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <Truck className="h-5 w-5 text-indigo-600" />
            <h2 className="text-base font-bold text-slate-900">Inventory & Fulfillment</h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Available Warehouse Stock (Units)
              </label>
              <input
                type="number"
                min="0"
                value={stock}
                onChange={(e) => setStock(e.target.value === "" ? "" : Number(e.target.value))}
                placeholder="100"
                className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-2.5 text-sm font-bold text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Lead Time to Dispatch
              </label>
              <input
                type="text"
                value={leadTime}
                onChange={(e) => setLeadTime(e.target.value)}
                placeholder="e.g. 2-4 business days"
                className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-2.5 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white"
              />
            </div>
          </div>

          {/* Certifications selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Enterprise Compliance & Quality Certifications
            </label>
            <div className="flex flex-wrap gap-2">
              {availableCerts.map((cert) => {
                const active = selectedCerts.includes(cert);
                return (
                  <button
                    key={cert}
                    type="button"
                    onClick={() => toggleCert(cert)}
                    className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                      active
                        ? "bg-blue-600 text-white shadow-xs"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    <ShieldCheck className="h-3.5 w-3.5" />
                    {cert}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Section 4: Image Selector */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <Upload className="h-5 w-5 text-blue-600" />
            <h2 className="text-base font-bold text-slate-900">Product Media</h2>
          </div>

          <p className="text-xs text-slate-500">
            Select an image from the library below or specify a custom URL:
          </p>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
            {defaultProductImages.map((img) => {
              const isSelected = selectedImage === img.path && !customImageUrl;
              return (
                <button
                  key={img.path}
                  type="button"
                  onClick={() => {
                    setSelectedImage(img.path);
                    setCustomImageUrl("");
                  }}
                  className={`group relative aspect-square overflow-hidden rounded-xl border-2 p-1 transition ${
                    isSelected
                      ? "border-blue-600 ring-2 ring-blue-100"
                      : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <div className="relative h-full w-full overflow-hidden rounded-lg">
                    <Image
                      src={img.path}
                      alt={img.label}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {isSelected && (
                    <div className="absolute right-1.5 top-1.5 rounded-full bg-blue-600 p-0.5 text-white">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          <div className="mt-2">
            <label className="block text-xs font-semibold text-slate-600 mb-1">
              Or Custom Image URL
            </label>
            <input
              type="url"
              value={customImageUrl}
              onChange={(e) => setCustomImageUrl(e.target.value)}
              placeholder="https://example.com/product-image.jpg"
              className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-2 text-xs text-slate-800 placeholder-slate-400 outline-none transition focus:border-blue-500 focus:bg-white"
            />
          </div>
        </div>

        {/* Section 5: Description */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-4">
          <h2 className="text-base font-bold text-slate-900">Commercial Specifications</h2>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Product Description & Specifications
            </label>
            <textarea
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Detailed purity, origin, harvest season, processing method, and usage details..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50/60 p-4 text-sm text-slate-800 placeholder-slate-400 outline-none transition focus:border-blue-500 focus:bg-white"
            />
          </div>
        </div>

        {/* Submit Actions */}
        <div className="flex items-center justify-end gap-3 pt-2">
          <button
            type="button"
            onClick={onCancel}
            className="rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-500 active:scale-95"
          >
            <PlusCircle className="h-4 w-4" />
            Publish Product Listing
          </button>
        </div>
      </form>
    </div>
  );
}

