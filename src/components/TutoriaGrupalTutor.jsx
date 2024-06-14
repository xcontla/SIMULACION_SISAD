import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SesionComponenTutor from './SesionComponenTutor';


const TutoriaGrupalTutor = ({ modulos, grupo }) => {

  console.log(modulos);
  console.log(grupo);
  return (
    <div>

      {
      modulos.map((modulo, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography>Modulo {modulo.nombreModulo}</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <div key={index} className="mb-4">
              <h3>Grupo: <strong>{grupo}</strong></h3>
              <h4><strong>Módulo:</strong> {modulo.nombreModulo}</h4>
              <p><strong>Tipo Módulo:</strong> {modulo.tipoModulo}</p>
              <p><strong>Fecha Inicio:</strong> {modulo.fechaInicio}</p>
              <p><strong>Fecha Fin:</strong> {modulo.fechaFin}</p>
              {
                modulo.sesiones.map((sesion, i) => (
                  <Accordion key={i}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls={`panel${i}-content`}
                      id={`panel${i}-header`}
                    >
                      <Typography>Sesión {sesion.numero_sesion}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <SesionComponenTutor key={i} sesion={sesion} />
                    </AccordionDetails>


                  </Accordion>
                ))
              }
            </div>
          </AccordionDetails>
        </Accordion>
      ))
      }
    </div >
  );
};

export default TutoriaGrupalTutor;
