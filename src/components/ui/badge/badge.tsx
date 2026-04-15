import type React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// ─── Variants ───────────────────────────────────────────────────────────────

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full px-2.5 py-0.5 text-xs font-bold transition-colors",
  {
    variants: {
      variant: {
        green:
          "bg-[--color-green-pastel] text-[--color-green-dark] ring-1 ring-[--color-green-light]",
        pink: "bg-[--color-pink-badge] text-[--color-pink-dark] ring-1 ring-[--color-pink-light]",
      },
    },
    defaultVariants: {
      variant: "pink",
    },
  },
);

// ─── Props ──────────────────────────────────────────────────────────────────

interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

// ─── Component ──────────────────────────────────────────────────────────────

const Badge = ({ variant, className, children, ...props }: BadgeProps) => (
  <span className={cn(badgeVariants({ variant }), className)} {...props}>
    {children}
  </span>
);

Badge.displayName = "Badge";

export { Badge, badgeVariants };
export type { BadgeProps };
