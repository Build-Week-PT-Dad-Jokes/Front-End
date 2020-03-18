import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import leftArrow from "../assests/left.svg";
import rightArrow from "../assests/right.svg";

const useStyles = makeStyles(theme => {
  const buttonStyles = {
    margin: "2rem",
    fontSize: "2.4rem",
    borderRadius: "0.2rem",
    padding: "1rem",
    letterSpacing: "0.086rem"
  };

  return {
    button1: {
      ...buttonStyles,
      backgroundColor: "#c92b2b",
      color: "#cbcbcb"
    },
    button2: {
      ...buttonStyles,
      backgroundColor: "#e5872f",
      color: "#1e1e1e"
    },
    loginLink: {
      fontSize: "2.4rem",
      letterSpacing: "0.086rem",
      color: "#e5872f"
    },
    loginLabel: {
      fontSize: "2.4rem",
      letterSpacing: "0.086rem",
      color: "#cbcbcb"
    }
  };
});

const LandingPage = props => {
  const classes = useStyles();

  return (
    <div className="wrapper">
      <div className="landing-page content">
        <div className="carousel">
          <img src={leftArrow} className="left-button" alt="left-arrow" />
          <div className="landing-page joke">
            <h2 className="landing-page joke-setup">
              What concert costs just 45 cents?
            </h2>
            <h2 className="landing-page joke-delivery">
              50 Cent featuring Nickelback!
            </h2>
          </div>
          <img src={rightArrow} className="right-button" alt="right-arrow" />
        </div>
        <div className="landing-page container">
          <p className="landing-page tagline">
            You're a funny guy, but you keep losing your list of jokes and
            forgetting which ones had the best reactions! Well worry no more-
            Dad (or bad??) jokes app to the rescue.
          </p>
          <span>
            <Button
              className={classes.button1}
              onClick={e => {
                e.preventDefault();
                props.history.push("/signup");
              }}
            >
              Create an Account
            </Button>
          </span>
          <span className={classes.loginLabel}>
            Already have an account?{" "}
            <Link className={classes.loginLink} to="/login">
              Login
            </Link>
          </span>
          <span>
            <Button
              className={classes.button2}
              onClick={e => {
                e.preventDefault();
                props.history.push("/home");
              }}
            >
              Continue As Guest
            </Button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
