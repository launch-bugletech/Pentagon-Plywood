import * as React from "react";
import { cn } from "@/lib/utils";

const badgeVariants = {
  default: "bg-[#143D2B] text-white",
  secondary: "bg-[#F7F3EC] text-[#14211a] border border-[#CAD4CC]",
  outline: "border border-current text-current bg-transparent",
  accent: "bg-[#D99143] text-white",
  pill: "border border-white/40 bg-white/10 text-white rounded-full px-3.5 py-1 text-[10px] tracking-wider uppercase font-semibold",
};

function Badge({ className, variant = "default", ...props }) {
  const variantClass = badgeVariants[variant] || badgeVariants.default;
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-colors focus:outline-hidden",
        variantClass,
        className
      )}
      {...props}
    />
  );
}

export { Badge };
