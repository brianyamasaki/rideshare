import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { 
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGOUT,
  EMAIL_CHANGED,
  PASSWORD_CHANGED
 } from './types.js';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(response => {
        loginUserFail(dispatch, response);
      });
    };
};
const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });

  Actions.main();
};

const loginUserFail = (dispatch, response) => {
  console.log(response);
  dispatch({ 
    type: LOGIN_USER_FAIL,
    payload: response.message
  });
};

export const logout = () => {
  firebase.auth().signOut();
  Actions.auth();
  return {
    type: LOGOUT
  };
};
