import { ActionTypes } from '../actions';

const AuthReducer = (state = {
  signedIn: false,
  error: '',
}, action) => {
  switch (action.type) {
    case ActionTypes.SIGNIN:
      return Object.assign({}, state, { signedIn: true, error: '' });
    case ActionTypes.SIGNOUT:
      return Object.assign({}, state, { signedIn: false, error: '' });
    case ActionTypes.SIGNUP:
      return Object.assign({}, state, { signedIn: true, error: '' });
    case ActionTypes.AUTH_ERROR:
      return Object.assign({}, state, { signedIn: false, error: action.message });
    default:
      return state;
  }
};

export default AuthReducer;
