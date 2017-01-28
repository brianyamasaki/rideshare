import { LAYOUT_CHANGED } from './types';

export const layoutChangedAction = (layout) => {
  return {
    type: LAYOUT_CHANGED,
    payload: layout
  };
};
