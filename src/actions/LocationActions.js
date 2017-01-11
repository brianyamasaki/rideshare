import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { 
  LOCATION_LIST,
  LOCATION_DETAILS,
  LOCATION_CREATE,
  LOCATIONS_FETCH_SUCCESS,
  LOCATION_SAVE_SUCCESS
 } from './types.js';

export const locationList = (eventId) => {
  Actions.locations();
  return {
    type: LOCATION_LIST,
    payload: eventId
  };
};

export const locationDetails = (eventId) => {
  Actions.locationDetails();
  return { 
    type: LOCATION_DETAILS,
    payload: eventId
  };
};

export const locationCreate = ({ name, description, address1, address2, city, state }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/locations`)
      .push({ name, description, address1, address2, city, state })
      .then(() => {
        dispatch({ type: LOCATION_CREATE });
        Actions.locationList({ type: 'reset' });
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

export const locationSave = ({ name, description, address1, address2, city, state, uid }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/locations/${uid}`)
      .set({ name, description, address1, address2, city, state })
      .then(() => {
        Actions.locationList({ type: 'reset' });
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
        Actions.locationList({ type: 'reset' });
    });
  };
};
