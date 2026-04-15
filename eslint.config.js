import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import react from "eslint-plugin-react";
import importPlugin from "eslint-plugin-import";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist", "node_modules"] },

  // ── TypeScript-ESLint recommended (injects parser + plugin automatically) ─
  ...tseslint.configs.recommended,

  // ── Main config ──────────────────────────────────────────────────────────
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    settings: {
      react: { version: "detect" },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      react,
      import: importPlugin,
    },
    rules: {
      // ── Base ─────────────────────────────────────────────────────────────
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,

      // ── Clean Code: Early Return, no nesting, no magic numbers ───────────
      "no-else-return": "error",
      "no-nested-ternary": "error",
      "no-magic-numbers": ["warn", { ignore: [0, 1, -1], ignoreArrayIndexes: true }],

      // ── TypeScript: strict typing, naming conventions ─────────────────────
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/no-non-null-assertion": "warn",
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports", fixStyle: "inline-type-imports" },
      ],
      "@typescript-eslint/naming-convention": [
        "error",
        // PascalCase for types and interfaces
        { selector: "typeLike", format: ["PascalCase"] },
      ],

      // ── React: JSX best practices ─────────────────────────────────────────
      "react/jsx-key": "error",
      "react/self-closing-comp": "error",
      "react/no-unknown-property": "error",

      // ── React Refresh ─────────────────────────────────────────────────────
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    },
  },

  // ── Named-exports enforcement (components only) ───────────────────────────
  // Applied only to component files, NOT to Vite/config/entry-point files.
  {
    files: ["src/components/**/*.{ts,tsx}", "src/hooks/**/*.{ts,tsx}", "src/lib/**/*.{ts,tsx}"],
    plugins: {
      import: importPlugin,
    },
    rules: {
      // Component naming: named exports only (shadcn/ui pattern)
      "import/no-default-export": "error",
    },
  },
);
