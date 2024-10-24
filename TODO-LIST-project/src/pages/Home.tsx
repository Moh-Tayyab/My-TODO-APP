import { useState } from 'react';
import { AddTask } from '../components/AddTask';
import { TaskList } from '../components/TaskList';
import logo from '../assets/to-do-logo.png'; // Import the logo



const Home: React.FC = () => {
  const [tasks, setTasks] = useState<{ task: string; category: string }[]>([]);

  const addTask = (task: string, category: string) => {
    setTasks((prevTasks) => [...prevTasks, { task, category }]);
  };

  const removeTask = (index: number) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col items-center mt-6">
      {/* Add Logo at the top */}
      <img src={logo} alt="To-Do Logo" className="h-20 mb-4 w-30" />

      <h1 className="mb-4 text-3xl font-bold text-sky-600">MY TODO APP</h1>
      <AddTask addTask={addTask} />
      <TaskList tasks={tasks} removeTask={removeTask} />
    </div>
  );
};

export default Home;
