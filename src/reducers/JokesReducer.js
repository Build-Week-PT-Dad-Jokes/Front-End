import {
  SET_JOKES,
  SEARCH_RESPONSE,
  SET_IS_SEARCHING,
  LOADING_JOKES
} from "../actions";

const initialState = {
  jokes: null,
  loadingJokes: false,
  isSearching: false,
  searchResponse: null
};

export const jokesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING_JOKES:
      return {
        ...state,
        loadingJokes: true
      };
    case SET_JOKES:
      return {
        ...state,
        jokes: payload,
        loadingJokes: false
      };
    case SEARCH_RESPONSE:
      return {
        ...state,
        searchResponse: payload,
        isSearching: true
      };
    case SET_IS_SEARCHING:
      return {
        ...state,
        isSearching: false,
        searchResponse: null
      };
    default:
      return state;
  }
};
