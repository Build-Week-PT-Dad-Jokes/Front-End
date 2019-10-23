import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';

function AddJokeModal() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleAdd = () => {

  };

  const fullscreen = useMediaQuery('(max-width:550px');

  return (
    <div className="add-joke-container">
      <Button className="add-joke-button" onClick={handleClickOpen}>
        Add a Joke
      </Button>
      <Dialog 
        PaperProps={{
          style: {
            backgroundColor: '#eba15c',
          }
        }}
        fullWidth='sm'
        maxWidth='sm'
        fullScreen={fullscreen} 
        open={open} 
        onClose={handleClose} 
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title"><h2>Add a New Joke</h2></DialogTitle>
        <DialogContent>
          <DialogContentText>
            <p>Note: Punchline is optional.  For single line jokes, use the 'Setup' line only.</p>
          </DialogContentText>
          <TextField
            style={{background: 'lightgray'}}
            required
            autoFocus
            margin="dense"
            id="name"
            label="Setup"
            type="text"
            fullWidth
            variant="filled"
          />
          
          <TextField
            style={{background: 'lightgray'}}
            margin="dense"
            id="name"
            label="Punchline (optional)"
            type="text"
            fullWidth
            variant="filled"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAdd}>
            Add Joke
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddJokeModal