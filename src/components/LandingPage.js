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
            <Button
              className={classes.button}
              onClick={e => {
                e.preventDefault();
                history.push("/signup");
              }}
            >
              Create an Account
            </Button>
            <span>
              Already have an account? <Link to="/login">Login</Link>
            </span>
            <Button className={classes.button}>
              <span>
                <Link to="/profile">Continue As Guest </Link>
            </span>
              </Button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
