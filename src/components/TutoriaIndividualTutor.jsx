import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SesionComponent from './SesionComponent ';


const TutoriaIndividualTutor = ({ sesiones }) => {
  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-xl font-bold mb-2">Tutoría Individual</h2>
      {sesiones.map((sesion, i) => (
        <Accordion key={i}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${i}-content`}
            id={`panel${i}-header`}
          >
            <Typography>Sesión {sesion.numero_sesion}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <SesionComponent key={i} sesion={sesion} />
          </AccordionDetails>


        </Accordion>
      ))}
    </div>
  );
};

export default TutoriaIndividualTutor;
