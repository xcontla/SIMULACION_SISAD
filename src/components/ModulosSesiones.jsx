import React from 'react';
import TutoriaGrupal from '../components/TutoriaGrupal';
const ModulosSesiones = ({ grupal }) => {
  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-xl font-bold mb-2">Módulos y Sesiones</h2>
      <h3 className="text-xl font-bold mb-2">Tutoría Grupal</h3>
      <h4> Grupo: {grupal.grupo} </h4>
      
      <TutoriaGrupal modulos={grupal.modulos}  />
    
    
    
    </div>
  );
};

export default ModulosSesiones;


<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">

</div>