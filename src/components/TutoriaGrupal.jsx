import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SesionComponent from './SesionComponent ';


const TutoriaGrupal = ({ modulos, grupo }) => {

  return (
    <div className="p-4 border rounded shadow">

      {modulos.map((modulo, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography>Modulo {index+1}: <strong>{modulo.nombreModulo}</strong></Typography>
          </AccordionSummary>

          <AccordionDetails>
            <div key={index} className="mb-4">
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
                      <Typography>Sesión {sesion.numero_sesion} - <strong>{sesion.sesion}</strong></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <SesionComponent key={i} sesion={sesion} id={i} />
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

export default TutoriaGrupal;
