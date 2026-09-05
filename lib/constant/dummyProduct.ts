import { Product } from "./product.type";
export const products: Product[] = [
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
    location: "Dhaka, Bangladesh",
    rating: "4.8",
    products: 245,
    orders: "1.2K+",
    verified: true,
  },
  {
    name: "Fresh Supply Co.",
    category: "Food & Grocery",
    location: "Chattogram, Bangladesh",
    rating: "4.7",
    products: 180,
    orders: "950+",
    verified: true,
  },
  {
    name: "Style Hub",
    category: "Fashion & Apparel",
    location: "Dhaka, Bangladesh",
    rating: "4.6",
    products: 320,
    orders: "2.1K+",
    verified: true,
  },
  {
    name: "Home Essentials",
    category: "Home & Living",
    location: "Narayanganj, Bangladesh",
    rating: "4.5",
    products: 156,
    orders: "780+",
    verified: false,
  },
  {
    name: "Agro Trade BD",
    category: "Agriculture",
    location: "Rajshahi, Bangladesh",
    rating: "4.8",
    products: 210,
    orders: "1.5K+",
    verified: true,
  },
  {
    name: "Auto Parts Center",
    category: "Automotive",
    location: "Dhaka, Bangladesh",
    rating: "4.6",
    products: 198,
    orders: "890+",
    verified: true,
  },
];
