import React, { useEffect, useState } from 'react';
import DatosTutor from '../components/DatosTutor';
import GrupoComponent from '../components/GrupoComponent';
import { Container } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import tutorData from '../data/tutor.json';

const Tutor = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Cargar datos desde el JSON
    setData(tutorData.tutor);
  }, []);

  if (!data) {
    return <div>Cargando...</div>;
  }

  return (
    <Container>
      <DatosTutor datos={data.datos} />
      <h2>Tutoría Actual - {data.tutoria.actual.anio}</h2>
      {data.tutoria.actual.grupal.map((grupo, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Grupo {grupo.idGrupo}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <GrupoComponent key={index} grupo={grupo} />
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
};

export default Tutor;