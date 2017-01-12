import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { 
  EVENT_LIST,
  EVENT_DETAILS,
  EVENT_UPDATE,
  EVENT_CREATE,
  EVENTS_FETCH_SUCCESS,
  EVENT_SAVE_SUCCESS,
  EVENT_FORM_CANCEL
 } from './types.js';

// Go to Event list page
export const eventList = () => {
  Actions.events();
  return {
    type: EVENT_LIST
  };
};

// Go to Event Details page
export const eventDetails = (eventId) => {
  Actions.eventDetails();
  return { 
    type: EVENT_DETAILS,
    payload: eventId
  };
};

export const eventUpdate = ({ prop, value }) => {
  return {
    type: EVENT_UPDATE,
    payload: { prop, value }
  };
};

export const eventFormCancel = () => {
  return {
    type: EVENT_FORM_CANCEL
  };
};

export const eventCreate = ({ name, description, date }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/events`)
      .push({ name, description, date })
      .then(() => {
        dispatch({ type: EVENT_CREATE });
        Actions.events({ type: 'reset' });
      });
  };
};

export const eventsFetch = () => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`users/${currentUser.uid}/events`)
      .on('value', snapshot => {
        dispatch({ 
          type: EVENTS_FETCH_SUCCESS, 
          payload: snapshot.val() 
        });
      });
  };
};

export const eventSave = ({ name, description, date, uid }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/events/${uid}`)
      .set({ name, description, date })
      .then(() => {
        Actions.employeeList({ type: 'reset' });
        dispatch({ type: EVENT_SAVE_SUCCESS });
    });
  };
};

export const eventDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();
  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/events/${uid}`)
      .remove()
      .then(() => {
        Actions.employeeList({ type: 'reset' });
    });
  };
};
