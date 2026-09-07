"use client";

import React, { useState, useMemo } from "react";
import {
  Search,
  Filter,
  ShoppingCart,
  FileText,
  Truck,
  CheckCircle2,
  Clock,
  ChevronDown,
  Building2,
  ExternalLink,
  DollarSign,
  AlertCircle,
} from "lucide-react";
import { SellerOrder } from "@/lib/constant/sellerData";

interface SellerOrdersListProps {
  orders: SellerOrder[];
  onViewInvoice: (order: SellerOrder) => void;
  onUpdateStatus: (orderId: string, status: SellerOrder["fulfillmentStatus"]) => void;
}

export default function SellerOrdersList({
  orders,
  onViewInvoice,
  onUpdateStatus,
}: SellerOrdersListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("All");

  const filterTabs = [
    { label: "All Orders", value: "All", count: orders.length },
    {
      label: "Pending Review",
      value: "Pending Review",
      count: orders.filter((o) => o.fulfillmentStatus === "Pending Review").length,
    },
    {
      label: "Confirmed",
      value: "Confirmed",
      count: orders.filter((o) => o.fulfillmentStatus === "Confirmed").length,
    },
    {
      label: "Processing",
      value: "Processing",
      count: orders.filter((o) => o.fulfillmentStatus === "Processing").length,
    },
    {
      label: "Shipped",
      value: "Shipped",
      count: orders.filter((o) => o.fulfillmentStatus === "Shipped").length,
    },
    {
      label: "Delivered",
      value: "Delivered",
      count: orders.filter((o) => o.fulfillmentStatus === "Delivered").length,
    },
  ];

  const filteredOrders = useMemo(() => {
    return orders.filter((order) => {
      const matchesSearch =
        order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.buyerCompany.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.buyerContactName.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus =
        statusFilter === "All" || order.fulfillmentStatus === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [orders, searchTerm, statusFilter]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-black text-slate-900">Wholesale Purchase Orders</h1>
          <p className="text-sm text-slate-500">
            Monitor incoming B2B contracts, update fulfillment stages, and generate commercial invoices.
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-xl bg-slate-100 p-1.5 text-xs text-slate-600 font-semibold">
          <Truck className="h-4 w-4 text-blue-600 ml-1" />
          <span>Average fulfillment: 2.1 days</span>
        </div>
      </div>

      {/* Tabs bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        {filterTabs.map((tab) => {
          const isActive = statusFilter === tab.value;
          return (
            <button
              key={tab.value}
              type="button"
              onClick={() => setStatusFilter(tab.value)}
              className={`flex shrink-0 items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition ${
                isActive
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200"
              }`}
            >
              <span>{tab.label}</span>
              <span
                className={`rounded-full px-2 py-0.5 text-[10px] ${
                  isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-700"
                }`}
              >
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Search Filter Bar */}
      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xs">
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by Order ID (#ORD-), Buyer Company Name, or Contact..."
            className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2.5 pl-10 pr-4 text-sm text-slate-800 placeholder-slate-400 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
          />
        </div>
      </div>

      {/* Orders List Table */}
      <div className="rounded-2xl border border-slate-200 bg-white shadow-xs overflow-hidden">
        {filteredOrders.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-12 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
              <ShoppingCart className="h-7 w-7" />
            </div>
            <h3 className="mt-4 text-base font-bold text-slate-900">No orders found</h3>
            <p className="mt-1 text-xs text-slate-500 max-w-sm">
              No wholesale orders match your current filter criteria.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-slate-200 bg-slate-50/70 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                <tr>
                  <th className="py-3.5 pl-6">Order ID & Date</th>
                  <th className="py-3.5">Buyer Enterprise</th>
                  <th className="py-3.5">Purchased Items</th>
                  <th className="py-3.5">Total Value</th>
                  <th className="py-3.5">Payment Terms</th>
                  <th className="py-3.5">Fulfillment Stage</th>
                  <th className="py-3.5 pr-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredOrders.map((order) => {
                  const totalUnits = order.items.reduce((s, i) => s + i.quantity, 0);

                  return (
                    <tr key={order.id} className="transition hover:bg-slate-50/80">
                      {/* Order ID & Date */}
                      <td className="py-4 pl-6">
                        <span className="font-extrabold text-blue-600 font-mono">
                          {order.id}
                        </span>
                        <div className="mt-0.5 text-xs text-slate-400">
                          {order.orderDate}
                        </div>
                      </td>

                      {/* Buyer Enterprise */}
                      <td className="py-4">
                        <div className="font-bold text-slate-900 flex items-center gap-1.5">
                          <Building2 className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                          <span>{order.buyerCompany}</span>
                        </div>
                        <p className="text-xs text-slate-500">
                          Attn: {order.buyerContactName}
                        </p>
                      </td>

                      {/* Items */}
                      <td className="py-4">
                        <span className="font-semibold text-slate-800">
                          {order.items.length} line item(s)
                        </span>
                        <p className="text-xs text-slate-400">{totalUnits} units total</p>
                      </td>

                      {/* Total */}
                      <td className="py-4">
                        <span className="text-base font-black text-slate-900">
                          ${order.totalAmount.toLocaleString()}
                        </span>
                        <span className="block text-[11px] text-slate-400">USD</span>
                      </td>

                      {/* Payment */}
                      <td className="py-4">
                        <span className="inline-block rounded-md bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-700">
                          {order.paymentTerms}
                        </span>
                        <span
                          className={`mt-1 block text-[11px] font-bold ${
                            order.paymentStatus === "Paid"
                              ? "text-emerald-600"
                              : "text-amber-600"
                          }`}
                        >
                          ● {order.paymentStatus}
                        </span>
                      </td>

                      {/* Fulfillment Stage dropdown */}
                      <td className="py-4">
                        <select
                          value={order.fulfillmentStatus}
                          onChange={(e) =>
                            onUpdateStatus(
                              order.id,
                              e.target.value as SellerOrder["fulfillmentStatus"]
                            )
                          }
                          className={`rounded-xl border px-3 py-1.5 text-xs font-bold outline-none cursor-pointer ${
                            order.fulfillmentStatus === "Delivered"
                              ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                              : order.fulfillmentStatus === "Shipped"
                              ? "border-blue-200 bg-blue-50 text-blue-800"
                              : order.fulfillmentStatus === "Confirmed" ||
                                order.fulfillmentStatus === "Processing"
                              ? "border-purple-200 bg-purple-50 text-purple-800"
                              : "border-amber-200 bg-amber-50 text-amber-800"
                          }`}
                        >
                          <option value="Pending Review">Pending Review</option>
                          <option value="Confirmed">Confirmed</option>
                          <option value="Processing">Processing</option>
                          <option value="Shipped">Shipped</option>
                          <option value="Delivered">Delivered</option>
                          <option value="Cancelled">Cancelled</option>
                        </select>
                      </td>

                      {/* Actions */}
                      <td className="py-4 pr-6 text-right">
                        <button
                          type="button"
                          onClick={() => onViewInvoice(order)}
                          className="flex items-center gap-1.5 ml-auto rounded-xl bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-700 transition hover:bg-blue-600 hover:text-white"
                        >
                          <FileText className="h-3.5 w-3.5" />
                          Invoice
                        </button>
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

