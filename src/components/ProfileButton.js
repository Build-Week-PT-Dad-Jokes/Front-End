import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import user from '../img/user.png';
import {Link} from "react-router-dom";

const useStyles = makeStyles(theme => ({
  typography: {
    padding: theme.spacing(2),
    background: "#FF9E44",
    borderRadius: "2px",
    fontWeight: "bold"
  },
}));

 function ProfileButton() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <div className ="profile-logo" aria-describedby={id} onClick={handleClick}>
        <img src={user}/>
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography className={classes.typography}>
              <Link style={{ textDecoration: 'none', color: 'black', fontFamily: "Roboto" }} to="/myjokes">
                <p>My Jokes</p>
              </Link>
              <Link style={{ textDecoration: 'none', color: 'black', fontFamily: "Roboto"  }} to="/favorites">
                <p>Favorite Jokes</p>
              </Link>
          </Typography>
      </Popover>
    </div>
  );
}

export default ProfileButton