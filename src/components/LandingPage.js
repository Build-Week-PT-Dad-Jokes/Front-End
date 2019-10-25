import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import leftArrow from '../assests/left.svg';
import rightArrow from '../assests/right.svg';

const buttonStyles = theme => ({
  margin: theme.spacing(1),
  fontSize: "2.4rem",
  borderRadius: "0.2rem",
  padding: "1rem"
});

const useStyles = makeStyles(theme => ({
  button1: {
    ...buttonStyles(theme),
    backgroundColor: "#c92b2b"
  },
  button2: {
    ...buttonStyles(theme),
    backgroundColor: "#e5872f"
  }
}));

const LandingPage = props => {
  const classes = useStyles();

  return (
    <div className="wrapper">
      <div className="landing-page content">
        <div className="carousel">
          <img src={leftArrow} className="left-button" />
          <div className="landing-page joke">
            <h2 className="landing-page joke-setup">
              What concert costs just 45 cents?
            </h2>
            <h2 className="landing-page joke-delivery">
              50 Cent featuring Nickelback!
            </h2>
          </div>
          <img src={rightArrow} className="right-button" />
        </div>
        <div className="landing-page container">
          <p className="landing-page tagline">You're a funny guy, but you keep losing your list of jokes and forgetting which ones had the best reactions! Well worry no more- Dad (or bad??) jokes app to the rescue.</p>
          <Link to="/signup">
            <Button className={classes.button1}>Create an Account</Button>
          </Link>
          <span>
            Already have an account? <Link to="/login">Login</Link>
          </span>
          <span>
            <Link to="/home">
              <Button className={classes.button2}>Continue As Guest</Button>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
