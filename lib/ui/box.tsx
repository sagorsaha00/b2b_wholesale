import { Check } from "lucide-react";

export function AccountType({
  active,
  title,
  description,
  onClick,
}: {
  active: boolean;
  title: string;
  description: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative cursor-pointer rounded-xl border p-4 text-left transition-all duration-200 ${
        active
          ? "border-[#2563EB] bg-blue-50 ring-2 ring-blue-100"
          : "border-slate-200 bg-white hover:border-slate-300"
      }`}
    >
      {active && (
        <span className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-[#2563EB] text-white">
          <Check size={12} />
        </span>
      )}

      <p
        className={`pr-5 text-sm font-semibold ${
          active ? "text-[#2563EB]" : "text-slate-700"
        }`}
      >
        {title}
      </p>

      <p className="mt-1 text-xs text-slate-400">{description}</p>
    </button>
  );
}

export function Benefit({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/15">
        <Check size={14} className="text-white" />
      </div>

      <span className="text-sm text-blue-50">{text}</span>
    </div>
  );
}
