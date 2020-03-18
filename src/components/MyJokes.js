import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import Joke from "./Joke";
import AddJokeModal from "./AddJokeModal";
import BackButton from "./BackButton";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

  const useStyles = makeStyles(theme => {
    return {
      jokesPlaceholder: {
        marginTop: "1rem",
        padding: "1rem",
        backgroundColor: "#cbcbcb",
      }
    }
  })

const MyJokes = props => {
  const { myJokes } = props;
  const classes = useStyles();

  const returnJoke = (joke, ind) => {
    return (
      ind < 10 && (
        <div className="single-joke" key={joke.id}>
          <Joke {...props} joke={joke} />
        </div>
      )
    );
  };

  return (
    <div className="home-container">
      <Header />
      <BackButton {...props} style={{ justifySelf: "left" }} />
      <div className="jokes-container">
        <AddJokeModal />
        <h2>My Jokes</h2>
          {myJokes.length ? (
            myJokes.map((joke, ind) => returnJoke(joke, ind))
          ) : (
            <Box className={classes.jokesPlaceholder}>
              <p>You have not added any jokes! Where you at Dad?</p>
            </Box>
          )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ userReducer: { user } }) => ({
  myJokes: user.jokes
});

export default connect(mapStateToProps, {})(MyJokes);
