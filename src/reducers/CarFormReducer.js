import {
  CAR_UPDATE,
  CAR_CREATE,
  CAR_FORM_CANCEL
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  seats: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CAR_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case CAR_CREATE:
      return INITIAL_STATE;
    case CAR_FORM_CANCEL:
      return INITIAL_STATE;
    default:
      return state;
  }
};
