import { 
  LAYOUT_CHANGED
} from '../actions/types.js';

const INITIAL_STATE = {
  layout: {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LAYOUT_CHANGED:
      console.log(action.payload);
      return { ...state, layout: action.payload };
    default:
      return state;
  }
};
