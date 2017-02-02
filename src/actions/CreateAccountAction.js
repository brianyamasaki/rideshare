import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
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

export const createAccountSubmit = (email, password) => {
  return (dispatch) => {
    dispatch({
      type: CREATE_ACCOUNT_SUBMIT
    });
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => {
        createAccountSuccess(dispatch, user);
      })
      .catch(response => {
        createAccountFail(dispatch, response);
      });
  };
};

export const createAccountSuccess = (dispatch, user) => {
  Actions.main();
  dispatch({
    type: CREATE_ACCOUNT_SUCCESS,
    payload: user
  });
};

export const createAccountFail = (dispatch, response) => {
  dispatch({
    type: CREATE_ACCOUNT_FAIL,
    payload: response.message
  });
};

export const createAccountCancel = () => {
  return {
    type: CREATE_ACCOUNT_CANCEL
  };
};
