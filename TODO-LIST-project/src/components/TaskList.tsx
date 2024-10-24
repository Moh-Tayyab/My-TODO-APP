import { TaskItem } from './TaskItem';

interface TaskListProps {
  tasks: { task: string; category: string }[];
  removeTask: (taskIndex: number) => void;
}

export const TaskList: React.FC<TaskListProps> = ({ tasks, removeTask }) => {
  return (
    <div className="mt-6">
      {tasks.map((taskItem, index) => (
        <TaskItem
          key={index}
          task={taskItem.task}
          category={taskItem.category}
          index={index}
          removeTask={removeTask}
        />
      ))}
    </div>
  );
};
