import type React from "react";
import { cn } from "@/lib/utils";

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  children: React.ReactNode;
}

export const Text = ({
  as: Component = "span",
  className,
  children,
  ...props
}: TextProps) => {
  return (
    <Component
      className={cn("text-[--color-gray-400]", className)}
      {...props}
    >
      {children}
    </Component>
  );
};

Text.displayName = "Text";
