import {
  Wheat,
  Smartphone,
  Shirt,
  Sprout,
  Factory,
  ShoppingBag,
  RefreshCcw,
  Tags,
  Handshake,
  Warehouse,
  Building2,
  Store,
  Package,
} from "lucide-react";
import { MarketplaceSection, SellerTab } from "./data.type";

export const NAVIGATION_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Products",
    href: "/ ",
    megaMenu: "products",
  },
  {
    label: "Providers",
    href: "/ ",
    megaMenu: "providers",
  },
  {
    label: "Deals",
    href: "/ ",
    megaMenu: "deals",
  },
  {
    label: "About",
    href: "/ ",
  },
];

export const categories = [
  {
    name: "Food & Grocery",
    href: "/",
    description: "Bulk food products",
    icon: Wheat,
  },
  {
    name: "Electronics",
    href: "/",
    description: "Devices & accessories",
    icon: Smartphone,
  },
  {
    name: "Clothing & Textile",
    href: "/",
    description: "Wholesale fashion",
    icon: Shirt,
  },
  {
    name: "Agriculture",
    href: "/",
    description: "Farming & raw materials",
    icon: Sprout,
  },
  {
    name: "Machinery",
    href: "/",
    description: "Industrial equipment",
    icon: Factory,
  },
  // {
  //   name: "Beauty & Personal Care",
  //   href: "/",
  //   description: "Cosmetics & self-care",
  //   icon: Sparkles,
  // },
];

export const recentSearches = [
  "Rice",
  "Electronics",
  "Cotton Shirt",
  "Packaging",
];

export const sections: MarketplaceSection[] = [
  {
    title: "BUY",
    subtitle: "Procurement & Sourcing",
    description:
      "Source verified products & wholesale inventory directly from top manufacturers",
    icon: ShoppingBag,
    type: "blue",
    items: [
      {
        title: "New Wholesale Products",
        description: "Source factory-direct inventory at competitive rates",
        icon: ShoppingBag,
        href: "/products/newArrivals",
        badge: "Verified",
      },
      {
        title: "Surplus & Used Equipment",
        description: "Quality pre-owned commercial goods & machinery",
        icon: RefreshCcw,
        href: "/products/allProduct",
        badge: "Value",
      },
      {
        title: "Bulk Purchase Deals",
        description: "Volume tier pricing & consolidated shipping discounts",
        icon: Package,
        href: "/deal/BulkPurchaseDeals",
        badge: "Best Rates",
      },
    ],
  },

  {
    title: "SELL",
    subtitle: "Merchant & Liquidation",
    description:
      "Reach qualified B2B buyers and monetize your business inventory fast",
    icon: Tags,
    type: "amber",
    items: [
      {
        title: "B2B Merchant Console",
        description: "Post products, manage orders & grow commercial sales",
        icon: Store,
        href: "/seller",
        badge: "Portal",
      },
      {
        title: "Sell Surplus & Equipment",
        description: "Liquidate used business machinery & excess goods",
        icon: RefreshCcw,
        href: "/seller",
        badge: "Direct",
      },
      {
        title: "Clearance Stock Lots",
        description: "Offload overstock inventory rapidly to volume buyers",
        icon: Warehouse,
        href: "/deal/Clearance",
        badge: "Hot Deals",
      },
    ],
  },

  {
    title: "BUSINESS",
    subtitle: "Enterprises & M&A",
    description:
      "Explore enterprise acquisitions, turnkey franchises & strategic partnerships",
    icon: Building2,
    type: "purple",
    items: [
      {
        title: "List Business For Sale",
        description: "Connect confidentially with serious institutional buyers",
        icon: Store,
        href: "/seller",
        badge: "M&A",
      },
      {
        title: "Acquire Running Business",
        description:
          "Discover operating businesses matching your target criteria",
        icon: Handshake,
        href: "/deal/Clearance",
        badge: "Turnkey",
      },
      {
        title: "Verified Supplier Directory",
        description: "Form long-term supply agreements & strategic B2B pacts",
        icon: Building2,
        href: "/provider/AllProviders",
        badge: "Partners",
      },
    ],
  },
];

export interface SellerSidebarProps {
  activeTab: SellerTab;
  setActiveTab: (tab: SellerTab) => void;
  productCount: number;
  pendingOrderCount: number;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}
