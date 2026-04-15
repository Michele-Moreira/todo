# Skill: Scaffold a New UI Component

**Trigger:** When the user asks to "create a new component", "build a UI element", or "scaffold a button/card".

**Action Steps:**

1. **Identify the entity:** Determine the name in English, converting it to PascalCase (e.g., UserCard, PrimaryButton).
2. **Create the file:** Target the `src/components/` directory (create it if it doesn't exist).
3. **Write the code template:**
   - Import necessary React hooks if any.
   - Define `interface [Name]Props { ... }`.
   - Write `export const [Name] = ({ props }: [Name]Props) => { ... }`.
4. **Style it out:** Automatically apply responsive and beautiful Tailwind classes by default. Don't leave it unstyled. Add placeholder content, decent paddings, borders, and flex/grid alignments.
