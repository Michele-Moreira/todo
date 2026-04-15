---
trigger: model_decision
description: ESLint configuration standards derived from project conventions (clean-code, react-patterns, typescript, component-naming)
globs: eslint.config.js, eslint.config.ts, .eslintrc.*
---

# ESLint Rules — Project Standards

This document defines the canonical ESLint rules for this project.
Each rule is directly derived from an established project convention.

## Required Plugins

Install these plugins — they enforce what our rules describe:

```bash
pnpm add -D \
  eslint-plugin-react \
  eslint-plugin-react-hooks \
  eslint-plugin-react-refresh \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser \
  eslint-plugin-import \
  eslint-plugin-unicorn
```

## Rule Map — Convention → ESLint Rule

### 🧹 Clean Code (`clean-code.md`)

| Convention | Rule |
|---|---|
| No `else` after `return` (Early Return) | `no-else-return: ["error"]` |
| No nested ternaries | `no-nested-ternary: ["error"]` |
| No magic numbers | `no-magic-numbers: ["warn", { ignore: [0, 1, -1] }]` |
| No abbreviations | `unicorn/prevent-abbreviations: ["error"]` |
| Boolean names (`isLoading`, `hasError`) | `@typescript-eslint/naming-convention` (see config) |
| No `any` type | `@typescript-eslint/no-explicit-any: ["error"]` |
| No unused vars | `@typescript-eslint/no-unused-vars: ["error"]` |

### ⚛️ React Patterns (`react-patterns.md` + `react.md`)

| Convention | Rule |
|---|---|
| No `export default` for components | `import/no-default-export: ["error"]` |
| Rules of Hooks | `react-hooks/rules-of-hooks: ["error"]` |
| Exhaustive deps in `useEffect` | `react-hooks/exhaustive-deps: ["warn"]` |
| Key props in lists | `react/jsx-key: ["error"]` |
| No `React.FC` | `@typescript-eslint/ban-types` (custom) |
| Self-closing tags | `react/self-closing-comp: ["error"]` |
| No unknown DOM props | `react/no-unknown-property: ["error"]` |

### 🏷️ Component Naming (`component-naming.md`)

| Convention | Rule |
|---|---|
| PascalCase for components | `@typescript-eslint/naming-convention` |
| Named exports only | `import/no-default-export: ["error"]` |
| Import via `@/` alias | `no-restricted-imports` (see config) |

### 🔷 TypeScript (`typescript.md`)

| Convention | Rule |
|---|---|
| No `any` | `@typescript-eslint/no-explicit-any: ["error"]` |
| Strict null checks enforced | Via `tsconfig` `strict: true` |
| No non-null assertions | `@typescript-eslint/no-non-null-assertion: ["warn"]` |
| Consistent type imports | `@typescript-eslint/consistent-type-imports: ["error"]` |
| No unused vars | `@typescript-eslint/no-unused-vars: ["error"]` |

## Canonical `eslint.config.js`

When modifying or generating the project's ESLint config, use this as the reference:

```js
import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import react from "eslint-plugin-react";
import tseslint from "typescript-eslint";
import importPlugin from "eslint-plugin-import";

export default tseslint.config(
  { ignores: ["dist", "node_modules"] },
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      react,
      import: importPlugin,
    },
    rules: {
      // ── Base ─────────────────────────────────────────────
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommended[0]?.rules,
      ...reactHooks.configs.recommended.rules,

      // ── Clean Code ────────────────────────────────────────
      "no-else-return": "error",
      "no-nested-ternary": "error",
      "no-magic-numbers": ["warn", { ignore: [0, 1, -1], ignoreArrayIndexes: true }],

      // ── TypeScript ────────────────────────────────────────
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/no-non-null-assertion": "warn",
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports", fixStyle: "inline-type-imports" },
      ],
      "@typescript-eslint/naming-convention": [
        "error",
        { selector: "typeLike", format: ["PascalCase"] },
        {
          selector: "variable",
          types: ["boolean"],
          format: ["PascalCase"],
          prefix: ["is", "has", "can", "should", "will", "did"],
        },
      ],

      // ── React ─────────────────────────────────────────────
      "react/jsx-key": "error",
      "react/self-closing-comp": "error",
      "react/no-unknown-property": "error",

      // ── Imports & Exports ─────────────────────────────────
      "import/no-default-export": "error",

      // ── React Refresh ─────────────────────────────────────
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    },
  },
);
```

## Exceptions

These files are **exempt** from `import/no-default-export` because they require a default export by convention:

- `vite.config.ts`
- `tailwind.config.ts`
- Route files (e.g., `pages/*.tsx` if using file-based routing)

Add an override block for them if needed:

```js
{
  files: ["vite.config.ts", "tailwind.config.ts"],
  rules: {
    "import/no-default-export": "off",
  },
}
```
