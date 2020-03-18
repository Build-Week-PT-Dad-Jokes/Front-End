import React, { useState } from "react";
import Joke from "./Joke";
import JokeOfDay from "./JokeOfDay";
import AddJokeModal from "./AddJokeModal";
import { connect } from "react-redux";

import PulseLoader from "react-spinners/PulseLoader";

const JokesList = props => {
  const [sortBy, setSortBy] = useState("default");
  const { apiJokes, isSearching, searchResponse, loadingJokes } = props;

  const getPageTitle = () => {
    if (sortBy === "mostPopular") {
      return !isSearching ? <h2>Most Popular</h2> : <h2>Search Results</h2>;
    }
    if (sortBy === "mostRecent" || sortBy === "default") {
      return !isSearching ? <h2>Most Recent</h2> : <h2>Search Results</h2>;
    }
    if (sortBy === "topRated") {
      return !isSearching ? <h2>Top Rated</h2> : <h2>Search Results</h2>;
    }
  };
  const returnJoke = (joke, ind) => {
    return (
      ind < 10 && (
        <div className="single-joke" key={joke.id}>
          <Joke {...props} joke={joke} />
        </div>
      )
    );
  };
  const getJokeContent = () => {
    if (sortBy === "mostPopular") {
      return (
        !!apiJokes &&
        apiJokes.map((joke, ind) => {
          return returnJoke(joke, ind);
        })
      );
    }
    if (sortBy === "mostRecent" || sortBy === "default") {
      let recent = [...apiJokes].sort((a, b) => b.id - a.id);
      return (
        !!apiJokes &&
        recent.map((joke, ind) => {
          return returnJoke(joke, ind);
        })
      );
    }
    if (sortBy === "topRated") {
      let topRated = [...apiJokes];
      return (
        !!apiJokes &&
        topRated
          .sort((a, b) => b.rating - a.rating)
          .map((joke, ind) => {
            return returnJoke(joke, ind);
          })
      );
    }
  };

  const handleSort = e => {
    e.preventDefault();
    const { value } = e.target;
    setSortBy(value);
  };

  return (
    <div className="jokes-container">
      {!isSearching ? (
        <>
          <h2>Random Joke</h2>
          <PulseLoader loading={loadingJokes} />
          {!!apiJokes && <JokeOfDay {...props} jokes={apiJokes} />}
          <AddJokeModal />
          <div className="recent-sort-container">
            {getPageTitle()}
            <select
              className="select-input"
              name="sortBy"
              value={sortBy}
              onChange={handleSort}
            >
              <option value="default">Sort By</option>
              <option value="mostPopular">Most Popular</option>
              <option value="mostRecent">Most Recent</option>
              <option value="topRated">Top Rated</option>
            </select>
          </div>
          {!!apiJokes && !isSearching && getJokeContent()}
          <PulseLoader loading={loadingJokes} />
        </>
      ) : (
        <>
          <AddJokeModal />
          {!!apiJokes &&
            searchResponse.map((joke, ind) => returnJoke(joke, ind))}
        </>
      )}
    </div>
  );
};

const mapStateToProps = ({
  jokesReducer: { jokes, isSearching, searchResponse, loadingJokes }
}) => ({
  apiJokes: jokes,
  isSearching,
  searchResponse,
  loadingJokes
});

export default connect(mapStateToProps, {})(JokesList);
