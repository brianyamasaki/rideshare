import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ParticipantFormReducer from './ParticipantFormReducer';
import Participants from './ParticipantsReducer';

export default combineReducers({
  auth: AuthReducer,
  participant: ParticipantFormReducer,
  participants: Participants
});
