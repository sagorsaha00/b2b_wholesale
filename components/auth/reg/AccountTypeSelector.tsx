"use client";

import { motion } from "framer-motion";

export type AccountKind = "buyer" | "provider";

interface Props {
  accountType: AccountKind;
  onSelect: (type: AccountKind) => void;
}

export function AccountTypeSelector({ accountType, onSelect }: Props) {
  return (
    <div className="mb-6">
      <p className="mb-3 text-sm font-semibold text-slate-700">I want to</p>
      <div className="relative grid grid-cols-2 gap-3 border-b border-slate-200 pb-3">
        <button
          type="button"
          onClick={() => onSelect("buyer")}
          className={`relative pb-2 text-left transition-colors ${
            accountType === "buyer"
              ? "font-bold text-[#2563EB]"
              : "text-slate-500 hover:text-slate-800"
          }`}
        >
          <span className="block text-sm font-semibold">Buy Wholesale</span>
          <span className="block text-xs font-normal text-slate-400">
            Reg Buyer
          </span>
          {accountType === "buyer" && (
            <motion.div
              layoutId="activeUnderline"
              className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#2563EB]"
            />
          )}
        </button>

        <button
          type="button"
          onClick={() => onSelect("provider")}
          className={`relative pb-2 text-left transition-colors ${
            accountType === "provider"
              ? "font-bold text-[#2563EB]"
              : "text-slate-500 hover:text-slate-800"
          }`}
        >
          <span className="block text-sm font-semibold">Sell Wholesale</span>
          <span className="block text-xs font-normal text-slate-400">
            Reg Seller
          </span>
          {accountType === "provider" && (
            <motion.div
              layoutId="activeUnderline"
              className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#2563EB]"
            />
          )}
        </button>
      </div>
    </div>
  );
}
