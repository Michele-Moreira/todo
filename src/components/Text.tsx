import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility for merging tailwind classes safely (combines clsx and tailwind-merge)
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

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
      className={cn("text-gray-900 dark:text-gray-100", className)}
      {...props}
    >
      {children}
    </Component>
  );
};
