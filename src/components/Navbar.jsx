import { Link } from 'react-router-dom';
import unamLogo from '../images/UNAMfull.png'
import dgoaeLogo from '../images/DGOAEfull.png'

function Navbar() {
  return (
    <div>
      {/* Banner */}
      <div className="bg-gray-200 py-2 flex justify-between items-center px-4">
      <img src={unamLogo} alt="UNAM" className="h-16" />
      <img src={dgoaeLogo} alt="DGOAE" className="h-16" />
      </div>
      {/* Navigation Bar */}
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between">
          <Link to="/" className="text-white">Inicio</Link>
          <div>
            <Link to="/coordinador" className="text-white mx-2">Coordinador</Link>
            <Link to="/subcoordinador" className="text-white mx-2">SubCoordinador</Link>
            <Link to="/tutor" className="text-white mx-2">Tutor</Link>
            <Link to="/student" className="text-white mx-2">Alumno</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
