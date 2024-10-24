import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProfessionalTasks from './pages/PersonalTask';
import PersonalTasks from './pages/ProfessionalTask';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ProfessionalTask" element={<ProfessionalTasks />} />
        <Route path="/personal-tasks" element={<PersonalTasks />} />
      </Routes>
    </Router>
  );
};

export default App;
