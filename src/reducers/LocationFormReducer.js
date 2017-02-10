import {
  LOCATION_UPDATE,
  LOCATION_UPDATE_ALL,
  LOCATION_CREATE,
  LOCATION_SAVE_SUCCESS,
  LOCATION_FORM_CANCEL,
  LOCATION_GEOCODE_SUBMIT,
  LOCATION_GEOCODE_SUCCESS,
  LOCATION_GEOCODE_FAIL
} from '../actions/types';

const INITIAL_STATE = {
  id: '',
  name: '',
  description: '',
  address1: '',
  city: '',
  state: '',
  latitude: '',
  longitude: '',
  viewport: '',
  errorMsg: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  let payload;
  switch (action.type) {
    case LOCATION_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case LOCATION_UPDATE_ALL:
      payload = action.payload;
      return { 
        ...state,
        id: payload.id,
        name: payload.name,
        description: payload.description,
        address1: payload.address1,
        city: payload.city,
        state: payload.state,
        latitude: payload.latitude || '',
        longitude: payload.longitude || '',
        viewport: payload.viewport || ''
      };
    case LOCATION_CREATE:
      return INITIAL_STATE;
    case LOCATION_SAVE_SUCCESS:
      return INITIAL_STATE;
    case LOCATION_FORM_CANCEL:
      return INITIAL_STATE;
    case LOCATION_GEOCODE_SUBMIT:
      return {
        ...state,
        loading: true,
        errorMsg: ''
      };
    case LOCATION_GEOCODE_SUCCESS:
      payload = action.payload;
      return {
        ...state,
        loading: false,
        errorMsg: '',
        latitude: payload.location.lat,
        longitude: payload.location.lng,
        viewport: payload.viewport
      };
    case LOCATION_GEOCODE_FAIL:
      return {
        ...state,
        loading: false,
        errorMsg: action.payload
      };
    default:
      return state;
  }
};
