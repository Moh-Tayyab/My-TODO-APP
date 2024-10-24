interface RemoveTaskProps {
    removeTask: (taskIndex: number) => void;
    index: number;
  }
  
  export const RemoveTask: React.FC<RemoveTaskProps> = ({ removeTask, index }) => {
    return (
      <button
        onClick={() => removeTask(index)}
        className="text-red-500 hover:text-red-700"
      >
        Remove
      </button>
    );
  };
  