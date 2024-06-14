import React from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DatosAlumnoTutor from './DatosAlumnoTutor';
import TutoriaGrupalTutor from './TutoriaGrupalTutor';

const GrupoComponent = ({ grupo }) => {
  console.log("Grupo", grupo);
  return (
    <div>
      <h1>{grupo.idGrupo}</h1>
      <Accordion key={grupo.idGrupo}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`panel${grupo.idGrupo}-content`}
          id={`panel${grupo.idGrupo}-header`}
        >
          <Typography>Lista Alumnos</Typography>
        </AccordionSummary>

        <AccordionDetails>
          {
            grupo.listaAlumnos.map((alumno, i) => (

              <DatosAlumnoTutor key={i} alumno={alumno} />

            ))}


        </AccordionDetails>
      </Accordion>
      
      <TutoriaGrupalTutor modulos={grupo.modulos} grupo={grupo.idGrupo} />
    </div >
  );
};

export default GrupoComponent;
