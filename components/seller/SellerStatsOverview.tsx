"use client";

import React from "react";
import {
  DollarSign,
  TrendingUp,
  Package,
  ShoppingCart,
  Clock,
  AlertTriangle,
  ArrowUpRight,
  PlusCircle,
  FileCheck,
  Truck,
  Building2,
} from "lucide-react";
import { SellerProduct, SellerOrder, SellerStats } from "@/lib/constant/sellerData";

interface SellerStatsOverviewProps {
  stats: SellerStats;
  products: SellerProduct[];
  orders: SellerOrder[];
  onNavigateTab: (tab: "products" | "add-product" | "orders" | "settings") => void;
  onViewOrder: (order: SellerOrder) => void;
}

export default function SellerStatsOverview({
  stats,
  products,
  orders,
  onNavigateTab,
  onViewOrder,
}: SellerStatsOverviewProps) {
  const lowStockProducts = products.filter(
    (p) => p.stockStatus === "Low Stock" || p.stockStatus === "Out of Stock" || p.stock < 20
  );

  const pendingOrders = orders.filter(
    (o) => o.fulfillmentStatus === "Pending Review" || o.fulfillmentStatus === "Confirmed"
  );

  const recentOrders = orders.slice(0, 4);

  // Revenue chart mock bars (6 months)
  const monthlyData = [
    { month: "Apr", revenue: 18400, orders: 22 },
    { month: "May", revenue: 22600, orders: 27 },
    { month: "Jun", revenue: 19800, orders: 25 },
    { month: "Jul", revenue: 27500, orders: 34 },
    { month: "Aug", revenue: 29800, orders: 38 },
    { month: "Sep (MTD)", revenue: 30420, orders: 38 },
  ];
  const maxRevenue = Math.max(...monthlyData.map((d) => d.revenue));

  return (
    <div className="space-y-6">
      {/* Top Banner / Welcome */}
      <div className="flex flex-col justify-between gap-4 rounded-2xl bg-gradient-to-r from-slate-900 via-[#071A3D] to-blue-950 p-6 text-white shadow-xl sm:flex-row sm:items-center sm:p-8">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/20 px-3 py-1 text-xs font-semibold text-blue-300 backdrop-blur-xs">
            <Building2 className="h-3.5 w-3.5" /> B2B Supplier Console
          </span>
          <h1 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl">
            Welcome back, Apex Agro Wholesale!
          </h1>
          <p className="mt-1 text-sm text-slate-300 max-w-xl leading-relaxed">
            You have <strong className="text-white">{pendingOrders.length} wholesale orders</strong> awaiting fulfillment and{" "}
            <strong className="text-white">{lowStockProducts.length} items</strong> with low warehouse inventory.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => onNavigateTab("add-product")}
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-md shadow-blue-500/30 transition hover:bg-blue-500 hover:shadow-lg active:scale-95"
          >
            <PlusCircle className="h-4 w-4" />
            Add New Product
          </button>
          <button
            type="button"
            onClick={() => onNavigateTab("orders")}
            className="flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-xs border border-white/10 transition hover:bg-white/20 active:scale-95"
          >
            <ShoppingCart className="h-4 w-4" />
            View Orders ({orders.length})
          </button>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {/* Total Revenue */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs transition hover:shadow-md">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Total Wholesale Sales
            </span>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
              <DollarSign className="h-5 w-5" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-2xl font-extrabold text-slate-900">
              ${stats.totalRevenue.toLocaleString()}
            </span>
            <span className="inline-flex items-center text-xs font-bold text-emerald-600">
              <TrendingUp className="mr-0.5 h-3.5 w-3.5" />
              +{stats.monthlyRevenueChange}%
            </span>
          </div>
          <p className="mt-1 text-xs text-slate-400">vs. last 30 days commercial volume</p>
        </div>

        {/* Total Orders */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs transition hover:shadow-md">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Total B2B Orders
            </span>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <ShoppingCart className="h-5 w-5" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-2xl font-extrabold text-slate-900">{orders.length}</span>
            <span className="inline-flex items-center text-xs font-bold text-blue-600">
              <TrendingUp className="mr-0.5 h-3.5 w-3.5" />
              +{stats.monthlyOrdersChange}%
            </span>
          </div>
          <p className="mt-1 text-xs text-slate-400">Avg. Order Value: ${stats.avgOrderValue}</p>
        </div>

        {/* Active Products */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs transition hover:shadow-md">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Active Listed Products
            </span>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
              <Package className="h-5 w-5" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-2xl font-extrabold text-slate-900">{products.length}</span>
            <span className="rounded-md bg-indigo-50 px-2 py-0.5 text-xs font-semibold text-indigo-700">
              Wholesale Ready
            </span>
          </div>
          <p className="mt-1 text-xs text-slate-400">Across 3 major product categories</p>
        </div>

        {/* Pending Fulfillment */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs transition hover:shadow-md">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Pending Fulfillment
            </span>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
              <Clock className="h-5 w-5" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-2xl font-extrabold text-slate-900">{pendingOrders.length}</span>
            <span className="rounded-md bg-amber-50 px-2 py-0.5 text-xs font-semibold text-amber-700">
              Action Required
            </span>
          </div>
          <p className="mt-1 text-xs text-slate-400">Target fulfillment &lt; 48 hours</p>
        </div>
      </div>

      {/* Analytics & Inventory Alert Section */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Revenue Trends Chart (2 cols) */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-base font-bold text-slate-900">B2B Revenue & Order Volume</h2>
              <p className="text-xs text-slate-500">Monthly wholesale gross settlement value</p>
            </div>
            <span className="rounded-lg bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
              Last 6 Months
            </span>
          </div>

          <div className="flex h-56 items-end gap-3 pt-6 sm:gap-6">
            {monthlyData.map((item, idx) => {
              const heightPercent = Math.round((item.revenue / maxRevenue) * 100);
              return (
                <div key={idx} className="group relative flex flex-1 flex-col items-center h-full justify-end">
                  {/* Tooltip on hover */}
                  <div className="pointer-events-none absolute -top-10 hidden flex-col items-center rounded-lg bg-slate-900 px-2.5 py-1 text-[11px] font-semibold text-white shadow-lg group-hover:flex z-10 whitespace-nowrap">
                    <span>${item.revenue.toLocaleString()}</span>
                    <span className="text-[10px] text-slate-300 font-normal">{item.orders} orders</span>
                  </div>

                  <div className="relative w-full flex items-end justify-center h-full">
                    <div
                      style={{ height: `${heightPercent}%` }}
                      className="w-full max-w-[48px] rounded-t-lg bg-blue-600/80 transition-all duration-300 group-hover:bg-blue-600 group-hover:shadow-md group-hover:shadow-blue-500/20"
                    />
                  </div>
                  <span className="mt-2 text-xs font-semibold text-slate-500 group-hover:text-slate-900">
                    {item.month}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stock & Quick Operations Column */}
        <div className="space-y-6">
          {/* Inventory Watch */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-amber-500" />
                <h3 className="text-sm font-bold text-slate-900">Inventory Alerts</h3>
              </div>
              <button
                type="button"
                onClick={() => onNavigateTab("products")}
                className="text-xs font-semibold text-blue-600 hover:underline"
              >
                Manage
              </button>
            </div>

            {lowStockProducts.length === 0 ? (
              <p className="text-xs text-slate-500">All products have healthy inventory levels.</p>
            ) : (
              <div className="space-y-3">
                {lowStockProducts.slice(0, 3).map((prod) => (
                  <div
                    key={prod.id}
                    className="flex items-center justify-between rounded-xl bg-slate-50 p-3 border border-slate-100"
                  >
                    <div className="min-w-0 flex-1 pr-2">
                      <p className="truncate text-xs font-bold text-slate-800">{prod.name}</p>
                      <p className="text-[11px] text-slate-500">MOQ: {prod.moq} {prod.unit}</p>
                    </div>
                    <span
                      className={`shrink-0 rounded-full px-2 py-0.5 text-[11px] font-bold ${
                        prod.stockStatus === "Out of Stock"
                          ? "bg-rose-100 text-rose-700"
                          : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {prod.stock === 0 ? "Out of Stock" : `${prod.stock} left`}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Quick Shortcuts */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
            <h3 className="text-sm font-bold text-slate-900 mb-3">Merchant Shortcuts</h3>
            <div className="space-y-2">
              <button
                type="button"
                onClick={() => onNavigateTab("add-product")}
                className="flex w-full items-center justify-between rounded-xl border border-slate-200/80 p-3 text-left text-xs font-semibold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50/50 hover:text-blue-700"
              >
                <span className="flex items-center gap-2">
                  <PlusCircle className="h-4 w-4 text-blue-600" />
                  Post New Wholesale Item
                </span>
                <ArrowUpRight className="h-4 w-4 text-slate-400" />
              </button>

              <button
                type="button"
                onClick={() => onNavigateTab("orders")}
                className="flex w-full items-center justify-between rounded-xl border border-slate-200/80 p-3 text-left text-xs font-semibold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50/50 hover:text-blue-700"
              >
                <span className="flex items-center gap-2">
                  <Truck className="h-4 w-4 text-blue-600" />
                  Process Pending Deliveries
                </span>
                <ArrowUpRight className="h-4 w-4 text-slate-400" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Wholesale Orders Table */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-base font-bold text-slate-900">Recent Wholesale Orders</h2>
            <p className="text-xs text-slate-500">Incoming B2B purchase orders from enterprise buyers</p>
          </div>
          <button
            type="button"
            onClick={() => onNavigateTab("orders")}
            className="flex items-center gap-1 text-xs font-bold text-blue-600 hover:underline"
          >
            View All ({orders.length}) <ArrowUpRight className="h-3.5 w-3.5" />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200/70 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                <th className="pb-3 pl-1">Order ID</th>
                <th className="pb-3">Buyer Enterprise</th>
                <th className="pb-3">Items / Qty</th>
                <th className="pb-3">Order Total</th>
                <th className="pb-3">Payment Terms</th>
                <th className="pb-3">Status</th>
                <th className="pb-3 text-right pr-1">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {recentOrders.map((order) => {
                const totalUnits = order.items.reduce((sum, it) => sum + it.quantity, 0);
                return (
                  <tr key={order.id} className="transition hover:bg-slate-50/70">
                    <td className="py-3.5 pl-1 font-bold text-blue-600">{order.id}</td>
                    <td className="py-3.5">
                      <div className="font-semibold text-slate-900">{order.buyerCompany}</div>
                      <div className="text-xs text-slate-400">{order.orderDate}</div>
                    </td>
                    <td className="py-3.5 text-slate-600">
                      <span className="font-medium text-slate-900">{order.items.length} product(s)</span>
                      <span className="block text-xs text-slate-400">{totalUnits} total units</span>
                    </td>
                    <td className="py-3.5 font-bold text-slate-900">
                      ${order.totalAmount.toLocaleString()}
                    </td>
                    <td className="py-3.5">
                      <span className="inline-flex rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700">
                        {order.paymentTerms}
                      </span>
                    </td>
                    <td className="py-3.5">
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-bold ${
                          order.fulfillmentStatus === "Delivered"
                            ? "bg-emerald-100 text-emerald-800"
                            : order.fulfillmentStatus === "Shipped"
                            ? "bg-blue-100 text-blue-800"
                            : order.fulfillmentStatus === "Confirmed" || order.fulfillmentStatus === "Processing"
                            ? "bg-purple-100 text-purple-800"
                            : "bg-amber-100 text-amber-800"
                        }`}
                      >
                        {order.fulfillmentStatus}
                      </span>
                    </td>
                    <td className="py-3.5 text-right pr-1">
                      <button
                        type="button"
                        onClick={() => onViewOrder(order)}
                        className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:bg-blue-600 hover:text-white"
                      >
                        Invoice / Details
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

