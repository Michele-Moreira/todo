import { Badge } from "@/components/ui/badge";

// ─── Props ──────────────────────────────────────────────────────────────────

interface StatsBarProps {
  total: number;
  completed: number;
}

// ─── Component ──────────────────────────────────────────────────────────────

const StatsBar = ({ total, completed }: StatsBarProps) => (
  <div className="mb-4 flex items-center justify-between px-1">
    <div className="flex items-center gap-2">
      <span className="text-sm font-semibold text-gray-300">
        Tarefas criadas
      </span>
      <Badge
        variant="pink"
        className="h-5 min-w-6 rounded-full bg-pink-badge px-2 text-xs font-bold text-pink-base ring-0"
        aria-label={`${total} tarefas criadas`}
      >
        {total}
      </Badge>
    </div>

    <div className="flex items-center gap-2">
      <span className="text-sm font-semibold text-gray-300">
        Concluídas
      </span>
      <Badge
        variant="green"
        className="h-5 rounded-full bg-green-pastel px-2 text-xs font-bold text-green-dark ring-0"
        aria-label={`${completed} de ${total} concluídas`}
      >
        {completed === 0 ? "0" : `${completed} de ${total}`}
      </Badge>
    </div>
  </div>
);

StatsBar.displayName = "StatsBar";

export { StatsBar };
export type { StatsBarProps };
