import { Trash2 } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import type { Task } from "@/types/task";

// ─── Props ──────────────────────────────────────────────────────────────────

interface TaskCardProps {
  task: Task;
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
}

// ─── Component ──────────────────────────────────────────────────────────────

const TaskCard = ({ task, onToggle, onRemove }: TaskCardProps) => (
  <div
    className={cn(
      "flex items-center gap-3 rounded-2xl px-4 py-3.5 shadow-[--shadow-card] transition-all duration-200",
      task.isCompleted
        ? "bg-[--color-green-pastel]/60"
        : "bg-[--color-white] hover:shadow-[--shadow-sm]",
    )}
  >
    <Checkbox
      checked={task.isCompleted}
      onCheckedChange={() => onToggle(task.id)}
      label={`Marcar "${task.title}" como ${task.isCompleted ? "pendente" : "concluída"}`}
    />

    <span
      className={cn(
        "flex-1 text-sm font-medium transition-all duration-200",
        task.isCompleted
          ? "text-[--color-green-dark] line-through opacity-60"
          : "text-[--color-gray-400]",
      )}
    >
      {task.title}
    </span>

    <button
      type="button"
      aria-label={`Deletar tarefa "${task.title}"`}
      onClick={() => onRemove(task.id)}
      className="flex size-7 items-center justify-center rounded-xl text-[--color-gray-300] transition-all duration-150 hover:bg-[--color-pink-pastel] hover:text-[--color-pink-dark]"
    >
      <Trash2 size={15} aria-hidden="true" />
    </button>
  </div>
);

TaskCard.displayName = "TaskCard";

export { TaskCard };
export type { TaskCardProps };
