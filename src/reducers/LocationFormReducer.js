import {
  LOCATION_UPDATE,
  LOCATION_CREATE,
  LOCATION_SAVE_SUCCESS,
  LOCATION_FORM_CANCEL
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  description: '',
  address1: '',
  city: '',
  state: '',
  latitude: '',
  longitude: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOCATION_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case LOCATION_CREATE:
      return INITIAL_STATE;
    case LOCATION_SAVE_SUCCESS:
      return INITIAL_STATE;
    case LOCATION_FORM_CANCEL:
      return INITIAL_STATE;
    default:
      return state;
  }
};
