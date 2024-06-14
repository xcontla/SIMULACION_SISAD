import React from 'react';
import data from '../data/alumno.json';

const Student = () => {
  const { datosAlumno, tutoria, tutoriasAnteriores } = data.alumno;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Datos del Alumno</h1>
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Información Personal</h2>
        <p><strong>Nombre:</strong> {datosAlumno.nombre}</p>
        <p><strong>Semestre:</strong> {datosAlumno.semestre}</p>
        <p><strong>Entidad:</strong> {datosAlumno.entidad}</p>
        <p><strong>Carrera:</strong> {datosAlumno.carrera}</p>
        <p><strong>Promedio Actual:</strong> {datosAlumno.promedioActual}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold">Tutoría Actual</h2>
        <div className="mb-4">
          <h3 className="font-semibold">Datos del Tutor</h3>
          <p><strong>Nombre:</strong> {tutoria.tutor.datosTutor.nombre}</p>
          <p><strong>Entidad:</strong> {tutoria.tutor.datosTutor.entidad}</p>
          <p><strong>Carrera:</strong> {tutoria.tutor.datosTutor.carrera}</p>
        </div>
        <div>
          <h3 className="font-semibold">Sesiones Individuales</h3>
          {tutoria.tutor.individual.sesiones.map((sesion, index) => (
            <div key={index} className="mb-4 p-4 border rounded shadow">
              <h4 className="font-semibold">Sesión {sesion.numero_sesion}</h4>
              <p><strong>Fecha:</strong> {sesion.fecha}</p>
              <p><strong>Sesión:</strong> {sesion.sesion}</p>
              <div>
                <h5 className="font-semibold">Evaluaciones del Tutor</h5>
                {sesion.evaluaciones.evaluacionTutor.evaluado ? (
                  <div>
                    {sesion.evaluaciones.evaluacionTutor.evalucion.preguntas.map((pregunta, idx) => (
                      <div key={idx}>
                        <p><strong>Pregunta {pregunta.numero}:</strong> {pregunta.pregunta}</p>
                        <p><strong>Respuesta:</strong> {pregunta.respuesta}</p>
                      </div>
                    ))}
                  </div>
                ) : <p>No evaluado</p>}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold">Tutorías Anteriores</h2>
        {tutoriasAnteriores.map((tutoria, index) => (
          <div key={index} className="mb-4 p-4 border rounded shadow">
            <h3 className="font-semibold">Año: {tutoria.anio}</h3>
            {tutoria.modulos.sesiones.map((sesion, idx) => (
              <div key={idx} className="mb-4">
                <h4 className="font-semibold">Sesión {sesion.numero_sesion}</h4>
                <p><strong>Fecha:</strong> {sesion.fecha}</p>
                <p><strong>Sesión:</strong> {sesion.sesion}</p>
                <div>
                  <h5 className="font-semibold">Evaluaciones del Tutor</h5>
                  {sesion.evaluaciones.evaluacionTutor.evaluado ? (
                    <div>
                      {sesion.evaluaciones.evaluacionTutor.evalucion.preguntas.map((pregunta, index) => (
                        <div key={index}>
                          <p><strong>Pregunta {pregunta.numero}:</strong> {pregunta.pregunta}</p>
                          <p><strong>Respuesta:</strong> {pregunta.respuesta}</p>
                        </div>
                      ))}
                    </div>
                  ) : <p>No evaluado</p>}
                </div>
                <div>
                  <h5 className="font-semibold">Autoevaluaciones</h5>
                  {sesion.autoevaluacion.evaluado ? (
                    <div>
                      {sesion.autoevaluacion.evalucion.preguntas.map((pregunta, index) => (
                        <div key={index}>
                          <p><strong>Pregunta {pregunta.numero}:</strong> {pregunta.pregunta}</p>
                          <p><strong>Respuesta:</strong> {pregunta.respuesta}</p>
                        </div>
                      ))}
                    </div>
                  ) : <p>No evaluado</p>}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Student;
