import firebase from 'firebase';
import { Actions, ActionConst } from 'react-native-router-flux';
import axios from 'react-native-axios';
import { 
  LOCATION_LIST,
  LOCATION_DETAILS,
  LOCATION_UPDATE,
  LOCATION_UPDATE_ALL,
  LOCATION_FORM_CANCEL,
  LOCATION_CREATE,
  LOCATIONS_FETCH_SUCCESS,
  LOCATION_SAVE_SUCCESS,
  LOCATION_GEOCODE_SUBMIT,
  LOCATION_GEOCODE_FAIL,
  LOCATION_GEOCODE_SUCCESS
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

export const locationUpdateAll = (id, name, description, address1, city, state) => {
  return {
    type: LOCATION_UPDATE_ALL,
    payload: {
      id,
      name,
      description,
      address1,
      city,
      state
    }
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

export const locationSave = ({ name, description, address1, city, state, id }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/locations/${id}`)
      .set({ name, description, address1, city, state })
      .then(() => {
        Actions.locations({ type: ActionConst.BACK });
        dispatch({ type: LOCATION_SAVE_SUCCESS });
    });
  };
};

export const locationDelete = ({ id }) => {
  const { currentUser } = firebase.auth();
  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/locations/${id}`)
      .remove()
      .then(() => {
        Actions.locations({ type: ActionConst.BACK });
    });
  };
};

export const locationGetGeocode = (address1, city, state) => {
  let addressStr = `${address1}, ${city}, ${state}`;
  addressStr = addressStr.replace(/ /g, '+');
  return (dispatch) => {
    dispatch({
      type: LOCATION_GEOCODE_SUBMIT
    });
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${addressStr}&key=AIzaSyCBpY0tF_VnWwntensXhv7BE2TCNN1kuuY`)
      .then(result => {
        locationGeocodeSuccess(dispatch, result);
      })
      .catch(error => {
        console.log(error);
      });
  };
};

const locationGeocodeSuccess = (dispatch, result) => {
  let results;
  let geometry;
  if (result && result.data && result.data.results) {
    results = result.data.results;
    if (results.length > 0) {
      geometry = results[0].geometry;
      dispatch({
        type: LOCATION_GEOCODE_SUCCESS,
        payload: geometry
      });
    }
  }
};

const locationGeocodeFail = (dispatch, errorMsg) => {
  dispatch({
    type: LOCATION_GEOCODE_FAIL,
    payload: errorMsg
  });
};
