import { useState } from 'react';

interface AddTaskProps {
  addTask: (task: string, category: string) => void;
}

export const AddTask: React.FC<AddTaskProps> = ({ addTask }) => {
  const [task, setTask] = useState('');
  const [category, setCategory] = useState('personal');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task.trim() !== '') {
      addTask(task, category);
      setTask(''); // Reset input
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter Your Task"
        className="border p-2 rounded w-64"
      />
      <div className="flex space-x-4">
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Add
        </button>
        <button
          type="button"
          onClick={() => setTask('')}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Remove
        </button>
      </div>
      <div className="flex space-x-2">
        <label>
          <input
            type="radio"
            value="personal"
            checked={category === 'personal'}
            onChange={(e) => setCategory(e.target.value)}
          />
          Personal
        </label>
        <label>
          <input
            type="radio"
            value="professional"
            checked={category === 'professional'}
            onChange={(e) => setCategory(e.target.value)}
          />
          Professional
        </label>
      </div>
    </form>
  );
};
