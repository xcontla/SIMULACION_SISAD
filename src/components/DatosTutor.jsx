import React from 'react';

const DatosTutor = ({ datos }) => {
  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-xl font-bold mb-2">Datos del Tutor</h2>
      <p><strong>Nombre:</strong> {datos.nombre}</p>
      <p><strong>Entidad:</strong> {datos.entidad}</p>
      <p><strong>Carrera:</strong> {datos.carrera}</p>
    </div>
  );
};

export default DatosTutor;
