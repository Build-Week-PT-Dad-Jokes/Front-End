import { LOGIN_USER, SET_TOKEN } from "../actions";

const initialState = {
  token: localStorage.getItem("token"),
  user: {
    id: localStorage.getItem("userID"),
    username: "",
    email: "",
    jokes: null,
    date_created: "",
    favorites: null,
  }
};

export const userReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case LOGIN_USER:
      return {
        ...state,
        user: {
          date_created: payload.date_created,
          email: payload.email,
          id: payload.id,
          jokes: payload.jokes,
          username: payload.username,
          favorites: payload.favorite_jokes
        }
      };
    case SET_TOKEN:
      return {
        ...state,
        token: payload
      }
    default:
      return state;
  }
};
