import { Badge } from "@/components/ui/badge";

// ─── Props ──────────────────────────────────────────────────────────────────

interface StatsBarProps {
  total: number;
  completed: number;
}

// ─── Component ──────────────────────────────────────────────────────────────

const StatsBar = ({ total, completed }: StatsBarProps) => (
  <div className="bg-glass mb-6 flex items-center justify-between rounded-full px-6 py-3 shadow-md lg:px-8">
    <div className="flex items-center gap-3">
      <span className="text-sm font-bold tracking-tight text-gray-400 uppercase">
        Criadas
      </span>
      <Badge
        variant="pink"
        className="bg-primary/10 text-primary shadow-sm h-6 min-w-8 rounded-lg px-2 text-xs font-extrabold ring-0"
        aria-label={`${total} tarefas criadas`}
      >
        {total}
      </Badge>
    </div>

    <div className="h-6 w-px bg-gray-100" />

    <div className="flex items-center gap-3">
      <span className="text-sm font-bold tracking-tight text-gray-400 uppercase">
        Concluídas
      </span>
      <Badge
        variant="green"
        className="bg-green-base/10 text-green-base shadow-sm h-6 rounded-lg px-2 text-xs font-extrabold ring-0"
        aria-label={`${completed} de ${total} concluídas`}
      >
        {completed === 0 ? "0" : `${completed} / ${total}`}
      </Badge>
    </div>
  </div>
);

StatsBar.displayName = "StatsBar";

export { StatsBar };
export type { StatsBarProps };
