import { useReducer } from "react";
import { AddTask } from "./add_task.js";
import { TaskList } from "./task_list.js";

export interface Task {
  id: number;
  text: string;
  done: boolean;
}

type Action =
  | { type: "added"; payload: string }
  | { type: "changed"; payload: { id: number } }
  | { type: "deleted"; payload: number };

const initialTasks = [
  { id: 1, text: "Visit Kafka Museum", done: true },
  { id: 2, text: "Watch a puppet show", done: false },
  { id: 3, text: "Lennon Wall pic", done: false },
];

const tasksReducer = (tasks: Task[], action: Action): Task[] => {
  switch (action.type) {
    case "added":
      return [
        ...tasks,
        { id: tasks.length, text: action.payload, done: false },
      ];
    case "changed":
      return tasks.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
    case "deleted":
      return tasks.filter((task) => task.id !== action.payload);
    default:
      return [...tasks];
  }
};

export function TaskApp() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return (
    <>
      <h2>useReducer</h2>

      <h3>Prague Itinerary</h3>
      <AddTask
        onAddTask={(text) => dispatch({ type: "added", payload: text })}
      />
      <TaskList
        tasks={tasks}
        onChangeTask={(updatedTask) =>
          dispatch({ type: "changed", payload: updatedTask })
        }
        onDeleteTask={(taskId) =>
          dispatch({ type: "deleted", payload: taskId })
        }
      />
    </>
  );
}
