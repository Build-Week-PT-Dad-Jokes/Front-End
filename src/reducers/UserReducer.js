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
          date_created: payload.user.date_created,
          email: payload.user.email,
          id: payload.user.id,
          jokes: payload.user.jokes,
          username: payload.user.username,
          favorites: payload.user.favorites
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
