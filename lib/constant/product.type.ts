export type Product = {
  id: number;
  name: string;
  image: string;
  price: string;
  oldPrice?: string;
  rating: number;
  discount?: number;
  sale?: boolean;
};

export type MarketplaceItem = {
  title: string;
  description: string;
  icon: React.ElementType;
  href: string;
};

export type MarketplaceSection = {
  title: string;
  description: string;
  icon: React.ElementType;
  type: "blue" | "yellow";
  items: MarketplaceItem[];
};
