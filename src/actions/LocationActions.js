import firebase from 'firebase';
import { Actions, ActionConst } from 'react-native-router-flux';
import { 
  LOCATION_LIST,
  LOCATION_DETAILS,
  LOCATION_UPDATE,
  LOCATION_FORM_CANCEL,
  LOCATION_CREATE,
  LOCATIONS_FETCH_SUCCESS,
  LOCATION_SAVE_SUCCESS
 } from './types.js';

// navigate to locations page
export const locationList = (eventId) => {
  Actions.locations();
  return {
    type: LOCATION_LIST,
    payload: eventId
  };
};

// navigate to location details page 
export const locationDetails = (eventId) => {
  Actions.locationDetails();
  return { 
    type: LOCATION_DETAILS,
    payload: eventId
  };
};

export const locationFormCancel = () => {
  return {
    type: LOCATION_FORM_CANCEL
  };
};

export const locationUpdate = ({ prop, value }) => {
  return {
    type: LOCATION_UPDATE,
    payload: { prop, value }
  };
};

export const locationCreate = ({ name, description, address1, city, state }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/locations`)
      .push({ name, description, address1, city, state })
      .then(() => {
        dispatch({ type: LOCATION_CREATE });
        Actions.locations({ type: ActionConst.BACK });
    });
  };
};

export const locationsFetch = () => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`users/${currentUser.uid}/locations`)
      .on('value', snapshot => {
        dispatch({ 
          type: LOCATIONS_FETCH_SUCCESS, 
          payload: snapshot.val() 
        });
      });
  };
};

export const locationSave = ({ name, description, address1, city, state, uid }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/locations/${uid}`)
      .set({ name, description, address1, city, state })
      .then(() => {
        Actions.locations({ type: ActionConst.BACK });
        dispatch({ type: LOCATION_SAVE_SUCCESS });
    });
  };
};

export const locationDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();
  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/locations/${uid}`)
      .remove()
      .then(() => {
        Actions.locations({ type: ActionConst.BACK });
    });
  };
};
