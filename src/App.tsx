import { useTasks } from "@/hooks/use-tasks";
import { TodoHeader } from "@/components/todo-header";
import { StatsBar } from "@/components/stats-bar";
import { TaskList } from "@/components/task-list";

export function App() {
  const { tasks, completedCount, addTask, toggleTask, removeTask, editTask } =
    useTasks();

  return (
    <main className="relative min-h-screen overflow-hidden bg-[--color-bg] px-4 py-10">
      {/* Decorative pastel blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 size-96 rounded-full bg-[--color-pink-pastel] opacity-60 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-32 size-96 rounded-full bg-[--color-lavender] opacity-50 blur-3xl"
      />

      <div className="relative mx-auto flex w-full max-w-[640px] flex-col gap-10">
        <TodoHeader />

        <section aria-label="Gerenciador de tarefas">
          <StatsBar total={tasks.length} completed={completedCount} />
          <TaskList
            tasks={tasks}
            onAdd={addTask}
            onToggle={toggleTask}
            onRemove={removeTask}
            onEdit={editTask}
          />
        </section>
      </div>
    </main>
  );
}
