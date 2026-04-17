import { useTasks } from "@/hooks/use-tasks";
import { TodoHeader } from "@/components/todo-header";
import { StatsBar } from "@/components/stats-bar";
import { TaskList } from "@/components/task-list";

export function App() {
  const { tasks, completedCount, addTask, toggleTask, removeTask, editTask } =
    useTasks();

  return (
    <main className="relative min-h-screen overflow-hidden bg-bg-base px-4 py-10 selection:bg-primary/20">
      {/* Dynamic Animated Blobs */}
      <div
        aria-hidden="true"
        className="animate-float pointer-events-none absolute -top-48 -right-48 size-[500px] rounded-full bg-primary/20 blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="animate-float pointer-events-none absolute -bottom-48 -left-48 size-[600px] rounded-full bg-secondary/20 delay-1000 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="animate-float pointer-events-none absolute top-1/2 left-1/2 size-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 delay-2000 blur-[100px]"
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
