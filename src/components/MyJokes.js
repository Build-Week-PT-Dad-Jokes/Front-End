import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import Joke from "./Joke";
import AddJokeModal from "./AddJokeModal";
import BackButton from "./BackButton";

const MyJokes = props => {
  const { myJokes } = props;

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
      <BackButton {...props} style={{justifySelf: "left"}} />
      <div className="jokes-container">
        <AddJokeModal />
        <h2>My Jokes</h2>
        {!!myJokes && myJokes.map((joke, ind) => returnJoke(joke, ind))}
      </div>
    </div>
  );
};

const mapStateToProps = ({ userReducer: { user } }) => ({
  myJokes: user.jokes
});

export default connect(
  mapStateToProps,
  {}
)(MyJokes);
