import React from 'react';
import EvaluacionesComponent from './EvaluacionesComponent';

const SesionComponent = ({ sesion, id }) => {
  return (
    <div className="ml-4">
      <p>
        <strong>Sesión {sesion.numero_sesion}:</strong> {sesion.sesion}
      </p>
      <p>
        <strong>Fecha:</strong> {sesion.fecha}
      </p>
      <EvaluacionesComponent evaluaciones={sesion.evaluaciones} index={id}/>
    </div>
  );
};

export default SesionComponent;
