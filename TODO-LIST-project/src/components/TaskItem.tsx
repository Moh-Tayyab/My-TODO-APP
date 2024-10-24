import { RemoveTask } from './RemoveTask';

interface TaskItemProps {
  task: string;
  category: string;
  index: number;
  removeTask: (taskIndex: number) => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({ task, category, index, removeTask }) => {
  return (
    <div className="flex items-center justify-between border-b py-2">
      <div>
        <p className={`text-lg ${category === 'professional' ? 'text-blue-500' : 'text-green-500'}`}>
          {task}
        </p>
        <span className="text-sm text-gray-500">{category.toUpperCase()}</span>
      </div>
      <RemoveTask removeTask={removeTask} index={index} />
    </div>
  );
};
