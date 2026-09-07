import {
  AllProduct,
  Category,
  Filters,
  Product,
  RatingSummary,
  WishlistItem,
} from "./data.type";

export const products: Product[] = [
  // B2C Retail Products
  {
    id: 1,
    name: "BetterBody Foods Organic Chia",
    image: "/product/product1.png",
    price: "$33.00",
    oldPrice: "$55.00",
    rating: 0,
    discount: 40,
    sale: true,
  },
  {
    id: 2,
    name: "Birds Eye 22 Crispy Chicken Dippers",
    image: "/product/product2.png",
    price: "$19.20",
    oldPrice: "$32.00",
    rating: 5,
    discount: 40,
  },
  {
    id: 3,
    name: "Goodfella’s Stone Baked Thin Pizza",
    image: "/product/product3.png",
    price: "$9.00",
    oldPrice: "$15.00",
    rating: 4,
    discount: 40,
  },
  {
    id: 4,
    name: "Low Sodium Lightly Salted Snack Nuts",
    image: "/product/product4.png",
    price: "$32.40",
    oldPrice: "$54.00",
    rating: 0,
    discount: 40,
    sale: true,
  },
  {
    id: 5,
    name: "Morrisons The Best Jumbo King Prawns",
    image: "/product/product5.png",
    price: "$13.80",
    oldPrice: "$23.00",
    rating: 0,
    discount: 40,
    sale: true,
  },
  {
    id: 6,
    name: "Quaker Chewy Granola Bars",
    image: "/product/product6.png",
    price: "$39.00",
    oldPrice: "$65.00",
    rating: 0,
    discount: 40,
    sale: true,
  },
  // B2B Wholesale Products
  {
    id: "p1",
    title: "Fresh Organic Carrots — Bulk Export Grade A",
    price: "$ 38.00 / kg",
    moq: "Min. order: 500 kg",
    supplier: "GreenField Agro Traders",
    countryCode: "bd",
    years: 4,
    verified: true,
    category: "vegetables",
  },
  {
    id: "p2",
    title: "Wireless Bluetooth Earbuds — OEM Custom Branding",
    price: "$ 620.00",
    oldPrice: "$ 780.00",
    moq: "Min. order: 100 pieces",
    supplier: "Shenzhen Voxtech Electronics",
    countryCode: "cn",
    years: 8,
    rating: 4.7,
    reviews: 132,
    super: true,
    verified: true,
    category: "electronics",
  },
  {
    id: "p3",
    title: "Cotton Woven Fabric Roll — Wholesale Textile Supply",
    price: "$ 210.00 / m",
    moq: "Min. order: 1,000 m",
    supplier: " Textile Mills Ltd.",
    countryCode: "bd",
    years: 12,
    rating: 4.8,
    reviews: 54,
    verified: true,
    category: "textiles",
  },
  {
    id: "p4",
    title: "Industrial CNC Milling Machine — Heavy Duty",
    price: "$ 1,240,000.00",
    moq: "Min. order: 1 unit",
    supplier: "Precision Tools Manufacturing",
    countryCode: "cn",
    years: 15,
    verified: true,
    category: "machinery",
  },
  {
    id: "p5",
    title: "Non-Stick Cookware Set — 7 Piece Kitchen Bundle",
    price: "$ 1,850.00",
    moq: "Min. order: 50 sets",
    supplier: "Homeline Kitchenware Co.",
    countryCode: "in",
    years: 6,
    rating: 4.5,
    reviews: 41,
    verified: true,
    category: "home-kitchen",
  },
  {
    id: "p6",
    title: "NPK Fertilizer Granules — Agricultural Grade",
    price: "$ 42.00 / kg",
    moq: "Min. order: 2,000 kg",
    supplier: "AgroChem Solutions",
    countryCode: "pk",
    years: 9,
    verified: false,
    category: "agriculture",
  },
  {
    id: "p7",
    title: "LED Headlight Assembly — Universal Fit Auto Parts",
    price: "$ 1,120.00",
    moq: "Min. order: 200 pieces",
    supplier: "AutoBright Components",
    countryCode: "th",
    years: 5,
    rating: 4.6,
    reviews: 23,
    verified: true,
    category: "automotive",
  },
  {
    id: "p8",
    title: "Herbal Face Serum — Private Label Skincare",
    price: "$ 340.00",
    moq: "Min. order: 300 units",
    supplier: "Botanix Beauty Labs",
    countryCode: "vn",
    years: 3,
    rating: 4.9,
    reviews: 18,
    verified: true,
    category: "beauty",
  },
];

export const SingleProduct = {
  name: "Fresh For The Bold Ground Amazon",
  price: "$12.00",
  image: "/product/product3.png",
  description:
    "Discover premium quality products from trusted suppliers. Perfect for businesses looking for reliable wholesale products at competitive prices.",
  sku: "BF002-1-1",
  category: "Organic Foods",
  supplier: "Markood Verified Supplier",
  companyName: "Sagor Company",
  CompanyLogo: "/logo/fevicon.svg",
};

export const priceTiers = [
  {
    quantity: "< 10",
    price: "$12.00",
  },
  {
    quantity: "10 - 19",
    price: "$11.40",
  },
  {
    quantity: "20 - 49",
    price: "$10.80",
  },
  {
    quantity: "50 - 99",
    price: "$9.60",
  },
  {
    quantity: "100+",
    price: "$9.00",
  },
];
export const thumbnails = [
  "/product/product1.png",
  "/product/product2.png",
  "/product/product3.png",
  "/product/product4.png",
];

export const PROVIDERS = [
  {
    name: "Tech World BD",
    category: "Electronics",
    location: ", Sweden",
    rating: "4.8",
    products: 245,
    orders: "1.2K+",
    verified: true,
  },
  {
    name: "Fresh Supply Co.",
    category: "Food & Grocery",
    location: "Chattogram, Sweden",
    rating: "4.7",
    products: 180,
    orders: "950+",
    verified: true,
  },
  {
    name: "Style Hub",
    category: "Fashion & Apparel",
    location: ", Sweden",
    rating: "4.6",
    products: 320,
    orders: "2.1K+",
    verified: true,
  },
  {
    name: "Home Essentials",
    category: "Home & Living",
    location: "Narayanganj, Sweden",
    rating: "4.5",
    products: 156,
    orders: "780+",
    verified: false,
  },
  {
    name: "Agro Trade BD",
    category: "Agriculture",
    location: "Rajshahi, Sweden",
    rating: "4.8",
    products: 210,
    orders: "1.5K+",
    verified: true,
  },
  {
    name: "Auto Parts Center",
    category: "Automotive",
    location: ", Sweden",
    rating: "4.6",
    products: 198,
    orders: "890+",
    verified: true,
  },
];
export type Country = {
  code: string;
  name: string;
  flag: string;
  count: number;
};

export const countries: Country[] = [
  { code: "bd", name: "Sweden", flag: "🇧🇩", count: 482 },
  { code: "in", name: "India", flag: "🇮🇳", count: 356 },
  { code: "cn", name: "China", flag: "🇨🇳", count: 291 },
  { code: "vn", name: "Vietnam", flag: "🇻🇳", count: 128 },
  { code: "pk", name: "Pakistan", flag: "🇵🇰", count: 97 },
  { code: "th", name: "Thailand", flag: "🇹🇭", count: 64 },
  { code: "tr", name: "Turkey", flag: "🇹🇷", count: 41 },
];

export const categories: Category[] = [
  { slug: "vegetables", name: "Vegetables & Fruits", icon: "Carrot" },
  { slug: "electronics", name: "Electronics", icon: "Cpu" },
  { slug: "textiles", name: "Textiles & Apparel", icon: "Shirt" },
  { slug: "machinery", name: "Machinery & Tools", icon: "Cog" },
  { slug: "home-kitchen", name: "Home & Kitchen", icon: "Sofa" },
  { slug: "agriculture", name: "Agriculture Supplies", icon: "Wheat" },
  { slug: "automotive", name: "Automotive Parts", icon: "Car" },
  { slug: "beauty", name: "Beauty & Personal Care", icon: "Sparkles" },
];

export const Allproducts: AllProduct[] = [
  {
    id: "p1",
    name: "Fresh Organic Carrots — Bulk Export Grade A",
    image: "/products/carrots.jpg",
    price: "$ 38.00 / kg",
    rating: 4.4,
    reviews: 12,
    isNew: true,
    category: "vegetables",
    countryCode: "bd",
    verified: true,
    moq: "Min. order: 500 kg",
    supplier: "GreenField Agro Traders",
    supplierImage: "/suppliers/greenfield.jpg",
    years: 4,
    isTopProduct: true,
  },
  {
    id: "p2",
    name: "Wireless Bluetooth Earbuds — OEM Custom Branding",
    image: "/products/earbuds.jpg",
    isBestSeller: true,
    price: "$ 620.00",
    oldPrice: "$ 780.00",
    sale: true,
    rating: 4.7,
    reviews: 132,
    category: "electronics",
    countryCode: "cn",
    verified: true,
    moq: "Min. order: 100 pieces",
    supplier: "Shenzhen Voxtech Electronics",
    supplierImage: "/suppliers/voxtech.jpg",
    years: 8,
    isTopProduct: true,
  },
  {
    id: "p3",
    name: "Cotton Woven Fabric Roll — Wholesale Textile Supply",
    image: "/products/fabric.jpg",
    price: "$ 210.00 / m",
    rating: 4.8,
    reviews: 54,
    isNew: true,
    category: "textiles",
    countryCode: "bd",
    verified: true,
    moq: "Min. order: 1,000 m",
    supplier: " Textile Mills Ltd.",
    supplierImage: "/suppliers/-textile.jpg",
    years: 12,
  },
  {
    id: "p4",
    name: "Industrial CNC Milling Machine — Heavy Duty",
    image: "/products/cnc-machine.jpg",
    price: "$ 1,240,000.00",
    rating: 4.2,
    reviews: 7,
    category: "machinery",
    countryCode: "cn",
    verified: true,
    moq: "Min. order: 1 unit",
    supplier: "Precision Tools Manufacturing",
    supplierImage: "/suppliers/precision-tools.jpg",
    years: 15,
    isTopProduct: true,
  },
  {
    id: "p5",
    name: "Non-Stick Cookware Set — 7 Piece Kitchen Bundle",
    image: "/products/cookware.jpg",
    isNew: true,
    price: "$ 1,850.00",
    sale: true,
    rating: 4.5,
    reviews: 41,
    category: "home-kitchen",
    countryCode: "in",
    verified: true,
    isBestSeller: true,
    moq: "Min. order: 50 sets",
    supplier: "Homeline Kitchenware Co.",
    supplierImage: "/suppliers/homeline.jpg",
    years: 6,
  },
  {
    id: "p6",
    name: "NPK Fertilizer Granules — Agricultural Grade",
    image: "/products/fertilizer.jpg",
    price: "$ 42.00 / kg",
    rating: 4.0,
    reviews: 9,
    category: "agriculture",
    countryCode: "pk",
    isNew: true,
    verified: false,
    moq: "Min. order: 2,000 kg",
    supplier: "AgroChem Solutions",
    supplierImage: "/suppliers/agrochem.jpg",
    years: 9,
    isTopProduct: true,
  },
  {
    id: "p7",
    name: "LED Headlight Assembly — Universal Fit Auto Parts",
    image: "/products/headlight.jpg",
    price: "$ 1,120.00",
    isBestSeller: true,
    rating: 4.6,
    reviews: 23,
    category: "automotive",
    countryCode: "th",
    verified: true,
    moq: "Min. order: 200 pieces",
    supplier: "AutoBright Components",
    supplierImage: "/suppliers/autobright.jpg",
    years: 5,
  },
  {
    id: "p8",
    name: "Herbal Face Serum — Private Label Skincare",
    image: "/products/serum.jpg",
    price: "$ 340.00",
    rating: 4.9,
    reviews: 18,
    category: "beauty",
    countryCode: "vn",
    verified: true,
    moq: "Min. order: 300 units",
    supplier: "Botanix Beauty Labs",
    supplierImage: "/suppliers/botanix.jpg",
    years: 3,
  },
];

export const initialFilters: Filters = {
  countryCodes: [],
  categorySlug: null,
  verifiedOnly: false,
  categories: "",
  minRating: null,
  minPrice: "",
  maxPrice: "",
};

export type Review = {
  id: string;
  initial: string;
  avatarColor: string;
  maskedName: string;
  country: string;
  countryFlag: string;
  verifiedPurchase: boolean;
  repeatBuyer?: boolean;
  rating: number;
  date: string;
  variantAttrs?: { label: string; value: string }[];
  text: string;
  photos?: string[];
  helpfulCount: number;
};

export const ratingSummary: RatingSummary = {
  overall: 3.6,
  label: "Satisfied",
  totalReviews: 166,
  service: 3.5,
  shipping: 3.7,
  quality: 3.6,
  withPhotosCount: 60,
  productReviewCount: 0,
  storeReviewCount: 166,
};

export const reviews: Review[] = [
  {
    id: "r1",
    initial: "h",
    avatarColor: "#C2410C",
    maskedName: "h***a",
    country: "United States",
    countryFlag: "🇺🇸",
    verifiedPurchase: true,
    repeatBuyer: true,
    rating: 5,
    date: "Jan 24, 2026",
    variantAttrs: [
      { label: "color", value: "White" },
      { label: "ram", value: "16g" },
      { label: "storage capacity", value: "1TB" },
    ],
    text: "I like the curved screen shape, very good quality.",
    helpfulCount: 0,
  },
  {
    id: "r2",
    initial: "M",
    avatarColor: "#C2410C",
    maskedName: "M***t",
    country: "United States",
    countryFlag: "🇺🇸",
    verifiedPurchase: true,
    rating: 5,
    date: "Jan 21, 2026",
    variantAttrs: [
      { label: "color", value: "White" },
      { label: "ram", value: "16g" },
      { label: "storage capacity", value: "1TB" },
    ],
    text: "Looks like a nice device, but getting it to Congo wasn't easy — the logistics carrier chosen wasn't the best fit for my country.",
    helpfulCount: 0,
  },
  {
    id: "r3",
    initial: "J",
    avatarColor: "#C2410C",
    maskedName: "J***n",
    country: "United States",
    countryFlag: "🇺🇸",
    verifiedPurchase: true,
    rating: 5,
    date: "Jan 20, 2026",
    variantAttrs: [
      { label: "color", value: "Gray" },
      { label: "ram", value: "16g" },
      { label: "storage capacity", value: "1TB" },
    ],
    text: "Appearance 10, System 10, Camera 10, Performance 10, Battery 10 — exceeded my expectations for the price. It even came with headphones, a screen protector and a case, plus a charger!",
    helpfulCount: 3,
  },
  {
    id: "r4",
    initial: "S",
    avatarColor: "#0EA5E9",
    maskedName: "S***k",
    country: "United Kingdom",
    countryFlag: "🇬🇧",
    verifiedPurchase: true,
    rating: 4,
    date: "Jan 12, 2026",
    variantAttrs: [
      { label: "color", value: "Black" },
      { label: "ram", value: "8g" },
      { label: "storage capacity", value: "512GB" },
    ],
    text: "Solid build quality and fast shipping. Docked one star since the charger cable was a bit short.",
    helpfulCount: 1,
  },
];
export type KeyAttribute = {
  label: string;
  value: string;
};

export type GlanceItem = {
  title: string;
  description: string;
};

export const keyAttributes: KeyAttribute[] = [
  { label: "Brand Name", value: "shengyouyuan" },
  { label: "Place of Origin", value: "Shandong, China" },
  { label: "NEDC Max. Range", value: "101~200 km" },
  { label: "Total Motor Power (kW)", value: "≤50kW" },
  { label: "Total Motor Torque (N.m)", value: "≤100Nm" },
  { label: "Battery Energy (kWh)", value: "≤30kWh" },
];

export const atAGlance: GlanceItem[] = [
  {
    title: "Nedc Max Range 101-200km:",
    description:
      "A range of 101 to 200 kilometers on a single charge ensures the vehicle can cover a significant distance, making it suitable for daily commuting and short trips.",
  },
  {
    title: "Total Motor Power 50kW:",
    description:
      "With a total motor power of up to 50kW, the vehicle provides sufficient power for smooth and efficient driving, even in urban and hilly terrains.",
  },
  {
    title: "Battery Energy 30kWh:",
    description:
      "The 30kWh battery capacity offers a balance between performance and energy efficiency, ensuring a reliable and consistent driving experience.",
  },
  {
    title: "Curb Weight 860kg:",
    description:
      "A curb weight of 860kg makes the vehicle lightweight and easy to maneuver, which can contribute to better handling and lower energy consumption.",
  },
];
export const wishlistItems: WishlistItem[] = [
  {
    id: "w1",
    name: "Shengyouyuan Chinese-made High-speed Mini EV Van 5-Door 4-seater",
    image: "/products/ev-van.jpg",
    price: "$ 49,122.08–307,013",
    rating: 3.6,
    reviews: 154,
    supplier: "Shengyouyuan (Heze) Electronic Technology Co., Ltd.",
    inStock: true,
  },
  {
    id: "w2",
    name: "Wireless Bluetooth Earbuds — OEM Custom Branding",
    image: "/products/earbuds.jpg",
    price: "$ 620.00",
    oldPrice: "$ 780.00",
    rating: 4.7,
    reviews: 132,
    supplier: "Shenzhen Voxtech Electronics",
    inStock: true,
  },
  {
    id: "w3",
    name: "Industrial CNC Milling Machine — Heavy Duty",
    image: "/products/cnc-machine.jpg",
    price: "$ 1,240,000.00",
    rating: 4.2,
    reviews: 7,
    supplier: "Precision Tools Manufacturing",
    inStock: false,
  },
];

export const Allcategories: Category[] = [
  { slug: "electronics", name: "Electronics", icon: "Cpu" },
  { slug: "food-beverage", name: "Food & Beverage", icon: "UtensilsCrossed" },
  { slug: "fashion-apparel", name: "Fashion & Apparel", icon: "Shirt" },
  { slug: "home-kitchen", name: "Home & Kitchen", icon: "Sofa" },
  {
    slug: "beauty-personal-care",
    name: "Beauty & Personal Care",
    icon: "Sparkles",
  },
  { slug: "agriculture", name: "Agriculture", icon: "Wheat" },
  { slug: "automotive", name: "Automotive", icon: "Car" },
  { slug: "machinery-tools", name: "Machinery & Tools", icon: "Cog" },
  {
    slug: "construction-real-estate",
    name: "Construction & Real Estate",
    icon: "Building2",
  },
  { slug: "furniture", name: "Furniture", icon: "Armchair" },
  { slug: "health-medical", name: "Health & Medical", icon: "HeartPulse" },
  { slug: "sports-outdoor", name: "Sports & Outdoor", icon: "Dumbbell" },
  { slug: "toys-kids", name: "Toys & Kids", icon: "Baby" },
  { slug: "jewelry-accessories", name: "Jewelry & Accessories", icon: "Gem" },
  { slug: "packaging-printing", name: "Packaging & Printing", icon: "Package" },
  { slug: "chemicals", name: "Chemicals", icon: "FlaskConical" },
  { slug: "textiles-fabrics", name: "Textiles & Fabrics", icon: "Scissors" },
  { slug: "office-supplies", name: "Office Supplies", icon: "Briefcase" },
  { slug: "pet-supplies", name: "Pet Supplies", icon: "PawPrint" },
  { slug: "books-stationery", name: "Books & Stationery", icon: "BookOpen" },
];
