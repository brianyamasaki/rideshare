import {
  EVENT_UPDATE,
  EVENT_CREATE,
  EVENT_SAVE_SUCCESS,
  EVENT_FORM_CANCEL
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  description: '',
  date: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EVENT_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case EVENT_CREATE:
      return INITIAL_STATE;
    case EVENT_SAVE_SUCCESS:
      return INITIAL_STATE;
    case EVENT_FORM_CANCEL:
      return INITIAL_STATE;
    default:
      return state;
  }
};
