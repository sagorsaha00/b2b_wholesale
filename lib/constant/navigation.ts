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
  
} from "lucide-react";
import { MarketplaceSection,  SellerTab } from "./data.type";

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
    description: "Find the best products for your business",
    icon: ShoppingBag,
    type: "blue",
    items: [
      {
        title: "New",
        description: "Buy brand new products for your business",
        icon: ShoppingBag,
        href: "/products/newArrivals",
      },
      {
        title: "Second Hand",
        description: "Quality used products at better prices",
        icon: RefreshCcw,
        href: "/products/allProduct ",
      },
    ],
  },

  {
    title: "SELL",
    description: "Sell your products or stock to other businesses",
    icon: Tags,
    type: "yellow",
    items: [
      {
        title: "Sell as B2B",
        description: "Sell products in bulk to other businesses",
        icon: Handshake,
        href: " /",
      },
      {
        title: "Sell Second Hand",
        description: "Sell used products to businesses",
        icon: RefreshCcw,
        href: "/",
      },
      {
        title: "Clearance Stock",
        description: "Sell excess or old stock at great prices",
        icon: Warehouse,
        href: " /",
      },
    ],
  },

  {
    title: "BUSINESS",
    description: "Buy or sell established businesses",
    icon: Building2,
    type: "blue",
    items: [
      {
        title: "Sell Your Business",
        description: "List your business for sale and reach serious buyers",
        icon: Store,
        href: "/business/sell",
      },
      {
        title: "Buy Business",
        description: "Find and acquire running businesses that fit your goals",
        icon: Handshake,
        href: "/deal/Clearance",
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
