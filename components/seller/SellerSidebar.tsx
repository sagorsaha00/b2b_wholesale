"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Package,
  PlusCircle,
  ShoppingCart,
  Settings,
  Store,
  ExternalLink,
} from "lucide-react";

export type SellerTab =
  | "overview"
  | "products"
  | "add-product"
  | "orders"
  | "settings";

interface SellerSidebarProps {
  activeTab: SellerTab;
  setActiveTab: (tab: SellerTab) => void;
  productCount: number;
  pendingOrderCount: number;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

interface NavItem {
  id: SellerTab;
  label: string;
  icon: React.ElementType;
  badge: string | number | null;
  badgeColor?: string;
}

export default function SellerSidebar({
  activeTab,
  setActiveTab,
  productCount,
  pendingOrderCount,
  isOpen,
  setIsOpen,
}: SellerSidebarProps) {
  const navItems: NavItem[] = [
    {
      id: "overview",
      label: "Dashboard",
      icon: LayoutDashboard,
      badge: null,
    },
    {
      id: "products",
      label: "My Products",
      icon: Package,
      badge: productCount,
    },
    {
      id: "add-product",
      label: "Add Product",
      icon: PlusCircle,
      badge: "New",
      badgeColor: "bg-blue-600 text-white",
    },
    {
      id: "orders",
      label: "Wholesale Orders",
      icon: ShoppingCart,
      badge: pendingOrderCount > 0 ? `${pendingOrderCount} Pending` : null,
      badgeColor: "bg-amber-100 text-amber-800",
    },
    {
      id: "settings",
      label: "Store Settings",
      icon: Settings,
      badge: null,
    },
  ];

  const handleTabClick = (tab: SellerTab) => {
    setActiveTab(tab);
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
    fixed inset-y-0 left-0 z-50
    flex w-72 flex-col
    border-r border-slate-200
    bg-white
    shadow-lg
    transition-transform duration-300 ease-in-out

    ${isOpen ? "translate-x-0" : "-translate-x-full"}

    lg:sticky
    lg:top-0
    lg:h-screen
    lg:translate-x-0
    lg:z-40
    lg:shadow-none
  `}
      >
        {/* Sidebar Content */}
        <div className="flex-1 overflow-y-auto px-4 py-6">
          {/* Seller Management */}
          <p className="mb-3 px-3 text-[11px] font-bold uppercase tracking-wider text-slate-400">
            Seller Management
          </p>

          {/* Navigation */}
          <nav className="space-y-1.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleTabClick(item.id)}
                  className={`
              group
              flex
              w-full
              items-center
              justify-between
              rounded-xl
              px-3.5
              py-3
              text-sm
              font-semibold
              transition-all
              duration-200
              ${
                isActive
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }
            `}
                >
                  <div className="flex items-center gap-3">
                    <Icon
                      className={`
                  h-5 w-5 shrink-0 transition-colors
                  ${
                    isActive
                      ? "text-white"
                      : "text-slate-400 group-hover:text-slate-700"
                  }
                `}
                    />

                    <span>{item.label}</span>
                  </div>

                  {item.badge !== null && (
                    <span
                      className={`
                  rounded-full
                  px-2
                  py-0.5
                  text-xs
                  font-medium
                  ${
                    item.badgeColor
                      ? item.badgeColor
                      : isActive
                        ? "bg-white/20 text-white"
                        : "bg-slate-100 text-slate-700"
                  }
                `}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Quick Resources */}
          <div className="mt-8 border-t border-slate-100 pt-6">
            <p className="mb-3 px-3 text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Quick Resources
            </p>

            <div className="space-y-1 text-sm text-slate-600">
              <Link
                href="/storeFront"
                target="_blank"
                rel="noopener noreferrer"
                className="
            flex
            items-center
            justify-between
            rounded-lg
            px-3
            py-2
            transition
            hover:bg-slate-50
            hover:text-blue-600
          "
              >
                <span className="flex items-center gap-2">
                  <ExternalLink className="h-4 w-4" />
                  View Public Storefront
                </span>

                <span className="text-xs text-slate-400">Live</span>
              </Link>

              <Link
                href="/"
                className="
            flex
            items-center
            gap-2
            rounded-lg
            px-3
            py-2
            transition
            hover:bg-slate-50
            hover:text-blue-600
          "
              >
                <Store className="h-4 w-4" />
                Back to Marketplace
              </Link>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
