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
  onAdd: (title: string) => void;
}

// ─── Empty State ─────────────────────────────────────────────────────────────

const EmptyState = () => (
  <div className="flex flex-col items-center gap-5 py-16 text-center">
    <div className="flex size-20 items-center justify-center rounded-3xl bg-[--color-lavender]">
      <ClipboardList
        size={40}
        strokeWidth={1.4}
        className="text-[--color-lavender-dark]"
        aria-hidden="true"
      />
    </div>
    <div className="flex flex-col gap-1.5">
      <p className="text-sm font-semibold text-[--color-gray-400]">
        Nenhuma tarefa ainda
      </p>
      <p className="text-sm text-[--color-gray-300]">
        Clique em &ldquo;Nova tarefa&rdquo; para começar
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
    <div className="flex items-center gap-3 rounded-2xl border-2 border-[--color-green-light] bg-[--color-white] px-4 py-3.5 shadow-[--shadow-sm]">
      <div className="size-5 shrink-0 rounded-full border-2 border-[--color-green-light] bg-[--color-green-pastel]" />
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        onBlur={() => onConfirm(value)}
        placeholder="Digite o título da tarefa..."
        className="flex-1 bg-transparent text-sm font-medium text-[--color-gray-400] outline-none placeholder:text-[--color-gray-300]"
        aria-label="Título da nova tarefa"
      />
    </div>
  );
};

// ─── Main Component ──────────────────────────────────────────────────────────

const TaskList = ({ tasks, onToggle, onRemove, onAdd }: TaskListProps) => {
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
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[--color-pink-pastel] py-4 text-sm font-semibold text-[--color-pink-base] shadow-[--shadow-card] transition-all duration-150 hover:bg-[--color-pink-light] hover:shadow-[--shadow-sm] active:scale-[0.98]"
        >
          <Plus size={18} strokeWidth={2.5} aria-hidden="true" />
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
