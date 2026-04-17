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
        "group flex items-center gap-3 rounded-[20px] bg-white px-4 py-3.5 shadow-card transition-all duration-200",
        isEditing ? "bg-white shadow-md" : "hover:shadow-sm",
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
            className="flex-1 border-b-2 border-pink-base bg-transparent py-0.5 text-sm font-medium text-gray-400 outline-none"
          />
          <div className="flex items-center gap-1">
            <button
              onClick={handleCancel}
              className="flex size-7 items-center justify-center rounded-lg bg-pink-pastel text-pink-base hover:bg-pink-light"
              aria-label="Cancelar edição"
            >
              <X size={14} strokeWidth={2.5} />
            </button>
            <button
              onClick={handleConfirm}
              className="flex size-7 items-center justify-center rounded-lg bg-green-base text-white hover:opacity-90"
              aria-label="Confirmar edição"
            >
              <Check size={14} strokeWidth={3} />
            </button>
          </div>
        </div>
      ) : (
        <>
          <span
            className={cn(
              "flex-1 text-sm font-medium transition-all duration-200",
              task.isCompleted
                ? "text-gray-300 line-through decoration-gray-300 opacity-70"
                : "text-gray-400",
            )}
          >
            {task.title}
          </span>

          <div className="flex items-center gap-1 opacity-0 transition-opacity group-hover:opacity-100">
            <button
              type="button"
              aria-label={`Remover tarefa "${task.title}"`}
              onClick={() => onRemove(task.id)}
              className="flex size-7 items-center justify-center rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-400"
            >
              <Trash2 size={15} />
            </button>
            <button
              type="button"
              aria-label={`Editar tarefa "${task.title}"`}
              onClick={() => setIsEditing(true)}
              className="flex size-7 items-center justify-center rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-400"
            >
              <Pencil size={15} />
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
