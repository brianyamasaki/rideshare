import {
  PARTICIPANT_UPDATE,
  PARTICIPANT_CREATE,
  PARTICIPANT_SAVE_SUCCESS
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
      console.log(action.payload.prop, action.payload.value);
      return { ...state, [action.payload.prop]: action.payload.value };
    case PARTICIPANT_CREATE:
      return INITIAL_STATE;
    case PARTICIPANT_SAVE_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
