import firebase from 'firebase';
import { Actions, ActionConst } from 'react-native-router-flux';
import { 
  CAR_LIST,
  CAR_DETAILS,
  CAR_UPDATE,
  CAR_CREATE,
  CARS_FETCH_SUCCESS,
  CAR_FORM_CANCEL
 } from './types.js';

// Go to Event list page
export const carList = () => {
  Actions.cars();
  return {
    type: CAR_LIST
  };
};

// Go to Event Details page
export const carDetails = (eventId) => {
  Actions.carDetails();
  return { 
    type: CAR_DETAILS,
    payload: eventId
  };
};

export const carUpdate = ({ prop, value }) => {
  return {
    type: CAR_UPDATE,
    payload: { prop, value }
  };
};

export const carFormCancel = () => {
  return {
    type: CAR_FORM_CANCEL
  };
};

export const carCreate = ({ name, seats }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/cars`)
      .push({ name, seats })
      .then(() => {
        dispatch({ type: CAR_CREATE });
        Actions.cars({ type: ActionConst.BACK });
      });
  };
};

export const carsFetch = () => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`users/${currentUser.uid}/cars`)
      .on('value', snapshot => {
        dispatch({ 
          type: CARS_FETCH_SUCCESS, 
          payload: snapshot.val() 
        });
      });
  };
};

export const carSave = ({ name, seats, uid }) => {
  const { currentUser } = firebase.auth();
  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/cars/${uid}`)
      .set({ name, seats })
      .then(() => {
        Actions.cars({ type: ActionConst.BACK });
    });
  };
};

export const carDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();
  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/cars/${uid}`)
      .remove()
      .then(() => {
        Actions.cars({ type: ActionConst.BACK });
    });
  };
};
