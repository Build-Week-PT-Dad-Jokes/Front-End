import {  SET_JOKES, TOGGLE_SEARCHING } from '../actions'

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
    case TOGGLE_SEARCHING:
      return {
        ...state,
        isSearching: !state.isSearching
      }
    default:
      return state;
  }
}