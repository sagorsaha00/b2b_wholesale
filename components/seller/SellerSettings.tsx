"use client";

import React, { useState } from "react";
import {
  Building2,
  ShieldCheck,
  CreditCard,
  Truck,
  Bell,
  CheckCircle2,
  Save,
  Globe,
} from "lucide-react";

export default function SellerSettings() {
  const [companyName, setCompanyName] = useState("Apex Agro & Wholesale Ltd.");
  const [vatId, setVatId] = useState("SE918274619001");
  const [contactEmail, setContactEmail] = useState("procurement@apexagrowholesale.com");
  const [incoterm, setIncoterm] = useState("FOB - Free on Board");
  const [settlementCurrency, setSettlementCurrency] = useState("USD ($)");
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div>
        <h1 className="text-2xl font-black text-slate-900">Merchant Profile & Settings</h1>
        <p className="text-sm text-slate-500">
          Configure company trade credentials, settlement accounts, and commercial shipping terms.
        </p>
      </div>

      {isSaved && (
        <div className="flex items-center gap-2.5 rounded-2xl bg-emerald-600 p-4 text-white shadow-lg shadow-emerald-500/20">
          <CheckCircle2 className="h-5 w-5 text-emerald-200" />
          <span className="text-xs font-bold">
            Merchant profile preferences saved successfully!
          </span>
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-6">
        {/* Company profile */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <Building2 className="h-5 w-5 text-blue-600" />
            <h2 className="text-base font-bold text-slate-900">Registered Business Entity</h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Legal Company Name
              </label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-2.5 text-sm text-slate-800 outline-none focus:border-blue-500 focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Tax / VAT Registration No.
              </label>
              <input
                type="text"
                value={vatId}
                onChange={(e) => setVatId(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-2.5 text-sm font-mono text-slate-800 outline-none focus:border-blue-500 focus:bg-white"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                B2B Procurement & Invoicing Email
              </label>
              <input
                type="email"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-2.5 text-sm text-slate-800 outline-none focus:border-blue-500 focus:bg-white"
              />
            </div>
          </div>
        </div>

        {/* Trade & Logistics Policy */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <Truck className="h-5 w-5 text-indigo-600" />
            <h2 className="text-base font-bold text-slate-900">Trade & Delivery Terms</h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Default Incoterm
              </label>
              <select
                value={incoterm}
                onChange={(e) => setIncoterm(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-2.5 text-sm text-slate-800 outline-none focus:border-blue-500 focus:bg-white"
              >
                <option value="FOB - Free on Board">FOB - Free on Board</option>
                <option value="CIF - Cost, Insurance & Freight">CIF - Cost, Insurance & Freight</option>
                <option value="EXW - Ex Works">EXW - Ex Works (Warehouse Pickup)</option>
                <option value="DDP - Delivered Duty Paid">DDP - Delivered Duty Paid</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Settlement Currency
              </label>
              <select
                value={settlementCurrency}
                onChange={(e) => setSettlementCurrency(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-2.5 text-sm text-slate-800 outline-none focus:border-blue-500 focus:bg-white"
              >
                <option value="USD ($)">USD ($) - United States Dollar</option>
                <option value="EUR (€)">EUR (€) - Euro</option>
                <option value="SEK (kr)">SEK (kr) - Swedish Krona</option>
                <option value="GBP (£)">GBP (£) - British Pound</option>
              </select>
            </div>
          </div>
        </div>

        {/* Verification Status */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-slate-900">Markood Verified Gold Supplier</h3>
                <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-extrabold text-blue-800">
                  Level 3 Verified
                </span>
              </div>
              <p className="text-xs text-slate-500">
                Identity, business registration certificate, and bank account verified on Markood Wholesale Registry.
              </p>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-500"
          >
            <Save className="h-4 w-4" />
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}

