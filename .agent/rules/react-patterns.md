# AI Agent Directives: React Patterns & Architecture

When writing or refactoring React code in this project, you MUST follow these standards:

1. **File and Folder Naming Standardization:**
   - ALL directories must be in English (e.g., `components`, `hooks`, `utils`, `pages`).
   - ALL React component files must use `PascalCase` with a `.tsx` extension (e.g., `Button.tsx`, `TodoList.tsx`).
   - Non-component files (hooks, utils) must use `camelCase` with a `.ts` extension (e.g., `useTodos.ts`, `formatDate.ts`).

2. **Component Structure & Exports:**
   - ALWAYS use Named Exports for components, never `export default`.
     _Correct:_ `export const MyComponent = () => {}`
     _Incorrect:_ `export default function MyComponent() {}`
   - Start the file with imports grouped: React bindings, absolute imports, then relative imports.

3. **TypeScript Typing:**
   - Always define a `Props` interface right above the component, even if empty initially (e.g., `interface MyComponentProps { ... }`).
   - Do NOT use `React.FC` or `React.FunctionComponent`. Type the props directly in the function arguments: `export const MyComponent = ({ prop1 }: MyComponentProps) => {}`.
