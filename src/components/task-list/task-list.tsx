import { useState, useRef, useEffect } from "react";
import type React from "react";
import { ClipboardList, Plus } from "lucide-react";
import { TaskCard } from "@/components/task-card";
import type { Task } from "@/types/task";

// ─── Props ──────────────────────────────────────────────────────────────────

interface TaskListProps {
  tasks: Task[];
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
  onEdit: (id: string, title: string) => void;
  onAdd: (title: string) => void;
}

// ─── Empty State ─────────────────────────────────────────────────────────────

const EmptyState = () => (
  <div className="bg-glass flex flex-col items-center gap-6 rounded-[32px] py-16 text-center shadow-md">
    <div className="flex size-24 items-center justify-center rounded-full bg-primary/10 shadow-glow">
      <ClipboardList
        size={48}
        strokeWidth={1.2}
        className="text-primary animate-pulse"
        aria-hidden="true"
      />
    </div>
    <div className="flex flex-col gap-2">
      <p className="text-xl font-bold tracking-tight text-gray-400">
        Tudo limpo por aqui!
      </p>
      <p className="max-w-[240px] text-sm font-medium text-gray-300">
        Sua lista está vazia. Que tal adicionar algo novo?
      </p>
    </div>
  </div>
);

// ─── Inline Add Input ────────────────────────────────────────────────────────

interface AddTaskInlineProps {
  onConfirm: (title: string) => void;
  onCancel: () => void;
}

const AddTaskInline = ({ onConfirm, onCancel }: AddTaskInlineProps) => {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onConfirm(value);
    } else if (e.key === "Escape") {
      onCancel();
    }
  };

  return (
    <div className="bg-glass flex items-center gap-4 rounded-[20px] p-1.5 pr-4 shadow-lg ring-2 ring-primary/20 transition-all duration-300 focus-within:ring-primary focus-within:shadow-glow">
      <div className="flex size-11 shrink-0 items-center justify-center rounded-[14px] bg-primary text-white shadow-md">
        <Plus size={20} strokeWidth={2.5} />
      </div>
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        onBlur={() => onConfirm(value)}
        placeholder="O que precisa ser feito?"
        maxLength={100}
        className="flex-1 bg-transparent py-2 text-base font-semibold text-gray-400 outline-none placeholder:text-gray-300"
        aria-label="Título da nova tarefa"
      />
    </div>
  );
};

// ─── Main Component ──────────────────────────────────────────────────────────

const TaskList = ({ tasks, onToggle, onRemove, onEdit, onAdd }: TaskListProps) => {
  const [isAdding, setIsAdding] = useState(false);

  const handleConfirm = (title: string) => {
    onAdd(title);
    setIsAdding(false);
  };

  const handleCancel = () => {
    setIsAdding(false);
  };

  return (
    <div className="flex flex-col gap-3">
      {/* "Nova tarefa" button — solid pastel card, no dashed border */}
      {!isAdding && (
        <button
          type="button"
          id="add-task-btn"
          aria-label="Criar nova tarefa"
          onClick={() => setIsAdding(true)}
          className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-[24px] bg-gradient-to-r from-primary to-secondary py-5 text-base font-bold text-white shadow-lg transition-all duration-300 hover:shadow-glow hover:scale-[1.02] active:scale-[0.98]"
        >
          <div className="absolute inset-0 bg-white/10 opacity-0 transition-opacity group-hover:opacity-100" />
          <Plus
            size={22}
            strokeWidth={3}
            className="transition-transform duration-300 group-hover:rotate-90"
            aria-hidden="true"
          />
          Nova tarefa
        </button>
      )}

      {/* Inline add form */}
      {isAdding && (
        <AddTaskInline onConfirm={handleConfirm} onCancel={handleCancel} />
      )}

      {/* Empty state or task list */}
      {tasks.length === 0 ? (
        <EmptyState />
      ) : (
        <ul className="flex flex-col gap-2.5" aria-label="Lista de tarefas">
          {tasks.map((task) => (
            <li key={task.id}>
              <TaskCard
                task={task}
                onToggle={onToggle}
                onRemove={onRemove}
                onEdit={onEdit}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

TaskList.displayName = "TaskList";

export { TaskList };
export type { TaskListProps };
