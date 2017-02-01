import { 
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  LOGOUT
 } from '../actions/types.js';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  errorMsg: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER_SUCCESS:
      return {
         ...state, 
         ...INITIAL_STATE,
         user: action.payload, 
        };
    case LOGIN_USER_FAIL:
      return {
         ...state, 
         errorMsg: 'Authentication Failed', 
         password: '',
         loading: false
        };
    case LOGIN_USER:
      return {
         ...state, 
        loading: true, 
        errorMsg: '' 
      };
    case LOGOUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};
