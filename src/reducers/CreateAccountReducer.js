import {
  CREATE_ACCOUNT_EMAIL_CHANGED,
  CREATE_ACCOUNT_PASSWORD_CHANGED,
  CREATE_ACCOUNT_CONFIRM_PASSWORD_CHANGED,
  CREATE_ACCOUNT_SUBMIT,
  CREATE_ACCOUNT_FAIL,
  CREATE_ACCOUNT_SUCCESS,
  CREATE_ACCOUNT_CANCEL
} from '../actions/types';
import { emailValidator, confirmPasswords } from '../validation';

const INITIAL_STATE = {
  email: '',
  password: '',
  confirmPassword: '',
  errorMsg: '',
  loading: false,
  user: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_ACCOUNT_EMAIL_CHANGED:
      return {
        ...state,
        email: action.payload,
        errorMsg: emailValidator(action.payload)
      };
    case CREATE_ACCOUNT_PASSWORD_CHANGED:
      return {
        ...state,
        password: action.payload,
        errorMsg: confirmPasswords(action.payload, state.confirmPassword)
      };
    case CREATE_ACCOUNT_CONFIRM_PASSWORD_CHANGED:
      return {
        ...state,
        confirmPassword: action.payload,
        errorMsg: confirmPasswords(state.password, action.payload)
      };
    case CREATE_ACCOUNT_SUBMIT:
      return {
        ...state,
        errorMsg: '',
        loading: true
      };
    case CREATE_ACCOUNT_SUCCESS:
      return {
        ...state,
        errorMsg: '',
        loading: false,
        user: action.payload
      };
    case CREATE_ACCOUNT_FAIL:
      return {
        ...state,
        errorMsg: action.payload,
        loading: false
      };
    case CREATE_ACCOUNT_CANCEL:
      return INITIAL_STATE;
    default: 
      return state;
  }
};
