import React, { useEffect, useState } from "react";
import Joke from "./Joke";
import { connect } from "react-redux";
import Header from "./Header";
import BackButton from "./BackButton";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => {
  return {
    jokesPlaceholder: {
      marginTop: "1rem",
      padding: "1rem",
      backgroundColor: "#cbcbcb"
    },
    buttonsContainer: {
      display: "flex",
      justifyContent: "flex-start",
      marginBottom: "3rem"
    }
  };
});

const FavoritesPage = props => {
  const { favorites, allJokes } = props;
  const [favoriteArray, setFavoriteArray] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const jokeIds = !!favorites ? favorites.map(fav => fav.joke_id) : [];
    const filtered = !!allJokes
      ? allJokes.filter(joke => jokeIds.includes(joke.id))
      : [];
    setFavoriteArray(filtered);
  }, [favorites, allJokes]);

  return (
    <div className="home-container">
      <Header />
      <div className="jokes-container">
        <Box className={classes.buttonsContainer}>
          <BackButton {...props} />
        </Box>
        <h2 className="favorites-title">Favorite Jokes</h2>
        {!!favoriteArray.length ? (
          favoriteArray.map(joke => {
            return (
              <div className="single-joke" key={joke.id}>
                <Joke joke={joke} inheritBookmark {...props} />
              </div>
            );
          })
        ) : (
          <>
            <Box className={classes.jokesPlaceholder}>
              <p>You have not chosen any favorite jokes! Where you at Dad?</p>
            </Box>
          </>
        )}
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  favorites: state.userReducer.user.favorites,
  allJokes: state.jokesReducer.jokes
});

export default connect(mapStateToProps, {})(FavoritesPage);
