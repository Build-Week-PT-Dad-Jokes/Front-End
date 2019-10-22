import { LOGIN_USER } from "../actions";

const initialState = {
  token: localStorage.getItem("token"),
  user: {
    id: null,
    username: "",
    email: "",
    jokes: [],
    date_created: ""
  }
};

export const userReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case LOGIN_USER:
      return {
        ...state,
        token: payload.token,
        user: {
          ...state.user,
          date_created: payload.user.date_created,
          email: payload.user.email,
          id: payload.user.id,
          jokes: payload.user.jokes,
          username: payload.user.username,
        }
      };
    default:
      return state;
  }
};
