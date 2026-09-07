"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import {
  Search,
  Filter,
  PlusCircle,
  Package,
  Trash2,
  Edit,
  Layers,
  ChevronDown,
  CheckCircle2,
  AlertCircle,
  XCircle,
  Eye,
  SlidersHorizontal,
} from "lucide-react";
import { SellerProduct } from "@/lib/constant/sellerData";

interface SellerProductListProps {
  products: SellerProduct[];
  onAddProduct: () => void;
  onDeleteProduct: (id: string | number) => void;
  onUpdateStock: (id: string | number, newStock: number) => void;
}

export default function SellerProductList({
  products,
  onAddProduct,
  onDeleteProduct,
  onUpdateStock,
}: SellerProductListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStockStatus, setSelectedStockStatus] = useState("All");
  const [editingStockId, setEditingStockId] = useState<string | number | null>(null);
  const [stockInput, setStockInput] = useState<number>(0);

  // Available unique categories
  const categories = useMemo(() => {
    const set = new Set(products.map((p) => p.category));
    return ["All", ...Array.from(set)];
  }, [products]);

  // Filtered products
  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.sku.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCat =
        selectedCategory === "All" || item.category === selectedCategory;
      const matchesStock =
        selectedStockStatus === "All" || item.stockStatus === selectedStockStatus;

      return matchesSearch && matchesCat && matchesStock;
    });
  }, [products, searchTerm, selectedCategory, selectedStockStatus]);

  const handleStartStockEdit = (prod: SellerProduct) => {
    setEditingStockId(prod.id);
    setStockInput(prod.stock);
  };

  const handleSaveStock = (id: string | number) => {
    onUpdateStock(id, stockInput);
    setEditingStockId(null);
  };

  return (
    <div className="space-y-6">
      {/* Header bar */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-black text-slate-900">My Wholesale Products</h1>
          <p className="text-sm text-slate-500">
            Manage your B2B catalog, update stock quantities, and configure bulk pricing tiers.
          </p>
        </div>

        <button
          type="button"
          onClick={onAddProduct}
          className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-md shadow-blue-500/25 transition hover:bg-blue-500 active:scale-95"
        >
          <PlusCircle className="h-4 w-4" />
          Add Business Product
        </button>
      </div>

      {/* Filter & Search Bar */}
      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xs">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          {/* Search box */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by product name, SKU, or keyword..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2.5 pl-10 pr-4 text-sm text-slate-800 placeholder-slate-400 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-700">
              <SlidersHorizontal className="h-3.5 w-3.5 text-slate-400" />
              <span className="font-semibold">Category:</span>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-transparent font-medium text-slate-900 outline-none cursor-pointer"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Stock Status Filter */}
            <div className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-700">
              <span className="font-semibold">Stock:</span>
              <select
                value={selectedStockStatus}
                onChange={(e) => setSelectedStockStatus(e.target.value)}
                className="bg-transparent font-medium text-slate-900 outline-none cursor-pointer"
              >
                <option value="All">All Statuses</option>
                <option value="In Stock">In Stock</option>
                <option value="Low Stock">Low Stock</option>
                <option value="Out of Stock">Out of Stock</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Products Table */}
      <div className="rounded-2xl border border-slate-200 bg-white shadow-xs overflow-hidden">
        {filteredProducts.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-12 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
              <Package className="h-7 w-7" />
            </div>
            <h3 className="mt-4 text-base font-bold text-slate-900">No products found</h3>
            <p className="mt-1 text-xs text-slate-500 max-w-sm">
              Try adjusting your search query or filters, or post a new product to your wholesale catalog.
            </p>
            <button
              type="button"
              onClick={onAddProduct}
              className="mt-4 flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-xs font-bold text-white transition hover:bg-blue-500"
            >
              <PlusCircle className="h-4 w-4" />
              Post Product
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-slate-200 bg-slate-50/70 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                <tr>
                  <th className="py-3.5 pl-6">Product Details</th>
                  <th className="py-3.5">Category & SKU</th>
                  <th className="py-3.5">Base Price</th>
                  <th className="py-3.5">Min. Order (MOQ)</th>
                  <th className="py-3.5">Inventory</th>
                  <th className="py-3.5">Volume Pricing</th>
                  <th className="py-3.5 pr-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredProducts.map((product) => {
                  const isEditingStock = editingStockId === product.id;
                  return (
                    <tr key={product.id} className="transition hover:bg-slate-50/80">
                      {/* Product details & thumbnail */}
                      <td className="py-4 pl-6">
                        <div className="flex items-center gap-3.5">
                          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                            <Image
                              src={product.image || "/product/product1.png"}
                              alt={product.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="min-w-0 max-w-xs">
                            <p className="truncate font-bold text-slate-900 hover:text-blue-600 transition">
                              {product.name}
                            </p>
                            <div className="mt-1 flex flex-wrap items-center gap-1.5">
                              {product.certifications?.slice(0, 2).map((cert) => (
                                <span
                                  key={cert}
                                  className="rounded-md bg-emerald-50 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-700 border border-emerald-200/50"
                                >
                                  {cert}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </td>

                      {/* Category & SKU */}
                      <td className="py-4">
                        <span className="inline-block rounded-md bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-700">
                          {product.category}
                        </span>
                        <p className="mt-1 text-xs font-mono text-slate-400">{product.sku}</p>
                      </td>

                      {/* Price & Unit */}
                      <td className="py-4">
                        <span className="text-base font-extrabold text-slate-900">
                          ${product.price}
                        </span>
                        <span className="block text-xs text-slate-500">per {product.unit}</span>
                      </td>

                      {/* MOQ */}
                      <td className="py-4">
                        <span className="rounded-lg bg-blue-50 px-2.5 py-1 text-xs font-bold text-blue-700">
                          {product.moq} {product.unit.split(" ")[0]}
                        </span>
                        <span className="block mt-1 text-[11px] text-slate-400">
                          Lead: {product.leadTime}
                        </span>
                      </td>

                      {/* Inventory / Stock */}
                      <td className="py-4">
                        {isEditingStock ? (
                          <div className="flex items-center gap-1.5">
                            <input
                              type="number"
                              min="0"
                              value={stockInput}
                              onChange={(e) => setStockInput(Number(e.target.value))}
                              className="w-20 rounded-lg border border-blue-500 px-2 py-1 text-xs font-bold text-slate-900 outline-none"
                            />
                            <button
                              type="button"
                              onClick={() => handleSaveStock(product.id)}
                              className="rounded-lg bg-blue-600 px-2.5 py-1 text-xs font-bold text-white hover:bg-blue-500"
                            >
                              Save
                            </button>
                          </div>
                        ) : (
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-slate-800">{product.stock} units</span>
                              <button
                                type="button"
                                onClick={() => handleStartStockEdit(product)}
                                title="Edit Stock"
                                className="text-slate-400 hover:text-blue-600"
                              >
                                <Edit className="h-3.5 w-3.5" />
                              </button>
                            </div>
                            <span
                              className={`mt-1 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-bold ${
                                product.stockStatus === "In Stock"
                                  ? "bg-emerald-100 text-emerald-800"
                                  : product.stockStatus === "Low Stock"
                                  ? "bg-amber-100 text-amber-800"
                                  : "bg-rose-100 text-rose-800"
                              }`}
                            >
                              {product.stockStatus === "In Stock" && (
                                <CheckCircle2 className="h-3 w-3" />
                              )}
                              {product.stockStatus === "Low Stock" && (
                                <AlertCircle className="h-3 w-3" />
                              )}
                              {product.stockStatus === "Out of Stock" && (
                                <XCircle className="h-3 w-3" />
                              )}
                              {product.stockStatus}
                            </span>
                          </div>
                        )}
                      </td>

                      {/* Volume Pricing */}
                      <td className="py-4">
                        {product.pricingTiers && product.pricingTiers.length > 0 ? (
                          <div className="space-y-1 text-xs">
                            {product.pricingTiers.slice(0, 2).map((tier, idx) => (
                              <div key={idx} className="text-slate-600">
                                <span className="font-medium text-slate-900">
                                  {tier.minQty}{tier.maxQty ? `-${tier.maxQty}` : "+"} units:
                                </span>{" "}
                                <span className="font-bold text-emerald-600">
                                  ${tier.pricePerUnit}
                                </span>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <span className="text-xs text-slate-400">Flat Rate</span>
                        )}
                      </td>

                      {/* Actions */}
                      <td className="py-4 pr-6 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            type="button"
                            onClick={() => handleStartStockEdit(product)}
                            title="Quick Stock Edit"
                            className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-blue-600 transition"
                          >
                            <Edit className="h-4 w-4" />
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              if (confirm(`Delete "${product.name}" from your catalog?`)) {
                                onDeleteProduct(product.id);
                              }
                            }}
                            title="Delete Product"
                            className="rounded-lg p-2 text-slate-500 hover:bg-rose-50 hover:text-rose-600 transition"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

