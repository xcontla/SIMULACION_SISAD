import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';
import "../styles/login.css"

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simular autenticación y asignar roles según el usuario
    let role;
    switch (username) {
      case 'coordinador':
        role = 'coordinador';
        break;
      case 'subcoordinador':
        role = 'subcoordinador';
        break;
      case 'tutor':
        role = 'tutor';
        break;
      case 'student':
        role = 'student';
        break;
      default:
        role = null;
    }
    if (role) {
      dispatch(setUser({ username, role }));
      navigate(`/${role}`);
    } else {
      alert('Usuario no reconocido');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-4/6 bg-gray-100 text-sky-950">
      <div className="text-center mb-6">
        <h1 className="text-8xl font-bold">
          <span className="animated-letter">S</span>
          <span className="animated-letter">I</span>
          <span className="animated-letter">S</span>
          <span className="animated-letter">A</span>
          <span className="animated-letter">D</span>
        </h1>
        <p className="text-2xl mt-2 text-gray-700">Sistema de Seguimiento y Atención Diferenciada</p>
      </div>

      <div className="flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h2 className="text-3xl font-bold mb-4 ">Inicio de Sesión</h2>
          <input
            type="text"
            placeholder="Usuario / Número de cuenta"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border p-2 w-full mb-4"
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 w-full mb-4"
          />
          <button
            onClick={handleLogin}
            className="bg-blue-800 text-white p-2 w-full "
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
