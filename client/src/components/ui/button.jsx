import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = {
  variant: {
    default: "bg-[#143D2B] text-white hover:bg-[#0B2A1D] shadow-sm",
    primary: "bg-[#9c6846] text-white hover:bg-[#b07752] shadow-sm",
    accent: "bg-[#D99143] text-white hover:bg-[#c98336] shadow-sm",
    outline: "border border-current bg-transparent hover:bg-[#143D2B]/10",
    ghost: "bg-transparent hover:bg-black/5 dark:hover:bg-white/10",
    link: "text-[#143D2B] underline-offset-4 hover:underline",
  },
  size: {
    default: "h-11 px-6 py-2.5 text-sm font-medium rounded-full",
    sm: "h-9 px-4 text-xs font-semibold rounded-full",
    lg: "h-13 px-8 text-base font-semibold rounded-full",
    icon: "h-10 w-10 p-0 rounded-full flex items-center justify-center",
  },
};

const Button = React.forwardRef(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const variantClass = buttonVariants.variant[variant] || buttonVariants.variant.default;
    const sizeClass = buttonVariants.size[size] || buttonVariants.size.default;

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2.5 whitespace-nowrap transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
          variantClass,
          sizeClass,
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
