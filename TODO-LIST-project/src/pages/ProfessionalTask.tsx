import { TaskList } from '../components/TaskList';

const PersonalTasks: React.FC<{ tasks: { task: string; category: string }[] }> = ({ tasks }) => {
  const personalTasks = tasks.filter(task => task.category === 'personal');
  return (
    <div>
      <h2>Personal Tasks</h2>
      <TaskList tasks={personalTasks} removeTask={() => {}} />
    </div>
  );
};

export default PersonalTasks;
