import axiosWithAuth from "../utils/axiosWithAuth";

export const SET_TOKEN = "SET_TOKEN";
export const LOGIN_USER = "LOGIN_USER";
export const SIGN_OUT = "SIGN_OUT";

export const SET_JOKES = "SET_JOKES";
export const SEARCH_RESPONSE = "SEARCH_RESPONSE";
export const SET_IS_SEARCHING = "SET_IS_SEARCHING";
export const LOADING_JOKES = "LOADING_JOKES";

// User Actions

export const setUserWithCreds = creds => {
  localStorage.setItem("token", creds.token);
  localStorage.setItem("userID", creds.user.id);
  loginUser();
  return { type: SET_TOKEN, payload: creds.token };
};

export const loginUser = () => dispatch => {
  axiosWithAuth()
    .get(`/users/${localStorage.getItem("userID")}`)
    .then(res => {
      dispatch({ type: LOGIN_USER, payload: res.data });
    })
    .catch(err => console.error(err.response));
};

export const signOut = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userID");
  return { type: SIGN_OUT };
};

// Jokes Actions

export const setJokes = () => dispatch => {
  dispatch({ type: LOADING_JOKES });
  axiosWithAuth()
    .get("/jokes")
    .then(resp => {
      const filteredPublic = resp.data.filter(ele => !ele.private);
      dispatch({ type: SET_JOKES, payload: filteredPublic });
    })
    .catch(err => console.log(err));
};

export const setSearchResponse = response => ({
  type: SEARCH_RESPONSE,
  payload: response
});

export const endSearch = () => ({
  type: SET_IS_SEARCHING
});
