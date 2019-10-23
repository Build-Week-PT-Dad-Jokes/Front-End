export const LOGIN_USER = "LOGIN_USER";

export const loginUser = creds => ({
  type: LOGIN_USER, payload: creds
})