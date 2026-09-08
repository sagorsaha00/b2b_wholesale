"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle2, Menu, Plus } from "lucide-react";
import {
  initialSellerProducts,
  initialSellerOrders,
  initialSellerStats,
  SellerProduct,
  SellerOrder,
} from "@/lib/constant/sellerData";
import SellerSidebar from "@/components/seller/SellerSidebar";
import SellerStatsOverview from "@/components/seller/SellerStatsOverview";
import SellerProductList from "@/components/seller/SellerProductList";
import SellerAddProductForm from "@/components/seller/SellerAddProductForm";
import SellerOrdersList from "@/components/seller/SellerOrdersList";
import SellerSettings from "@/components/seller/SellerSettings";
import SellerInvoiceModal from "@/components/seller/SellerInvoiceModal";
import { SellerTab } from "@/lib/constant/data.type";

export default function SellerAdminPage() {
  const [activeTab, setActiveTab] = useState<SellerTab>("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [products, setProducts] = useState<SellerProduct[]>(
    initialSellerProducts,
  );
  const [orders, setOrders] = useState<SellerOrder[]>(initialSellerOrders);
  const [selectedInvoiceOrder, setSelectedInvoiceOrder] =
    useState<SellerOrder | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  // Handler to add a newly created product
  const handleProductCreated = (newProduct: SellerProduct) => {
    setProducts((prev) => [newProduct, ...prev]);
    showToast(`"${newProduct.name}" posted successfully to your catalog!`);
    setActiveTab("products");
  };

  // Handler to delete product
  const handleDeleteProduct = (id: string | number) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
    showToast("Product listing removed.");
  };

  // Handler to update stock
  const handleUpdateStock = (id: string | number, newStock: number) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id
          ? {
              ...p,
              stock: newStock,
              stockStatus:
                newStock > 20
                  ? "In Stock"
                  : newStock > 0
                    ? "Low Stock"
                    : "Out of Stock",
            }
          : p,
      ),
    );
    showToast("Product inventory updated.");
  };

  // Handler to update order fulfillment status
  const handleUpdateOrderStatus = (
    orderId: string,
    newStatus: SellerOrder["fulfillmentStatus"],
  ) => {
    setOrders((prev) =>
      prev.map((o) =>
        o.id === orderId ? { ...o, fulfillmentStatus: newStatus } : o,
      ),
    );

    if (selectedInvoiceOrder && selectedInvoiceOrder.id === orderId) {
      setSelectedInvoiceOrder((prev) =>
        prev ? { ...prev, fulfillmentStatus: newStatus } : null,
      );
    }
    showToast(`Order ${orderId} updated to "${newStatus}".`);
  };

  const pendingOrdersCount = orders.filter(
    (o) =>
      o.fulfillmentStatus === "Pending Review" ||
      o.fulfillmentStatus === "Confirmed",
  ).length;

  const currentStats = {
    ...initialSellerStats,
    activeProducts: products.length,
    totalOrders: orders.length,
    totalRevenue: orders.reduce((sum, o) => sum + o.totalAmount, 0),
    pendingOrdersCount,
  };

  return (
    <div className="min-h-screen bg-slate-100/70 font-sans">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-2xl bg-slate-900 px-5 py-3.5 text-xs font-bold text-white shadow-2xl animate-in slide-in-from-bottom-5">
          <CheckCircle2 className="h-4 w-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Invoice Modal */}
      {selectedInvoiceOrder && (
        <SellerInvoiceModal
          order={selectedInvoiceOrder}
          onClose={() => setSelectedInvoiceOrder(null)}
          onUpdateStatus={handleUpdateOrderStatus}
        />
      )}

      {/* Top Navbar for Merchant Console */}
      <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 lg:hidden"
            aria-label="Open seller navigation"
          >
            <Menu className="h-5 w-5" />
          </button>

          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 font-black text-white text-base shadow-sm">
              M
            </span>
            <div>
              <span className="text-sm font-black text-slate-900 tracking-tight">
                MARKOOD
              </span>
              <span className="hidden sm:inline-block ml-1.5 rounded-md bg-blue-50 px-1.5 py-0.5 text-[10px] font-extrabold text-blue-600">
                MERCHANT
              </span>
            </div>
          </Link>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={() => setActiveTab("add-product")}
            className="flex items-center gap-1.5 rounded-xl bg-blue-600 px-3 py-2 text-xs font-bold text-white shadow-xs hover:bg-blue-500 transition"
          >
            <Plus className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Post Product</span>
          </button>

          <Link
            href="/storeFront"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition"
          >
            Storefront ↗
          </Link>

          <div className="h-4 w-px bg-slate-200" />

          <div className="flex items-center gap-2 pl-1">
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-xs font-black text-white shrink-0">
              AA
            </div>
            <div className="hidden md:block text-left">
              <p className="text-xs font-bold text-slate-900 leading-tight">Apex Agro</p>
              <p className="text-[10px] text-slate-400">Verified Seller</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Layout Body */}
      <div className="flex">
        {/* Sidebar */}
        <SellerSidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          productCount={products.length}
          pendingOrderCount={pendingOrdersCount}
          isOpen={sidebarOpen}
          setIsOpen={setSidebarOpen}
        />

        {/* Content Area */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 min-w-0 max-w-7xl mx-auto">
          {activeTab === "overview" && (
            <SellerStatsOverview
              stats={currentStats}
              products={products}
              orders={orders}
              onNavigateTab={(tab) => setActiveTab(tab)}
              onViewOrder={(ord) => setSelectedInvoiceOrder(ord)}
            />
          )}

          {activeTab === "products" && (
            <SellerProductList
              products={products}
              onAddProduct={() => setActiveTab("add-product")}
              onDeleteProduct={handleDeleteProduct}
              onUpdateStock={handleUpdateStock}
            />
          )}

          {activeTab === "add-product" && (
            <SellerAddProductForm
              onProductCreated={handleProductCreated}
              onCancel={() => setActiveTab("products")}
            />
          )}

          {activeTab === "orders" && (
            <SellerOrdersList
              orders={orders}
              onViewInvoice={(ord) => setSelectedInvoiceOrder(ord)}
              onUpdateStatus={handleUpdateOrderStatus}
            />
          )}

          {activeTab === "settings" && <SellerSettings />}
        </main>
      </div>
    </div>
  );
}
