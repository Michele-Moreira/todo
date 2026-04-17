import { Watch } from "lucide-react";

// ─── Component ──────────────────────────────────────────────────────────────

const TodoHeader = () => (
  <header className="flex flex-col items-center gap-6 pt-4">
    {/* Logo container - Glassmorphic with glow */}
    <div className="group relative flex size-20 items-center justify-center rounded-[28px] bg-white/80 shadow-lg ring-1 ring-white/50 backdrop-blur-md transition-all duration-300 hover:shadow-glow hover:scale-110">
      <div className="absolute inset-0 animate-pulse rounded-[28px] bg-primary/20 blur-xl group-hover:bg-primary/40" />
      <Watch
        size={40}
        strokeWidth={2.2}
        className="relative z-10 text-primary transition-colors group-hover:text-secondary"
        aria-hidden="true"
      />
    </div>

    <div className="flex flex-col items-center gap-2">
      <h1 className="text-gradient text-4xl font-extrabold tracking-tight">
        ToDo List
      </h1>
      <p className="sr-only">Organize suas tarefas do dia</p>
    </div>
  </header>
);

TodoHeader.displayName = "TodoHeader";

export { TodoHeader };
