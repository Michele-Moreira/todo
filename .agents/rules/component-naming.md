---
trigger: model_decision
description: Component naming conventions and file structure inspired by shadcn/ui patterns
globs: **/*.tsx, **/*.ts, src/components/**/*
---

# Component Naming Conventions (shadcn/ui Pattern)

## File & Folder Structure

- Use **kebab-case** for all component file names: `user-card.tsx`, `primary-button.tsx`
- Each component lives in its own folder under `src/components/ui/` (primitive/base) or `src/components/` (composed/feature)
- The folder name matches the component file name: `src/components/ui/button/button.tsx`
- Always include an `index.ts` barrel export inside the folder

```
src/components/
├── ui/
│   ├── button/
│   │   ├── button.tsx        ← component implementation
│   │   └── index.ts          ← re-exports
│   ├── card/
│   │   ├── card.tsx
│   │   └── index.ts
│   └── input/
│       ├── input.tsx
│       └── index.ts
└── task-card/
    ├── task-card.tsx
    └── index.ts
```

## Component Exports

- Use **named exports**, never default exports
- The main component uses **PascalCase** matching the file's concept

```tsx
// ✅ Correct — named export, PascalCase
export const Button = ({ children, ...props }: ButtonProps) => { ... }

// ❌ Wrong — default export
export default function Button() { ... }
```

## Sub-components (Compound Pattern)

- Namespace sub-components on the parent using dot notation: `Card.Header`, `Card.Content`
- Each sub-component is a named const defined in the same file

```tsx
// card.tsx
const Card = ({ className, ...props }: CardProps) => (
  <div className={cn("rounded-lg border bg-card", className)} {...props} />
)

const CardHeader = ({ className, ...props }: CardHeaderProps) => (
  <div className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
)

const CardContent = ({ className, ...props }: CardContentProps) => (
  <div className={cn("p-6 pt-0", className)} {...props} />
)

export { Card, CardHeader, CardContent }
```

```tsx
// Usage
import { Card, CardHeader, CardContent } from "@/components/ui/card"

<Card>
  <CardHeader>...</CardHeader>
  <CardContent>...</CardContent>
</Card>
```

## Props Interface Naming

- Props interfaces are named `[ComponentName]Props` and defined in the same file
- Extend native HTML element props using `React.ComponentPropsWithoutRef<"element">`
- Use `React.ElementRef` for `ref` typing

```tsx
// ✅ Correct
interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  variant?: "default" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
}

// ❌ Wrong — avoid wrapping in a generic Props object
interface Props {
  variant?: string
}
```

## displayName

- Always set `displayName` on components to aid React DevTools debugging

```tsx
Button.displayName = "Button"
CardHeader.displayName = "CardHeader"
```

## Barrel Export (index.ts)

- `index.ts` re-exports everything from the component file — nothing else

```ts
// src/components/ui/button/index.ts
export { Button } from "./button"
export type { ButtonProps } from "./button"
```

## Path Aliases

- Import components via path aliases, never with relative `../../` chains

```ts
// ✅ Correct
import { Button } from "@/components/ui/button"

// ❌ Wrong
import { Button } from "../../../components/ui/button/button"
```

## Variants with `cva` (class-variance-authority)

- Use `cva` for components that have multiple visual variants
- Define variants inside the same file, exported as `[componentName]Variants`

```tsx
import { cva, type VariantProps } from "class-variance-authority"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        outline: "border border-input bg-background hover:bg-accent",
        ghost: "hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        sm: "h-9 px-3",
        md: "h-10 px-4 py-2",
        lg: "h-11 px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

interface ButtonProps
  extends React.ComponentPropsWithoutRef<"button">,
    VariantProps<typeof buttonVariants> {}

const Button = ({ variant, size, className, ...props }: ButtonProps) => (
  <button className={cn(buttonVariants({ variant, size }), className)} {...props} />
)

export { Button, buttonVariants }
export type { ButtonProps }
```

## Summary Table

| Concern              | Convention                              |
|----------------------|-----------------------------------------|
| File name            | `kebab-case.tsx`                        |
| Component name       | `PascalCase`                            |
| Sub-component name   | `ParentNamePart` (e.g. `CardHeader`)    |
| Props interface      | `ComponentNameProps`                    |
| Folder name          | `kebab-case/`                           |
| Export style         | Named export only                       |
| Barrel file          | `index.ts` re-exporting named exports   |
| Import path          | Via `@/` alias                          |
| Variants helper      | `cva` + `[name]Variants` naming         |
