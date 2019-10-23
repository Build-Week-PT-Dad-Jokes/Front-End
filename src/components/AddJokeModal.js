import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import axiosWithAuth from "../utils/axiosWithAuth"

function AddJokeModal() {
  const [open, setOpen] = React.useState(false);
  const [newJoke, setNewJoke]=useState({
    first_line: '',
    punchline: ''
  })
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = event => {
    const {value, name} = event.target
    setNewJoke({
      [name]: value
    })
  }
  const handleAdd = e => {
    e.preventDefault()
    console.log(e.target)
    axiosWithAuth()
      .post("/jokes", newJoke)
        .then(response => {
          console.log(response)
        })
        .catch(err => {
          console.log(err)
        })
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
        fullWidth
        maxWidth='sm'
        fullScreen={fullscreen} 
        open={open} 
        onClose={handleClose} 
        aria-labelledby="form-dialog-title"
      >
        <form onSubmit = {handleAdd}>
          <DialogTitle id="form-dialog-title">Add a New Joke</DialogTitle>
          <DialogContent>
            <DialogContentText>
              <span>Note: Punchline is optional.  For single line jokes, use the 'Setup' line only.</span>
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
              value={newJoke.first_line}
              onChange={handleChange}
              name="first_line"
            />
            
            <TextField
              style={{background: 'lightgray'}}
              margin="dense"
              id="name"
              label="Punchline (optional)"
              type="text"
              fullWidth
              variant="filled"
              value={newJoke.punchline}
              onChange={handleChange}
              name="punchline"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>
              Cancel
            </Button>
            <Button type="submit">
              Add Joke
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}

export default AddJokeModal