const initialState = {
    token: localStorage.getItem('token'),
    userID: null,
    username: null
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
