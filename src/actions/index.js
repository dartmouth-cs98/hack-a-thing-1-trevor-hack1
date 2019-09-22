// keys for actiontypes
export const ActionTypes = {
  SIGNIN: 'SIGNIN',
  SIGNUP: 'SIGNUP',
  SIGNOUT: 'SIGNOUT',
  AUTH_ERROR: 'AUTH_ERROR',
};


export function signInUser() {
  return {
    type: ActionTypes.SIGNIN,
    payload: null,
  };
}

export function signUpUser() {
  return {
    type: ActionTypes.SIGNUP,
    payload: null,
  };
}


export function signOutUser() {
  return {
    type: ActionTypes.DECREMENT,
    payload: null,
  };
}
