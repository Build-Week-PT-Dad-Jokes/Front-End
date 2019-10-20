import { LOGIN_USER } from "../actions";

const initialState = {
    token: localStorage.getItem('token'),
    userID: null,
    username: null
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        token: action.payload.token,
        userID: action.payload.userID,
        username: action.payload.username
      }
    default:
      return state;
  }
};
