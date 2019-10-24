export const LOGIN_USER = "LOGIN_USER";
export const SET_JOKES = "SET_JOKES";
export const SEARCH_RESPONSE = "SEARCH_RESPONSE";
export const SET_IS_SEARCHING = "SET_IS_SEARCHING";

export const loginUser = creds => ({
  type: LOGIN_USER, payload: creds
})

export const setJokes = jokes => ({
  type: SET_JOKES, payload: jokes
})

export const setSearchResponse = response => ({
  type: SEARCH_RESPONSE, payload: response
})

export const endSearch = () => ({
  type: SET_IS_SEARCHING
})