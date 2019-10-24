import {  SET_JOKES, SEARCH_RESPONSE, SET_IS_SEARCHING } from '../actions'

const initialState = {
  jokes: null,
  isSearching: false,
  searchResponse: null
}

export const jokesReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_JOKES:
      return {
        ...state,
        jokes: payload
      }
    case SEARCH_RESPONSE:
      return {
        ...state,
        searchResponse: payload,
        isSearching: true
      }
    case SET_IS_SEARCHING:
      return {
        ...state,
        isSearching: false,
        searchResponse: null
      }
    default:
      return state;
  }
}