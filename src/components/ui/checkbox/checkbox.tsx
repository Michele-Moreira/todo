import type React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

// ─── Props ──────────────────────────────────────────────────────────────────

interface CheckboxProps extends React.HTMLAttributes<HTMLButtonElement> {
  checked: boolean;
  onCheckedChange: () => void;
  label?: string;
}

// ─── Component ──────────────────────────────────────────────────────────────

const Checkbox = ({
  checked,
  onCheckedChange,
  label,
  className,
  ...props
}: CheckboxProps) => (
  <button
    type="button"
    role="checkbox"
    aria-checked={checked}
    aria-label={label}
    onClick={onCheckedChange}
    className={cn(
      "flex size-5 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-200",
      checked
        ? "border-[--color-green-base] bg-[--color-green-base] shadow-sm"
        : "border-[--color-green-light] bg-[--color-green-pastel] hover:border-[--color-green-base] hover:bg-[--color-green-light]",
      className,
    )}
    {...props}
  >
    {checked && (
      <Check
        size={11}
        strokeWidth={3}
        className="text-white"
        aria-hidden="true"
      />
    )}
  </button>
);

Checkbox.displayName = "Checkbox";

export { Checkbox };
export type { CheckboxProps };
