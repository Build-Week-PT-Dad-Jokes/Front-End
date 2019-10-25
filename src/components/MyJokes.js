import React from "react";
import { connect } from "react-redux";

import Joke from './Joke';
import AddJokeModal from './AddJokeModal';

const MyJokes = props => {
  const { myJokes } = props;

  const returnJoke = (joke, ind)=> {
    return ind<10 &&
        <div className="single-joke" key={joke.id}>
            <Joke joke={joke} />
        </div>
}

  return (
    <div className="jokes-container">
      <AddJokeModal />
      <h2>My Jokes</h2>
      {!!myJokes &&
        myJokes.map((joke, ind) => returnJoke(joke, ind))}
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
