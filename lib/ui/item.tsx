import Link from "next/link";
import { ArrowRight } from "lucide-react";
export function MegaMenuItem({
  icon,
  title,
  description,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="
        group/item
        rounded-xl
        border
        border-gray-100
        p-4
        transition
        hover:border-blue-200
        hover:bg-blue-50
      "
    >
      <div
        className="
          mb-3
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-lg
          bg-blue-50
          text-blue-600
          transition
          group-hover/item:bg-blue-600
          group-hover/item:text-white
        "
      >
        {icon}
      </div>

      <h3 className="text-sm font-bold text-gray-900">{title}</h3>

      <p className="mt-1 text-xs text-gray-500">{description}</p>
    </Link>
  );
}
export function DealItem({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="
        group/deal
        rounded-xl
        border
        border-gray-100
        p-5
        transition
        hover:border-yellow-300
        hover:bg-yellow-50
      "
    >
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-bold text-gray-900">{title}</h3>

        <ArrowRight
          className="
            h-4
            w-4
            text-gray-400
            transition
            group-hover/deal:translate-x-1
            group-hover/deal:text-yellow-600
          "
        />
      </div>

      <p className="mt-2 text-xs text-gray-500">{description}</p>
    </Link>
  );
}
