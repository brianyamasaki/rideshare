import firebase from 'firebase';
import { Actions, ActionConst } from 'react-native-router-flux';
import axios from 'react-native-axios';
import { 
  EVENT_LIST,
  EVENT_DETAILS,
  EVENT_UPDATE,
  EVENT_CREATE,
  EVENTS_FETCH_SUCCESS,
  EVENT_SAVE_SUCCESS,
  EVENT_FORM_CANCEL,
  EVENT_CARS_CHANGE,
  EVENT_PARTICIPANTS_CHANGE
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

export const eventCreate = ({ name, description, date, cars, participants }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/events`)
      .push({ name, description, date, cars, participants })
      .then(() => {
        dispatch({ type: EVENT_CREATE });
        Actions.events({ type: 'back' });
      });
  };
};

export const eventsFetch = () => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`users/${currentUser.uid}/events`)
      .orderByChild('date')
      .on('value', snapshot => {
        dispatch({ 
          type: EVENTS_FETCH_SUCCESS, 
          payload: snapshot.val() 
        });
      });
  };
};

export const eventSave = ({ 
  name, 
  description, 
  date, 
  cars, 
  participants, 
  id }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/events/${id}`)
      .set({ name, description, date, cars, participants })
      .then(() => {
        Actions.events({ type: ActionConst.BACK });
        dispatch({ type: EVENT_SAVE_SUCCESS });
    });
  };
};

export const eventGeocode = (address1, address2, city, state) => {
  let addressStr = `${address1}, ${city}, ${state}`;
  addressStr = addressStr.replace(/ /g, '+');
  return () => {
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${addressStr}&key=AIzaSyCBpY0tF_VnWwntensXhv7BE2TCNN1kuuY`)
      .then(result => {
        console.log(result.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const eventDelete = ({ id }) => {
  const { currentUser } = firebase.auth();
  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/events/${id}`)
      .remove()
      .then(() => {
        Actions.events({ type: ActionConst.BACK });
    });
  };
};

export const eventCarsCheckAction = (id, checked) => {
  return {
    type: EVENT_CARS_CHANGE,
    payload: {
      id,
      checked
    }
  };
};

export const eventParticipantsCheckAction = (id, checked) => {
  return {
    type: EVENT_PARTICIPANTS_CHANGE,
    payload: {
      id,
      checked
    }
  };
};
