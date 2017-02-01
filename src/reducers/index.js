import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ParticipantFormReducer from './ParticipantFormReducer';
import Participants from './ParticipantsReducer';
import EventsReducer from './EventsReducer';
import EventFormReducer from './EventFormReducer';
import CarsReducer from './CarsReducer';
import CarFormReducer from './CarFormReducer';
import AppReducer from './AppReducer';
import CreateAccountReducer from './CreateAccountReducer';

export default combineReducers({
  app: AppReducer,
  auth: AuthReducer,
  createAccount: CreateAccountReducer,
  participant: ParticipantFormReducer,
  participants: Participants,
  events: EventsReducer,
  event: EventFormReducer,
  cars: CarsReducer,
  car: CarFormReducer
});
