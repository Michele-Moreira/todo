# Skill: Implement a To-Do Feature

**Trigger:** When the user asks to "implement the add todo feature", "make the delete work", or any CRUD-like instruction.

**Action Steps:**

1. **Locate the State Hook:** Find where the global state actually lives (e.g., look for a `useTodos` hook or the state inside `App.tsx`).
2. **Write the immutable logic:** Create the function handler (e.g., `const handleAddTodo = () => { ... }`) using the React array/object mapping rules of strict immutability.
3. **Plumb the Props:** Pass the new handler down to the appropriate UI component through its Props interface.
4. **Bind the UI:** Ensure the `onClick` or `onSubmit` events in the target component successfully fire the new handler without breaking forms.
