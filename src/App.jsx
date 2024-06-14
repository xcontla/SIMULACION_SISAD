import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Coordinator from './pages/Coordinador';
import SubCoordinator from './pages/SubCoordinador';
import Tutor from './pages/Tutor';
import Alumno from './pages/Alumno';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/coordinator" element={<Coordinator />} />
        <Route path="/subcoordinator" element={<SubCoordinator />} />
        <Route path="/tutor" element={<Tutor />} />
        <Route path="/student" element={<Alumno />} />
      </Routes>
    </Router>
  );
}

export default App;
