import { useState, useRef, useEffect } from "react";
import { Trash2, Pencil, Check, X } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import type { Task } from "@/types/task";

// ─── Props ──────────────────────────────────────────────────────────────────

interface TaskCardProps {
  task: Task;
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
  onEdit: (id: string, title: string) => void;
}

// ─── Component ──────────────────────────────────────────────────────────────

const TaskCard = ({ task, onToggle, onRemove, onEdit }: TaskCardProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(task.title);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing) {
      inputRef.current?.focus();
    }
  }, [isEditing]);

  const handleConfirm = () => {
    if (editValue.trim() && editValue !== task.title) {
      onEdit(task.id, editValue);
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditValue(task.title);
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleConfirm();
    if (e.key === "Escape") handleCancel();
  };

  return (
    <div
      className={cn(
        "bg-glass group flex items-center gap-4 rounded-[24px] px-5 py-4 shadow-sm transition-all duration-300",
        isEditing
          ? "ring-2 ring-primary bg-white/90 shadow-md"
          : "hover:shadow-md hover:scale-[1.01] hover:bg-white/80",
      )}
    >
      {!isEditing && (
        <Checkbox
          checked={task.isCompleted}
          onCheckedChange={() => onToggle(task.id)}
          label={`Marcar "${task.title}" como ${task.isCompleted ? "pendente" : "concluída"}`}
        />
      )}

      {isEditing ? (
        <div className="flex flex-1 items-center gap-2">
          <input
            ref={inputRef}
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 border-b-2 border-primary bg-transparent py-1 text-base font-semibold text-gray-400 outline-none placeholder:text-gray-300"
          />
          <div className="flex items-center gap-2">
            <button
              onClick={handleCancel}
              className="flex size-9 items-center justify-center rounded-xl bg-accent/10 text-accent hover:bg-accent hover:text-white transition-colors"
              aria-label="Cancelar edição"
            >
              <X size={18} strokeWidth={2.5} />
            </button>
            <button
              onClick={handleConfirm}
              className="flex size-9 items-center justify-center rounded-xl bg-primary text-white shadow-md transition-transform hover:scale-105"
              aria-label="Confirmar edição"
            >
              <Check size={18} strokeWidth={3} />
            </button>
          </div>
        </div>
      ) : (
        <>
          <span
            className={cn(
              "flex-1 text-base font-semibold transition-all duration-300",
              task.isCompleted
                ? "text-gray-300 line-through decoration-gray-300/50 opacity-50"
                : "text-gray-400",
            )}
          >
            {task.title}
          </span>

          <div className="flex items-center gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 translate-x-4">
            <button
              type="button"
              aria-label={`Remover tarefa "${task.title}"`}
              onClick={() => onRemove(task.id)}
              className="flex size-9 items-center justify-center rounded-xl text-gray-300 hover:bg-accent/10 hover:text-accent transition-colors"
            >
              <Trash2 size={18} />
            </button>
            <button
              type="button"
              aria-label={`Editar tarefa "${task.title}"`}
              onClick={() => setIsEditing(true)}
              className="flex size-9 items-center justify-center rounded-xl text-gray-300 hover:bg-primary/10 hover:text-primary transition-colors"
            >
              <Pencil size={18} />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

TaskCard.displayName = "TaskCard";

export { TaskCard };
export type { TaskCardProps };
