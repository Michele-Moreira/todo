import { CheckCircle2 } from "lucide-react";

// ─── Component ──────────────────────────────────────────────────────────────

const TodoHeader = () => (
  <header className="flex flex-col items-center gap-4">
    {/* Logo container with gradient */}
    <div className="relative flex size-20 items-center justify-center rounded-3xl bg-gradient-to-br from-[--color-pink-light] to-[--color-lavender] shadow-[--shadow-md]">
      {/* Inner glow ring */}
      <div className="absolute inset-1.5 rounded-2xl bg-gradient-to-br from-[--color-pink-pastel] to-[--color-lavender] opacity-60" />
      <CheckCircle2
        size={40}
        strokeWidth={1.6}
        className="relative z-10 text-[--color-pink-dark]"
        aria-hidden="true"
      />
    </div>

    <div className="flex flex-col items-center gap-1">
      <h1 className="text-3xl font-bold tracking-tight text-[--color-gray-400]">
        ToDo List
      </h1>
      <p className="text-sm font-medium text-[--color-gray-300]">
        Organize suas tarefas do dia
      </p>
    </div>
  </header>
);

TodoHeader.displayName = "TodoHeader";

export { TodoHeader };
