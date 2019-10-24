import { LOGIN_USER } from "../actions";

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
        token: payload.token,
        user: {
          date_created: payload.user.date_created,
          email: payload.user.email,
          id: payload.user.id,
          jokes: payload.user.jokes,
          username: payload.user.username,
          favorites: payload.user.favorites
        }
      };
    default:
      return state;
  }
};
