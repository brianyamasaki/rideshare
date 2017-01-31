import {
  CARS_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  cars: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CARS_FETCH_SUCCESS:
      return {
        ...state,
        cars: action.payload
      };
    default:
      return state;
  }
};
