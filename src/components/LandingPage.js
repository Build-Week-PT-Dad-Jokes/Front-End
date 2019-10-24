import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/button";
import { makeStyles } from "@material-ui/core/styles";

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
          <span className="left-button">{"<<"}</span>
          <div className="landing-page joke">
            <h2 className="landing-page joke-setup">
              What concert costs just 45 cents?
            </h2>
            <h2 className="landing-page joke-delivery">
              50 Cent featuring Nickelback!
            </h2>
          </div>
          <span className="right-button">{">>"}</span>
        </div>
        <div className="landing-page container">
          <p className="joke"></p>
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
