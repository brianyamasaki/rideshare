import { 
  LOCATIONS_FETCH_SUCCESS
  } from '../actions/types';

const INITIAL_STATE = {
  locations: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOCATIONS_FETCH_SUCCESS:
      return {
        INITIAL_STATE,
        locations: action.payload
      };
    default:
      return state;
  }
};
