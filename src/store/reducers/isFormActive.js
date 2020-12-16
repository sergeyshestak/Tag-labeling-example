import { IS_ACTIVE, CHANGE_SRC } from '../actions';
import initialState from '../initialState';

export default function formVisibility(state = initialState.isFormActive, action) {
  switch (action.type) {
    case IS_ACTIVE: return action.isFormActive;
    case CHANGE_SRC: return false;

    default: return state;
  }
}
