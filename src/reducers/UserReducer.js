import useSetInStorage from '../hooks/useSetInStorage';

import { LOGIN_USER } from "../actions";

const initialState = {
    token: localStorage.getItem('token'),
    userID: null,
    username: null
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      const [token, setToken] = useSetInStorage("token");
      setToken(action.payload.token);

      return {
        ...state,
        token: token,
        userID: action.payload.userID,
        username: action.payload.username
      }
    default:
      return state;
  }
};
