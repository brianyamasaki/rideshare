import {
  PARTICIPANT_UPDATE,
  PARTICIPANT_CREATE,
  PARTICIPANT_SAVE_SUCCESS,
  PARTICIPANT_FORM_CANCEL
} from '../actions/types';

const INITIAL_STATE = {
  firstname: '',
  lastname: '',
  phone: '',
  email: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PARTICIPANT_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case PARTICIPANT_CREATE:
      return INITIAL_STATE;
    case PARTICIPANT_SAVE_SUCCESS:
      return INITIAL_STATE;
    case PARTICIPANT_FORM_CANCEL:
      return INITIAL_STATE;
    default:
      return state;
  }
};
