import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const EvaluacionesComponent = ({ evaluaciones ,index }) => {
  const [open, setOpen] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [currentAnswer, setCurrentAnswer] = useState('');

  const handleClickOpen = (question) => {
    setCurrentQuestion(question);
    setCurrentAnswer(question.respuesta || '');
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    currentQuestion.respuesta = currentAnswer;
    setOpen(false);
  };

  return (

    <div className="flex items-center justify-center bg-gray-100">

      <Accordion key={index}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`panel${index}-content`}
          id={`panel${index}-header`}
        >
          <Typography><strong>Evaluaciones</strong></Typography>
        </AccordionSummary>

        <AccordionDetails>


          <div className='bg-white p-8 rounded shadow-md w-96'>
            <p className='text-lg'>Evaluación del Tutor de la Sesion</p>
            {evaluaciones.evaluacionTutor.evaluado ? (
              <p style={{ color: 'green' }}>Evaluado <span role="img" aria-label="completed">✔️</span></p>
            ) : (
              <div>
                {evaluaciones.evaluacionTutor.evaluacion.preguntas.map((question, j) => (
                  <div key={j} style={{ marginBottom: '10px' }}>
                    <p><strong>{question.pregunta}</strong></p>
                    <Button variant="outlined" color="primary" onClick={() => handleClickOpen(question)}>
                      Responder
                    </Button>
                  </div>
                ))}
              </div>
            )}
            <p className='text-md'>Autoevaluación de la Sesión</p>
            {evaluaciones.autoevaluacion.evaluado ? (
              <p style={{ color: 'green' }}>Evaluado <span role="img" aria-label="completed">✔️</span></p>
            ) : (
              <div>
                {evaluaciones.autoevaluacion.evaluacion.preguntas.map((question, j) => (
                  <div key={j} style={{ marginBottom: '10px' }}>
                    <p><strong>{question.pregunta}</strong></p>
                    <Button variant="outlined" color="primary" onClick={() => handleClickOpen(question)}>
                      Responder
                    </Button>
                  </div>
                ))}
              </div>
            )}
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>Responder Pregunta</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  {currentQuestion && currentQuestion.pregunta}
                </DialogContentText>
                <TextField
                  autoFocus
                  margin="dense"
                  label="Respuesta"
                  type="text"
                  fullWidth
                  value={currentAnswer}
                  onChange={(e) => setCurrentAnswer(e.target.value)}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Cancelar
                </Button>
                <Button onClick={handleSave} color="primary">
                  Guardar
                </Button>
              </DialogActions>
            </Dialog>
          </div>

        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default EvaluacionesComponent;
