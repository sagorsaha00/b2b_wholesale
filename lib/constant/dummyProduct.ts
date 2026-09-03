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
  CompanyLogo:'/logo/fevicon.svg'
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
