# AI Agent Directives: Clean Code & Architecture

When writing, refactoring, or generating code in this repository, you MUST adhere strictly to the following Clean Code requirements:

1. **Early Return (Bouncer Pattern):**
   - Eliminate `else` blocks whenever possible.
   - Handle edge cases, errors, and invalid states at the very beginning of the function and return immediately.
   - Keep the "happy path" flat and un-nested at the bottom of the function.

2. **Descriptive & Semantic Naming:**
   - NEVER use abbreviations (e.g., use `userCount` instead of `usrCnt`, `event` instead of `e`).
   - Function names must describe exactly what they do, usually starting with a verb (e.g., `calculateTotal`, `fetchUserData`).
   - Boolean variables must sound like asking a true/false question (e.g., `isLoading`, `hasError`, `canSubmit`).

3. **Single Responsibility (SRP):**
   - Keep React components and TS functions extremely small and focused on a single task.
   - If a component has complex internal logic, extract that logic into a custom hook (e.g., `useAuthentication`).
   - Extract raw data formatting/calculating into pure helper functions outside the component.

4. **Zero Magic Numbers and Strings:**
   - Instead of using raw numbers (like `3000` or `7`) or random strings inline, extract them into clearly named constant variables at the top of the file or in a constants file.

5. **Clarity over Cleverness:**
   - Do NOT use deeply nested ternary operators (`condition ? a : b ? c : d`). Use `if` statements or extract into a separate function if it gets slightly complex.
   - Prioritize readable code that a junior developer could understand easily over writing the shortest one-liner possible.

6. **Strict TypeScript:**
   - Never use the `any` type. Always define proper Interfaces or Types for props, state, and API payloads.
