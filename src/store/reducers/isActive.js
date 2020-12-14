import { IS_ACTIVE } from '../actions';
import initialState from '../initialState';

export default function isActive(state = initialState.isNoteFormActive, action) {
  switch (action.type) {
    case IS_ACTIVE: return !state;

    default: return state;
  }
}
