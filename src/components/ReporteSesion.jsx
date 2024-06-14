import React, { useState } from 'react';
import { TextField, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

const ReporteSesion = ({ sesion }) => {
  const [open, setOpen] = useState(false);
  const [reporte, setReporte] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    // Aquí puedes manejar el envío del reporte, por ejemplo, enviarlo a un servidor
    console.log(`Reporte de la sesión ${sesion.numero_sesion}:`, reporte);
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Hacer reporte de la sesión
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>Reporte de la Sesión {sesion.numero_sesion}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Reporte"
            type="text"
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            inputProps={{ maxLength: 1000 }}
            helperText={`${reporte.length}/1000 caracteres`}
            value={reporte}
            onChange={(e) => setReporte(e.target.value)}
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
  );
};

export default ReporteSesion;
