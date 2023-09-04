import type { Task } from "./todo_app";
import { TaskDisplay } from "./task_display";

export const TaskList: React.FC<{
  tasks: Task[];
  onChangeTask: (task: Task) => void;
  onDeleteTask: (taskId: number) => void;
}> = ({ tasks, onChangeTask, onDeleteTask }) => {
  return (
    <ul className="list">
      {tasks.map((task) => (
        <li key={task.id} className="list__item">
          <TaskDisplay
            task={task}
            onChange={onChangeTask}
            onDelete={onDeleteTask}
          />
        </li>
      ))}
    </ul>
  );
};
