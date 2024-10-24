import { TaskList } from '../components/TaskList';

const ProfessionalTasks: React.FC<{ tasks: { task: string; category: string }[] }> = ({ tasks }) => {
  const professionalTasks = tasks.filter(task => task.category === 'professional');
  return (
    <div>
      <h2>Professional Tasks</h2>
      <TaskList tasks={professionalTasks} removeTask={() => {}} />
    </div>
  );
};

export default ProfessionalTasks;
