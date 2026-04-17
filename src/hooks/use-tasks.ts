import { useReducer, useCallback } from "react";
import type { Task } from "@/types/task";

// ─── State ──────────────────────────────────────────────────────────────────

interface TaskState {
  tasks: Task[];
}

// ─── Actions ────────────────────────────────────────────────────────────────

type TaskAction =
  | { type: "ADD_TASK"; payload: { title: string } }
  | { type: "TOGGLE_TASK"; payload: { id: string } }
  | { type: "REMOVE_TASK"; payload: { id: string } }
  | { type: "EDIT_TASK"; payload: { id: string; title: string } };

// ─── Reducer ────────────────────────────────────────────────────────────────

function taskReducer(state: TaskState, action: TaskAction): TaskState {
  switch (action.type) {
    case "ADD_TASK": {
      const newTask: Task = {
        id: crypto.randomUUID(),
        title: action.payload.title,
        isCompleted: false,
        createdAt: new Date(),
      };
      return { tasks: [newTask, ...state.tasks] };
    }
    case "TOGGLE_TASK": {
      return {
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, isCompleted: !task.isCompleted }
            : task,
        ),
      };
    }
    case "REMOVE_TASK": {
      return {
        tasks: state.tasks.filter((task) => task.id !== action.payload.id),
      };
    }
    case "EDIT_TASK": {
      return {
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, title: action.payload.title }
            : task,
        ),
      };
    }
  }
}

// ─── Hook ───────────────────────────────────────────────────────────────────

interface UseTasksReturn {
  tasks: Task[];
  completedCount: number;
  addTask: (title: string) => void;
  toggleTask: (id: string) => void;
  removeTask: (id: string) => void;
  editTask: (id: string, title: string) => void;
}

const initialState: TaskState = { tasks: [] };

export function useTasks(): UseTasksReturn {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  const addTask = useCallback((title: string) => {
    const trimmed = title.trim();
    if (!trimmed) return;
    dispatch({ type: "ADD_TASK", payload: { title: trimmed } });
  }, []);

  const toggleTask = useCallback((id: string) => {
    dispatch({ type: "TOGGLE_TASK", payload: { id } });
  }, []);

  const removeTask = useCallback((id: string) => {
    dispatch({ type: "REMOVE_TASK", payload: { id } });
  }, []);

  const editTask = useCallback((id: string, title: string) => {
    const trimmed = title.trim();
    if (!trimmed) return;
    dispatch({ type: "EDIT_TASK", payload: { id, title: trimmed } });
  }, []);

  const completedCount = state.tasks.filter((t) => t.isCompleted).length;

  return {
    tasks: state.tasks,
    completedCount,
    addTask,
    toggleTask,
    removeTask,
    editTask,
  };
}
