export interface PricingTier {
  minQty: number;
  maxQty?: number;
  pricePerUnit: number;
}

export interface SellerProduct {
  id: string | number;
  name: string;
  sku: string;
  category: string;
  price: number;
  unit: string;
  moq: number; // Minimum Order Quantity
  stock: number;
  stockStatus: "In Stock" | "Low Stock" | "Out of Stock";
  image: string;
  description: string;
  leadTime: string;
  certifications?: string[];
  pricingTiers?: PricingTier[];
  createdAt: string;
}

export interface OrderItem {
  id: string | number;
  productName: string;
  sku: string;
  quantity: number;
  unitPrice: number;
  unit: string;
  subtotal: number;
}

export interface SellerOrder {
  id: string;
  buyerCompany: string;
  buyerContactName: string;
  buyerEmail: string;
  buyerVatNumber: string;
  shippingAddress: string;
  orderDate: string;
  deliveryDate?: string;
  items: OrderItem[];
  subtotal: number;
  shippingFee: number;
  tax: number;
  totalAmount: number;
  paymentTerms: "Net 30" | "Net 60" | "Advance Escrow" | "Letter of Credit (LC)";
  paymentStatus: "Paid" | "Pending" | "In Escrow";
  fulfillmentStatus: "Pending Review" | "Confirmed" | "Processing" | "Shipped" | "Delivered" | "Cancelled";
  notes?: string;
}

export interface SellerStats {
  totalRevenue: number;
  monthlyRevenueChange: number;
  totalOrders: number;
  monthlyOrdersChange: number;
  activeProducts: number;
  pendingOrdersCount: number;
  avgOrderValue: number;
}

export const initialSellerStats: SellerStats = {
  totalRevenue: 148520,
  monthlyRevenueChange: 14.8,
  totalOrders: 184,
  monthlyOrdersChange: 8.2,
  activeProducts: 12,
  pendingOrdersCount: 4,
  avgOrderValue: 807,
};

export const initialSellerProducts: SellerProduct[] = [
  {
    id: "PRD-1001",
    name: "Pure Refined Sunflower Cooking Oil",
    sku: "OIL-SUN-5L",
    category: "Food & Grocery",
    price: 120,
    unit: "5L Can (Pack of 4)",
    moq: 20,
    stock: 450,
    stockStatus: "In Stock",
    image: "/product/product1.png",
    description: "Grade A refined sunflower cooking oil, rich in Vitamin E. Bulk commercial packaging suitable for retail chains, catering, and food processing.",
    leadTime: "3-5 business days",
    certifications: ["ISO 22000", "Halal", "HACCP"],
    pricingTiers: [
      { minQty: 20, maxQty: 49, pricePerUnit: 120 },
      { minQty: 50, maxQty: 199, pricePerUnit: 112 },
      { minQty: 200, pricePerUnit: 105 },
    ],
    createdAt: "2026-08-10",
  },
  {
    id: "PRD-1002",
    name: "Royal Super Kernel Basmati Rice",
    sku: "RIC-BAS-10K",
    category: "Food & Grocery",
    price: 85,
    unit: "10kg Bag",
    moq: 50,
    stock: 680,
    stockStatus: "In Stock",
    image: "/product/product2.png",
    description: "Extra long aged aromatic basmati rice. Triple cleaned and moisture-controlled packaging for global commercial export.",
    leadTime: "2-4 business days",
    certifications: ["ISO 9001", "Halal", "Non-GMO"],
    pricingTiers: [
      { minQty: 50, maxQty: 99, pricePerUnit: 85 },
      { minQty: 100, maxQty: 499, pricePerUnit: 78 },
      { minQty: 500, pricePerUnit: 72 },
    ],
    createdAt: "2026-08-14",
  },
  {
    id: "PRD-1003",
    name: "Stoneground Whole Organic Wheat Flour",
    sku: "FLR-WHT-25K",
    category: "Food & Grocery",
    price: 45,
    unit: "25kg Bag",
    moq: 30,
    stock: 210,
    stockStatus: "In Stock",
    image: "/product/product3.png",
    description: "100% organic whole wheat flour milled from hard red spring wheat. Ideal for industrial bakeries and commercial food producers.",
    leadTime: "3-5 business days",
    certifications: ["USDA Organic", "EU Organic", "GMP"],
    pricingTiers: [
      { minQty: 30, maxQty: 99, pricePerUnit: 45 },
      { minQty: 100, pricePerUnit: 40 },
    ],
    createdAt: "2026-08-18",
  },
  {
    id: "PRD-1004",
    name: "High-Protein Split Red Lentils",
    sku: "LEN-RED-50K",
    category: "Food & Grocery",
    price: 68,
    unit: "25kg Bag",
    moq: 40,
    stock: 14,
    stockStatus: "Low Stock",
    image: "/product/product4.png",
    description: "Premium polished split red lentils with high protein content and fast cooking times. Bulk food grade packing.",
    leadTime: "4-7 business days",
    certifications: ["ISO 22000", "Halal"],
    pricingTiers: [
      { minQty: 40, maxQty: 99, pricePerUnit: 68 },
      { minQty: 100, pricePerUnit: 62 },
    ],
    createdAt: "2026-08-22",
  },
  {
    id: "PRD-1005",
    name: "Refined Granulated Cane Sugar (ICUMSA 45)",
    sku: "SUG-WHT-50K",
    category: "Food & Grocery",
    price: 54,
    unit: "50kg Sack",
    moq: 100,
    stock: 0,
    stockStatus: "Out of Stock",
    image: "/product/product5.png",
    description: "Export grade white refined crystal cane sugar with ICUMSA 45 purity rating. Packaged in multi-ply polypropylene export sacks.",
    leadTime: "7-10 business days",
    certifications: ["ICUMSA Certified", "ISO 9001"],
    pricingTiers: [
      { minQty: 100, maxQty: 499, pricePerUnit: 54 },
      { minQty: 500, pricePerUnit: 49 },
    ],
    createdAt: "2026-08-25",
  },
  {
    id: "PRD-1006",
    name: "Single-Estate Organic Ceylon Green Tea",
    sku: "TEA-GRN-10K",
    category: "Beverages",
    price: 110,
    unit: "10kg Foil Master Carton",
    moq: 15,
    stock: 130,
    stockStatus: "In Stock",
    image: "/product/product6.png",
    description: "Hand-picked high altitude organic green tea leaves packed in vacuum moisture-sealed master cartons for hotel chains & distributors.",
    leadTime: "3-6 business days",
    certifications: ["Rainforest Alliance", "Fair Trade", "EU Organic"],
    pricingTiers: [
      { minQty: 15, maxQty: 49, pricePerUnit: 110 },
      { minQty: 50, pricePerUnit: 98 },
    ],
    createdAt: "2026-08-28",
  },
];

export const initialSellerOrders: SellerOrder[] = [
  {
    id: "ORD-9842",
    buyerCompany: "Nordic Grand Provisions AB",
    buyerContactName: "Lars Lindqvist",
    buyerEmail: "procurement@nordicgrand.se",
    buyerVatNumber: "SE556123456701",
    shippingAddress: "Hammarby Fabriksväg 29, 120 30 Stockholm, Sweden",
    orderDate: "2026-09-06",
    deliveryDate: "2026-09-12",
    paymentTerms: "Net 30",
    paymentStatus: "In Escrow",
    fulfillmentStatus: "Pending Review",
    notes: "Requires palletized shrink wrap with temperature logging report.",
    items: [
      {
        id: 1,
        productName: "Pure Refined Sunflower Cooking Oil",
        sku: "OIL-SUN-5L",
        quantity: 60,
        unitPrice: 112,
        unit: "5L Can (Pack of 4)",
        subtotal: 6720,
      },
      {
        id: 2,
        productName: "Royal Super Kernel Basmati Rice",
        sku: "RIC-BAS-10K",
        quantity: 120,
        unitPrice: 78,
        unit: "10kg Bag",
        subtotal: 9360,
      },
    ],
    subtotal: 16080,
    shippingFee: 450,
    tax: 960,
    totalAmount: 17490,
  },
  {
    id: "ORD-9839",
    buyerCompany: "EuroCatering Continental BV",
    buyerContactName: "Sophie van der Meer",
    buyerEmail: "orders@eurocatering.nl",
    buyerVatNumber: "NL892019482B01",
    shippingAddress: "Havenlaan 104, 3089 Rotterdam, Netherlands",
    orderDate: "2026-09-04",
    deliveryDate: "2026-09-09",
    paymentTerms: "Advance Escrow",
    paymentStatus: "Paid",
    fulfillmentStatus: "Confirmed",
    notes: "Forklift ramp available at delivery dock 4.",
    items: [
      {
        id: 1,
        productName: "Stoneground Whole Organic Wheat Flour",
        sku: "FLR-WHT-25K",
        quantity: 80,
        unitPrice: 45,
        unit: "25kg Bag",
        subtotal: 3600,
      },
      {
        id: 2,
        productName: "Single-Estate Organic Ceylon Green Tea",
        sku: "TEA-GRN-10K",
        quantity: 25,
        unitPrice: 110,
        unit: "10kg Foil Master Carton",
        subtotal: 2750,
      },
    ],
    subtotal: 6350,
    shippingFee: 280,
    tax: 380,
    totalAmount: 7010,
  },
  {
    id: "ORD-9831",
    buyerCompany: "Baltic Retail Hub OÜ",
    buyerContactName: "Marek Tamm",
    buyerEmail: "m.tamm@balticretail.ee",
    buyerVatNumber: "EE100984124",
    shippingAddress: "Narva mnt 7D, 10117 Tallinn, Estonia",
    orderDate: "2026-09-02",
    deliveryDate: "2026-09-07",
    paymentTerms: "Net 60",
    paymentStatus: "Paid",
    fulfillmentStatus: "Processing",
    notes: "Certificate of Analysis (COA) must be attached inside carton 1.",
    items: [
      {
        id: 1,
        productName: "Royal Super Kernel Basmati Rice",
        sku: "RIC-BAS-10K",
        quantity: 200,
        unitPrice: 78,
        unit: "10kg Bag",
        subtotal: 15600,
      },
      {
        id: 2,
        productName: "High-Protein Split Red Lentils",
        sku: "LEN-RED-50K",
        quantity: 50,
        unitPrice: 68,
        unit: "25kg Bag",
        subtotal: 3400,
      },
    ],
    subtotal: 19000,
    shippingFee: 650,
    tax: 1140,
    totalAmount: 20790,
  },
  {
    id: "ORD-9818",
    buyerCompany: "Mediterranean Distribution Ltd.",
    buyerContactName: "Marco Rossi",
    buyerEmail: "procurement@meddist.it",
    buyerVatNumber: "IT04928172901",
    shippingAddress: "Via dei Porti 15, 16126 Genoa, Italy",
    orderDate: "2026-08-29",
    deliveryDate: "2026-09-05",
    paymentTerms: "Letter of Credit (LC)",
    paymentStatus: "Paid",
    fulfillmentStatus: "Shipped",
    notes: "Container number MSCU9482012. Shipped via Maersk Intermodal.",
    items: [
      {
        id: 1,
        productName: "Pure Refined Sunflower Cooking Oil",
        sku: "OIL-SUN-5L",
        quantity: 250,
        unitPrice: 105,
        unit: "5L Can (Pack of 4)",
        subtotal: 26250,
      },
    ],
    subtotal: 26250,
    shippingFee: 1200,
    tax: 1575,
    totalAmount: 29025,
  },
  {
    id: "ORD-9795",
    buyerCompany: "Scandia Wholesalers Danica A/S",
    buyerContactName: "Frederik Jensen",
    buyerEmail: "fjensen@scandiawholesalers.dk",
    buyerVatNumber: "DK29184019",
    shippingAddress: "Strandvejen 44, 2100 Copenhagen, Denmark",
    orderDate: "2026-08-20",
    deliveryDate: "2026-08-26",
    paymentTerms: "Net 30",
    paymentStatus: "Paid",
    fulfillmentStatus: "Delivered",
    notes: "Delivered on schedule. Proof of delivery signed by warehouse manager.",
    items: [
      {
        id: 1,
        productName: "Royal Super Kernel Basmati Rice",
        sku: "RIC-BAS-10K",
        quantity: 150,
        unitPrice: 78,
        unit: "10kg Bag",
        subtotal: 11700,
      },
      {
        id: 2,
        productName: "Single-Estate Organic Ceylon Green Tea",
        sku: "TEA-GRN-10K",
        quantity: 60,
        unitPrice: 98,
        unit: "10kg Foil Master Carton",
        subtotal: 5880,
      },
    ],
    subtotal: 17580,
    shippingFee: 520,
    tax: 1050,
    totalAmount: 19150,
  },
];

export const productCategories = [
  "Food & Grocery",
  "Beverages",
  "Agriculture",
  "Clothing & Textile",
  "Packaging & Printing",
  "Kitchen Supplies",
  "Electronics",
  "Machinery & Industrial",
];

export const defaultProductImages = [
  { label: "Cooking Oil 5L", path: "/product/product1.png" },
  { label: "Basmati Rice 10kg", path: "/product/product2.png" },
  { label: "Organic Flour", path: "/product/product3.png" },
  { label: "Red Lentils", path: "/product/product4.png" },
  { label: "Refined Sugar", path: "/product/product5.png" },
  { label: "Ceylon Tea Master", path: "/product/product6.png" },
  { label: "Fresh Vegetables", path: "/vegitable/product1.png" },
];

