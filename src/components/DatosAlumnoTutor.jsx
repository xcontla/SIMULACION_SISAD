import React from 'react';

const DatosAlumnoTutor = ( datos ) => {
  
  console.log("datos", datos);

  if (!datos) {
    return <div>Cargando...</div>;
  }
  return (


    <div className="p-4 border rounded shadow">
      <h2 className="text-xl font-bold mb-2">Datos del Alumno</h2>
      <p><strong>Nombre:</strong> {datos.alumno.nombre}</p>
      <p><strong>Numero de Cuenta:</strong> {datos.alumno.numeroCuenta}</p>
      <p><strong>Semestre:</strong> {datos.alumno.semestre}</p>
      <p><strong>Entidad:</strong> {datos.alumno.entidad}</p>
      <p><strong>Carrera:</strong> {datos.alumno.carrera}</p>
      <p><strong>Promedio Actual:</strong> {datos.alumno.promedio}</p>
    </div>
  );
};

export default DatosAlumnoTutor;
