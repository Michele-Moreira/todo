---
trigger: glob
description: Tailwind CSS and UI component best practices for modern web applications
globs: **/*.css, **/*.tsx, **/*.jsx, tailwind.config.js, tailwind.config.ts
---

# Tailwind CSS Best Practices

## Project Specific Execution Rules (UI/UX Mandate)

1. **Strict Tailwind v4 Usage:**
   - ALL styling must be done using standard Tailwind CSS v4 utility classes.
   - NEVER add custom CSS to `.css` files unless absolutely necessary for theme variables, custom fonts, or complete resets.

2. **Dynamic Classes (`clsx` and `tailwind-merge`):**
   - When building components that accept conditional styles (like variations of buttons or a checked/unchecked Todo item), use the `clsx` and `tailwind-merge` pattern.
   - _Example:_ `className={cn('base-classes here', isActive ? 'bg-blue-500' : 'bg-gray-500', className)}`

3. **Premium UI Aesthetics:**
   - You must deliver visually appealing components, avoiding standard barebones looks.
   - Use soft rounded corners (`rounded-xl` or `rounded-2xl`).
   - Add subtle hover effects and transitions (`transition-all duration-200 hover:bg-gray-100`).
   - Ensure proper spacing consistency (`p-4`, `gap-2`) and use shadows to define hierarchy (`shadow-sm`, `shadow-md`).

## Project Setup

- Use proper Tailwind configuration
- Configure theme extension properly
- Set up proper purge configuration
- Use proper plugin integration
- Configure custom spacing and breakpoints
- Set up proper color palette

## Component Styling

- Use utility classes over custom CSS
- Group related utilities with @apply when needed
- Use proper responsive design utilities
- Implement dark mode properly
- Use proper state variants
- Keep component styles consistent

## Layout

- Use Flexbox and Grid utilities effectively
- Implement proper spacing system
- Use container queries when needed
- Implement proper responsive breakpoints
- Use proper padding and margin utilities
- Implement proper alignment utilities

## Typography

- Use proper font size utilities
- Implement proper line height
- Use proper font weight utilities
- Configure custom fonts properly
- Use proper text alignment
- Implement proper text decoration

## Colors

- Use semantic color naming
- Implement proper color contrast
- Use opacity utilities effectively
- Configure custom colors properly
- Use proper gradient utilities
- Implement proper hover states

## Components

- Use shadcn/ui components when available
- Extend components properly
- Keep component variants consistent
- Implement proper animations
- Use proper transition utilities
- Keep accessibility in mind

## Responsive Design

- Use mobile-first approach
- Implement proper breakpoints
- Use container queries effectively
- Handle different screen sizes properly
- Implement proper responsive typography
- Use proper responsive spacing

## Performance

- Use proper purge configuration
- Minimize custom CSS
- Use proper caching strategies
- Implement proper code splitting
- Optimize for production
- Monitor bundle size

## Best Practices

- Follow naming conventions
- Keep styles organized
- Use proper documentation
- Implement proper testing
- Follow accessibility guidelines
- Use proper version control
