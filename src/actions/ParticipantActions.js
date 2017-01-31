import firebase from 'firebase';
import { Actions, ActionConst } from 'react-native-router-flux';
import { 
  PARTICIPANT_LIST,
  PARTICIPANT_DETAILS,
  PARTICIPANT_CREATE,
  PARTICIPANT_UPDATE,
  PARTICIPANTS_FETCH_SUCCESS,
  PARTICIPANT_SAVE_SUCCESS,
  PARTICIPANT_FORM_CANCEL
 } from './types.js';

export const participantList = (eventId) => {
  Actions.participants();
  return {
    type: PARTICIPANT_LIST,
    payload: eventId
  };
};

export const participantDetails = (eventId) => {
  Actions.participantDetails();
  return { 
    type: PARTICIPANT_DETAILS,
    payload: eventId
  };
};

export const participantUpdate = ({ prop, value }) => {
  return {
    type: PARTICIPANT_UPDATE,
    payload: { prop, value }
  };
};

export const participantFormCancel = () => {
  return {
    type: PARTICIPANT_FORM_CANCEL
  };
};

export const participantCreate = ({ firstname, lastname, phone, email }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/participants`)
      .push({ firstname, lastname, phone, email })
      .then(() => {
        dispatch({ type: PARTICIPANT_CREATE });
        Actions.participants({ type: ActionConst.BACK });
      })
      .catch((result) => {
        console.error(result);
      });
  };
};

export const participantsFetch = () => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`users/${currentUser.uid}/participants`)
      .on('value', snapshot => {
        dispatch({ 
          type: PARTICIPANTS_FETCH_SUCCESS, 
          payload: snapshot.val() 
        });
      });
  };
};

export const participantSave = ({ firstname, lastname, phone, email, id }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/participants/${id}`)
      .set({ firstname, lastname, phone, email })
      .then(() => {
        Actions.participants({ type: ActionConst.BACK });
        dispatch({ type: PARTICIPANT_SAVE_SUCCESS });
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const participantDelete = ({ id }) => {
  const { currentUser } = firebase.auth();
  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/participants/${id}`)
      .remove()
      .then(() => {
        Actions.participants({ type: ActionConst.BACK });
      })
      .catch(error => {
        console.error(error);
      });
  };
};
