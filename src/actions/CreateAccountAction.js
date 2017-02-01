import {
  CREATE_ACCOUNT_EMAIL_CHANGED,
  CREATE_ACCOUNT_PASSWORD_CHANGED,
  CREATE_ACCOUNT_CONFIRM_PASSWORD_CHANGED,
  CREATE_ACCOUNT_SUBMIT,
  CREATE_ACCOUNT_FAIL,
  CREATE_ACCOUNT_SUCCESS,
  CREATE_ACCOUNT_CANCEL
} from './types';

export const createAccountEmailChange = (email) => {
  return {
    type: CREATE_ACCOUNT_EMAIL_CHANGED,
    payload: email
  };
};

export const createAccountPasswordChange = (password) => {
  return {
    type: CREATE_ACCOUNT_PASSWORD_CHANGED,
    payload: password
  };
};

export const createAccountConfirmPasswordChange = (password) => {
  return {
    type: CREATE_ACCOUNT_CONFIRM_PASSWORD_CHANGED,
    payload: password
  };
};

export const createAccountSubmit = () => {
  return {
    type: CREATE_ACCOUNT_SUBMIT
  };
};

export const createAccountCancel = () => {
  return {
    type: CREATE_ACCOUNT_CANCEL
  };
};
