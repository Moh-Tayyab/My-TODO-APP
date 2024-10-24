import { Link } from 'react-router-dom';
import logo from '../assets/to-do-logo.png'; // Import the logo

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <img src={logo} alt="To-Do Logo" className="w-10 h-10" />
        <h1 className="text-2xl font-bold">To Do List</h1>
      </div>
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="hover:text-gray-300">Home</Link>
        </li>
        <li>
          <Link to="/professional-tasks" className="hover:text-gray-300">Professional</Link>
        </li>
        <li>
          <Link to="/personal-tasks" className="hover:text-gray-300">Personal</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
