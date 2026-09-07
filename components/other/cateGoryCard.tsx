import Link from "next/link";
import {
  Cpu,
  UtensilsCrossed,
  Shirt,
  Sofa,
  Sparkles,
  Wheat,
  Car,
  Cog,
  Building2,
  Armchair,
  HeartPulse,
  Dumbbell,
  Baby,
  Gem,
  Package,
  FlaskConical,
  Scissors,
  Briefcase,
  PawPrint,
  BookOpen,
  type LucideIcon,
} from "lucide-react";
import { Category } from "@/lib/constant/data.type";

const iconMap: Record<string, LucideIcon> = {
  Cpu,
  UtensilsCrossed,
  Shirt,
  Sofa,
  Sparkles,
  Wheat,
  Car,
  Cog,
  Building2,
  Armchair,
  HeartPulse,
  Dumbbell,
  Baby,
  Gem,
  Package,
  FlaskConical,
  Scissors,
  Briefcase,
  PawPrint,
  BookOpen,
};

export default function CategoryCard({ category }: { category: Category }) {
  const Icon = iconMap[category.icon] ?? Package;

  return (
    <Link
      href={`/categories/${category.slug}`}
      className="group flex flex-col items-center gap-3 rounded-xl border border-transparent p-4 text-center transition hover:-translate-y-0.5 hover:border-gray-100 hover:shadow-md"
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EFF6FF] transition-colors group-hover:bg-[#2563EB]">
        <Icon
          size={24}
          className="text-[#2563EB] transition-colors group-hover:text-white"
        />
      </span>
      <span className="text-xs font-semibold leading-snug text-[#0F172A] sm:text-sm">
        {category.name}
      </span>
    </Link>
  );
}
