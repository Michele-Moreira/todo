import { Badge } from "@/components/ui/badge";

// ─── Props ──────────────────────────────────────────────────────────────────

interface StatsBarProps {
  total: number;
  completed: number;
}

// ─── Component ──────────────────────────────────────────────────────────────

const StatsBar = ({ total, completed }: StatsBarProps) => (
  <div className="mb-5 flex items-center justify-between rounded-2xl bg-[--color-white] px-4 py-3 shadow-[--shadow-card]">
    <div className="flex items-center gap-2">
      <span className="text-sm font-semibold text-[--color-pink-base]">
        Tarefas criadas
      </span>
      <Badge
        variant="pink"
        aria-label={`${total} tarefa${total !== 1 ? "s" : ""} criada${total !== 1 ? "s" : ""}`}
      >
        {total}
      </Badge>
    </div>

    <div className="h-4 w-px bg-[--color-gray-100]" />

    <div className="flex items-center gap-2">
      <span className="text-sm font-semibold text-[--color-green-dark]">
        Concluídas
      </span>
      <Badge
        variant="green"
        aria-label={`${completed} de ${total} concluída${completed !== 1 ? "s" : ""}`}
      >
        {completed} de {total}
      </Badge>
    </div>
  </div>
);

StatsBar.displayName = "StatsBar";

export { StatsBar };
export type { StatsBarProps };
