export const LOGIN_USER = "LOGIN_USER";
export const SET_JOKES = "SET_JOKES";
export const TOGGLE_SEARCHING = "TOGGLE_SEARCHING";

export const loginUser = creds => ({
  type: LOGIN_USER, payload: creds
})

export const setJokes = jokes => ({
  type: SET_JOKES, payload: jokes
})

export const toggeSearching = searchResponse => ({
  type: TOGGLE_SEARCHING, payload: searchResponse
})