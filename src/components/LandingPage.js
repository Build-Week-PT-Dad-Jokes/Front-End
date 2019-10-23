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
  const { history } = props;

  return (
    <div className="wrapper">
      <div className="landing-page">
        <div className="carousel">
          <header className="carousel-header">
            <span className="left-button">{"<<"}</span>
            <h2>Sample Dad Joke Carousel</h2>
            <span className="right-button">{">>"}</span>
          </header>
          <section className="container">
            <p className="joke">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Explicabo ipsum repellat minus repellendus id illum itaque
              repudiandae labore rem numquam? Nihil perferendis dolor sed
              tenetur veniam provident perspiciatis pariatur minima.
            </p>
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
          </section>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
