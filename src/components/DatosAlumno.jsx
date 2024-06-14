import React from 'react';

const DatosAlumno = ({ datos }) => {
  
  if (!datos) {
    return <div>Cargando...</div>;
  }
  return (


    <div className="p-4 border rounded shadow">
      <h2 className="text-xl font-bold mb-2">Datos del Alumno</h2>
      <p><strong>Nombre:</strong> {datos.nombre}</p>
      <p><strong>Numero de Cuenta:</strong> {datos.numeroCuenta}</p>
      <p><strong>Semestre:</strong> {datos.semestre}</p>
      <p><strong>Entidad:</strong> {datos.entidad}</p>
      <p><strong>Carrera:</strong> {datos.carrera}</p>
      <p><strong>Promedio Actual:</strong> {datos.promedio}</p>
    </div>
  );
};

export default DatosAlumno;
