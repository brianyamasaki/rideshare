import {
  EVENT_UPDATE,
  EVENT_CREATE,
  EVENT_SAVE_SUCCESS,
  EVENT_FORM_CANCEL,
  EVENT_CARS_CHANGE,
  EVENT_PARTICIPANTS_CHANGE
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  description: '',
  date: '',
  address1: '',
  address2: '',
  city: '',
  area: '',
  cars: [],
  participants: []
};

export default (state = INITIAL_STATE, action) => {
  let i;
  let participants;
  let cars;
  switch (action.type) {
    case EVENT_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case EVENT_CREATE:
      return INITIAL_STATE;
    case EVENT_SAVE_SUCCESS:
      return INITIAL_STATE;
    case EVENT_FORM_CANCEL:
      return INITIAL_STATE;
    case EVENT_CARS_CHANGE: 
      i = state.cars.indexOf(action.payload.id);

      if (i === -1 && action.payload.checked) {
        cars = state.cars.concat(action.payload.id);
      } else if (i !== -1 && !action.payload.checked) {
        cars = state.cars.filter(val => val !== action.payload.id);
      } else {
        // just copies the array
        cars = state.cars.slice();
      }
      return { 
        ...state,
        cars
      };
    case EVENT_PARTICIPANTS_CHANGE: 
      i = state.participants.indexOf(action.payload.id);
      
      if (i === -1 && action.payload.checked) {
        participants = state.participants.concat(action.payload.id);
      } else if (i !== -1 && !action.payload.checked) {
        participants = state.participants.filter(val => val !== action.payload.id);
      } else {
        // just copies the array
        participants = state.participants.slice();
      }
      return { 
        ...state,
        participants
      };
    default:
      return state;
  }
};
