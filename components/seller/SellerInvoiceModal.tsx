"use client";

import React from "react";
import {
  X,
  Printer,
  Download,
  Building2,
  CheckCircle2,
  Calendar,
  CreditCard,
  Truck,
  ShieldCheck,
} from "lucide-react";
import { SellerOrder } from "@/lib/constant/sellerData";

interface SellerInvoiceModalProps {
  order: SellerOrder | null;
  onClose: () => void;
  onUpdateStatus: (orderId: string, status: SellerOrder["fulfillmentStatus"]) => void;
}

export default function SellerInvoiceModal({
  order,
  onClose,
  onUpdateStatus,
}: SellerInvoiceModalProps) {
  if (!order) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-3xl rounded-3xl bg-white p-6 sm:p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        {/* Top bar with actions */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-5">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <Building2 className="h-5 w-5" />
            </span>
            <div>
              <h2 className="text-lg font-black text-slate-900">
                B2B Commercial Invoice
              </h2>
              <p className="text-xs text-slate-500">
                Order Reference: <span className="font-bold text-blue-600">{order.id}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => window.print()}
              className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-bold text-slate-700 hover:bg-slate-100 transition"
            >
              <Printer className="h-3.5 w-3.5" />
              Print Invoice
            </button>
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Invoice Body */}
        <div className="mt-6 space-y-6 text-sm">
          {/* Status Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-slate-50 p-4 border border-slate-100">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-500">Order Status:</span>
              <select
                value={order.fulfillmentStatus}
                onChange={(e) =>
                  onUpdateStatus(order.id, e.target.value as SellerOrder["fulfillmentStatus"])
                }
                className="rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-bold text-slate-800 outline-none cursor-pointer"
              >
                <option value="Pending Review">Pending Review</option>
                <option value="Confirmed">Confirmed</option>
                <option value="Processing">Processing</option>
                <option value="Shipped">Shipped</option>
                <option value="Delivered">Delivered</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </div>

            <div className="flex items-center gap-4 text-xs">
              <span className="text-slate-500">
                Payment:{" "}
                <strong
                  className={`font-bold ${
                    order.paymentStatus === "Paid" ? "text-emerald-600" : "text-amber-600"
                  }`}
                >
                  {order.paymentStatus} ({order.paymentTerms})
                </strong>
              </span>
              <span className="text-slate-500">
                Ordered: <strong className="text-slate-800">{order.orderDate}</strong>
              </span>
            </div>
          </div>

          {/* Seller and Buyer Parties */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 rounded-2xl border border-slate-100 p-5 bg-white">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                Seller / Exporter
              </p>
              <h3 className="font-extrabold text-slate-900">Apex Agro & Wholesale Ltd.</h3>
              <p className="mt-0.5 text-xs text-slate-600">VAT ID: SE918274619001</p>
              <p className="text-xs text-slate-600">Industrial Logistics Park, Gateway 3</p>
              <p className="text-xs text-slate-600">support@apexagrowholesale.com</p>
            </div>

            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                Buyer / Importer
              </p>
              <h3 className="font-extrabold text-slate-900">{order.buyerCompany}</h3>
              <p className="mt-0.5 text-xs text-slate-600">Attn: {order.buyerContactName}</p>
              <p className="text-xs text-slate-600">VAT: {order.buyerVatNumber}</p>
              <p className="text-xs text-slate-600">{order.shippingAddress}</p>
              <p className="text-xs text-slate-600">{order.buyerEmail}</p>
            </div>
          </div>

          {/* Line Items Table */}
          <div className="overflow-hidden rounded-2xl border border-slate-200">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-slate-200 bg-slate-50 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                <tr>
                  <th className="py-3 pl-4">Item Description</th>
                  <th className="py-3">SKU</th>
                  <th className="py-3 text-right">Quantity</th>
                  <th className="py-3 text-right">Unit Price</th>
                  <th className="py-3 pr-4 text-right">Subtotal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {order.items.map((item) => (
                  <tr key={item.id}>
                    <td className="py-3.5 pl-4 font-semibold text-slate-900">
                      {item.productName}
                      <span className="block text-[11px] font-normal text-slate-400">
                        {item.unit}
                      </span>
                    </td>
                    <td className="py-3.5 font-mono text-slate-500">{item.sku}</td>
                    <td className="py-3.5 text-right font-bold text-slate-800">
                      {item.quantity}
                    </td>
                    <td className="py-3.5 text-right text-slate-600">${item.unitPrice}</td>
                    <td className="py-3.5 pr-4 text-right font-extrabold text-slate-900">
                      ${item.subtotal.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Totals Breakdown */}
            <div className="border-t border-slate-200 bg-slate-50/70 p-4">
              <div className="ml-auto max-w-xs space-y-1.5 text-xs">
                <div className="flex justify-between text-slate-600">
                  <span>Goods Subtotal:</span>
                  <span className="font-semibold text-slate-900">
                    ${order.subtotal.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Commercial Freight & Handling:</span>
                  <span className="font-semibold text-slate-900">${order.shippingFee}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Applicable VAT / Customs:</span>
                  <span className="font-semibold text-slate-900">${order.tax}</span>
                </div>
                <div className="flex justify-between border-t border-slate-200 pt-2 text-sm font-black text-slate-900">
                  <span>Total Order Value:</span>
                  <span className="text-base text-blue-600">
                    ${order.totalAmount.toLocaleString()} USD
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Notes */}
          {order.notes && (
            <div className="rounded-xl bg-blue-50/60 p-3.5 text-xs text-blue-900 border border-blue-100">
              <span className="font-bold">Logistics & Handling Instructions:</span> {order.notes}
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="mt-6 flex justify-end gap-3 border-t border-slate-100 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl bg-slate-100 px-5 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-200 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

