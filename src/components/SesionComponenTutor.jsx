import React from 'react';
import EvaluacionesComponentTutor from './EvaluacionesComponentTutor';

const SesionComponenTutor = ({ sesion }) => {
  return (
    <div className="ml-4">
      <p>
        <strong>Sesión {sesion.numero_sesion}:</strong> {sesion.sesion}
      </p>
      <p>
        <strong>Fecha:</strong> {sesion.fecha}
      </p>
      <EvaluacionesComponentTutor evaluaciones={sesion.evaluaciones} />
    </div>
  );
};

export default SesionComponenTutor;
