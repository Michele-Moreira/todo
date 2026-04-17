import { Watch } from "lucide-react";

// ─── Component ──────────────────────────────────────────────────────────────

const TodoHeader = () => (
  <header className="flex flex-col items-center gap-4 pt-4">
    {/* Logo container - white card with soft shadow as in image */}
    <div className="relative flex size-18 items-center justify-center rounded-[22px] bg-white shadow-md ring-1 ring-gray-100">
      <Watch
        size={36}
        strokeWidth={2.2}
        className="text-green-base"
        aria-hidden="true"
      />
      {/* Small check overlay if needed, but Watch icon itself is often enough or we can use CheckSquare */}
    </div>

    <div className="flex flex-col items-center gap-1">
      <h1 className="text-[28px] font-[800] tracking-tight text-gray-400">
        ToDo List
      </h1>
      <p className="sr-only">Organize suas tarefas do dia</p>
    </div>
  </header>
);

TodoHeader.displayName = "TodoHeader";

export { TodoHeader };
