import axiosWithAuth from '../utils/axiosWithAuth';

export const SET_TOKEN = "SET_TOKEN";
export const LOGIN_USER = "LOGIN_USER";

export const SET_JOKES = "SET_JOKES";
export const SEARCH_RESPONSE = "SEARCH_RESPONSE";
export const SET_IS_SEARCHING = "SET_IS_SEARCHING";

// User Actions

export const setUserWithCreds = creds => {
  localStorage.setItem("token", creds.token);
  localStorage.setItem("userID", creds.user.id);
  loginUser()
  return { type: SET_TOKEN, payload: creds.token };
};

// export const loginUser = user => {
//   console.log(user)
//   return { type: LOGIN_USER, payload: user };
// };

export const loginUser = () => dispatch => {
  axiosWithAuth()
    .get(`/users/${localStorage.getItem("userID")}`)
    .then(res => {
      dispatch({ type: LOGIN_USER, payload: res.data });
    })
    .catch(err => console.error(err.response));
};

// Jokes Actions

export const setJokes = jokes => ({
  type: SET_JOKES,
  payload: jokes
});

export const setSearchResponse = response => ({
  type: SEARCH_RESPONSE,
  payload: response
});

export const endSearch = () => ({
  type: SET_IS_SEARCHING
});
