import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Button from "@material-ui/core/button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    fontSize: "2.4rem"
  }
}));

const LandingPage = () => {
  const classes = useStyles();

  return (
    <div className="wrapper">
      <div className="landing-page">
        <Header />
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
            <Button className={classes.button}>Create an Account</Button>
            <span>
              Already have an account? <Link>Login</Link>
            </span>
            <Button className={classes.button}>Continue As Guest</Button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
