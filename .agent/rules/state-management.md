# AI Agent Directives: State Management

This application relies on predictable states for To-Do management. Follow these rules:

1. **Separation of Concerns (Custom Hooks):**
   - NEVER place complex business logic, data fetching, or heavy state manipulation directly inside a visual `.tsx` component.
   - ALWAYS extract the logic into a custom hook (e.g., `useTodos()`, `useFormState()`). Let the component handle only the layout and Tailwind classes.

2. **State Mutability:**
   - Treat all state in React as deeply immutable.
   - When updating lists (like a To-Do array), make sure to return a brand new array reference. Example: `setTodos(prev => [...prev, newItem])`.
   - When modifying an object in state, copy it correctly. Example: `setTodo(prev => ({ ...prev, completed: true }))`.

3. **Global vs Local State:**
   - Form inputs (`value`, `onChange`) should remain local to their specific component.
   - Core data (like the To-Do list itself) should be elevated and eventually moved to Context or a state management library (like Zustand) if drilling props exceeds 2 levels.
