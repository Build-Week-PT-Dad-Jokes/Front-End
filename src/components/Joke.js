import React, { useState, useEffect } from "react";
import {
  BookmarkBorder,
  Bookmark,
  Share,
  Facebook,
  Twitter,
  ChatBubble
} from "@material-ui/icons/";
import axiosWithAuth from "../utils/axiosWithAuth";
import BookmarkButton from "./BookmarkButton";
import UpdateJoke from './UpdateJoke';
import DeleteJoke from './DeleteJoke';

const Joke = props => {
  const { joke, match } = props;
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isSharing, setIsSharing] = useState(false);
  const [favoriteId, setFavoriteId] = useState();
  const [inMyJokes, setInMyJokes] = useState(false);

//   if (match.params !== "/myjokes") {
//     setInMyJokes(false);
//   }

  useEffect(() => {
    updateFavorite();
  }, [isBookmarked]);

  const bookmark = event => {
    setIsBookmarked(!isBookmarked);
  };
  const updateFavorite = () => {
    if (isBookmarked) {
      axiosWithAuth()
        .post(`/favorite-joke/${joke.id}`)
        .then(response => {
          console.log(response);
          setFavoriteId(response.data.favoritedJoke.id);
        })
        .catch(err => {
          console.log(err);
        });
    } else if (!!favoriteId) {
      axiosWithAuth()
        .delete(`/favorite-joke/${favoriteId}`)
        .then(response => {
          console.log(response);
        })
        .catch(err => {
          console.log(err);
        });
    }
  };
  const share = event => {
    setIsSharing(!isSharing);
  };
  return (
    <div className="joke-card">
      <div className="icon-flex-container">
        <p>{!!joke.first_line && joke.first_line}</p>
        {!inMyJokes ? (
          <BookmarkButton bookmark={bookmark} isBookmarked={isBookmarked} />
        ) : (
          <>
            <UpdateJoke />
            <DeleteJoke />
          </>
        )}
      </div>
      <p className="second-part">{!!joke.punchline && joke.punchline}</p>
      <div className="icon-flex-container">
        <p>Rating: {joke.rating}</p>
        {!isSharing ? (
          <div onClick={share} className="share-button">
            <Share fontSize="large" />
          </div>
        ) : (
          <div className="share-icons">
            <div className="twitter">
              <Twitter fontSize="large" />
            </div>
            <div className="facebook">
              <Facebook fontSize="large" />
            </div>
            <div className="chat">
              <ChatBubble fontSize="large" />
            </div>
            <div onClick={share}>
              {" "}
              <Share fontSize="large" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Joke;
