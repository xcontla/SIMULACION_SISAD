import React, { useEffect, useState } from 'react';
import DatosAlumno from '../components/DatosAlumno';
import DatosTutor from '../components/DatosTutor';
import TutoriaIndividual from '../components/TutoriaIndividual';
import ModulosSesiones from '../components/ModulosSesiones';
import alumnoData from '../data/alumno.json';

export const Alumno = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Cargar datos desde el JSON
    setData(alumnoData.alumno);
  }, []);

  if (!data) {
    return <div>Cargando...</div>;
  }


  console.table(data);
  return (


    <div className="container mx-auto p-4">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <DatosAlumno datos={data.datos} />
        <DatosTutor datos={data.tutoria.actual.tutor.datosTutor} />
      </div>
      <hr />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <ModulosSesiones grupal={data.tutoria.actual.grupal} />
        <TutoriaIndividual sesiones={data.tutoria.actual.individual.sesiones} />

      </div>

    </div>
  );
};

export default Alumno;