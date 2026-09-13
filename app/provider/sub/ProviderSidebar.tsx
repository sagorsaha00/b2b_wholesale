"use client";

import React from "react";
import { Filter, Store, Clock, CheckCircle2, XCircle, X } from "lucide-react";
import { VerificationStatus } from "@/lib/constant/type/seller.type";

interface ProviderSidebarProps {
  selectedStatus: VerificationStatus;
  onSelectStatus: (status: VerificationStatus) => void;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
}

export const ProviderSidebar: React.FC<ProviderSidebarProps> = ({
  selectedStatus,
  onSelectStatus,
  isOpenMobile,
  onCloseMobile,
}) => {
  const statusOptions: {
    label: string;
    value: VerificationStatus;
    icon: React.ReactNode;
  }[] = [
    {
      label: "All Providers",
      value: "all",
      icon: <Store className="h-4 w-4" />,
    },
    { label: "Pending", value: "pending", icon: <Clock className="h-4 w-4" /> },
    {
      label: "Verified",
      value: "verified",
      icon: <CheckCircle2 className="h-4 w-4" />,
    },
    {
      label: "Rejected",
      value: "rejected",
      icon: <XCircle className="h-4 w-4" />,
    },
  ];

  const sidebarContent = (
    <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between border-b border-gray-100 pb-3">
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5 text-blue-600" />
          <h2 className="font-semibold text-gray-900">Filter Sellers</h2>
        </div>
        <button
          onClick={onCloseMobile}
          className="rounded-lg p-1 text-gray-400 hover:bg-gray-100 lg:hidden"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <nav className="space-y-1">
        {statusOptions.map((option) => {
          const isActive = selectedStatus === option.value;
          return (
            <button
              key={option.value}
              onClick={() => {
                onSelectStatus(option.value);
                onCloseMobile();
              }}
              className={`flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-medium transition-all ${
                isActive
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <div className="flex items-center gap-2.5">
                {option.icon}
                <span>{option.label}</span>
              </div>
            </button>
          );
        })}
      </nav>
    </div>
  );

  return (
    <>
      <aside className="hidden w-64 shrink-0 lg:block">{sidebarContent}</aside>

      {isOpenMobile && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
            onClick={onCloseMobile}
          />
          <div className="relative z-10 w-4/5 max-w-xs bg-white p-4 shadow-xl">
            {sidebarContent}
          </div>
        </div>
      )}
    </>
  );
};
