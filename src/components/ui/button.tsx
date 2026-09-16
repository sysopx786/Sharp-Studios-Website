import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium tracking-wide transition-[transform,background-color,color,border-color,opacity] duration-150 ease-out active:not-disabled:scale-[0.96] disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-oxblood",
  {
    variants: {
      variant: {
        primary: "bg-oxblood text-paper hover:bg-oxblood-dark",
        ink: "bg-ink text-paper hover:bg-ink-2",
        ghost:
          "border border-cream/35 bg-transparent text-paper hover:border-cream hover:bg-paper/8",
        paper: "bg-paper text-ink hover:bg-cream",
        line: "border border-ink/15 bg-transparent text-ink hover:bg-ink/5",
        call: "bg-[#22c55e] text-white hover:bg-[#16a34a]",
      },
      size: {
        sm: "h-10 px-4 text-sm rounded-md",
        md: "h-12 px-5 text-[0.95rem] rounded-md",
        lg: "h-14 px-6 text-base rounded-lg",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export function Button({
  className,
  variant,
  size,
  asChild,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
