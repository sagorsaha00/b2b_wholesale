import { atAGlance, keyAttributes } from "@/lib/constant/dummyData";
import { Info } from "lucide-react";

export default function ProductSpecs() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      {/* Key attributes */}
      <h2 className="text-lg font-black text-[#0F172A] sm:text-xl">
        Key attributes
      </h2>

      <div className="mt-4 grid grid-cols-1 gap-x-8 gap-y-5 rounded-xl bg-gray-50 p-5 sm:grid-cols-2 sm:p-6 lg:grid-cols-3">
        {keyAttributes.map((attr) => (
          <div key={attr.label}>
            <p className="text-xs text-gray-400">{attr.label}</p>
            <p className="mt-1 text-sm font-bold text-[#0F172A]">
              {attr.value}
            </p>
          </div>
        ))}
      </div>

      {/* At a glance */}
      <div className="mt-8">
        <h3 className="flex items-center gap-2 text-base font-black text-[#0F172A]">
          At a glance
          <Info size={15} className="text-gray-400" />
        </h3>

        <ul className="mt-4 space-y-3">
          {atAGlance.map((item) => (
            <li
              key={item.title}
              className="flex gap-2 text-sm leading-6 text-gray-600"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2563EB]" />
              <span>
                <span className="font-bold text-[#0F172A]">{item.title}</span>{" "}
                {item.description}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-xl bg-[#FFF3EC] p-4 sm:p-5">
        <p className="flex items-center gap-2 text-sm font-semibold text-[#C2410C]">
          ✦ AI mode helps with further analysis about this product
        </p>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            className="rounded-full border border-[#C2410C]/30 bg-white px-4 py-2 text-xs font-bold text-[#C2410C] transition hover:bg-[#FFF3EC]"
          >
            Calculate the cost and margin →
          </button>
          <button
            type="button"
            className="rounded-full border border-[#C2410C]/30 bg-white px-4 py-2 text-xs font-bold text-[#C2410C] transition hover:bg-[#FFF3EC]"
          >
            Supplier vetting →
          </button>
        </div>
      </div>
    </section>
  );
}
