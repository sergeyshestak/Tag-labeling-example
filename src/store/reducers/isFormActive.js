import { IS_ACTIVE } from '../actions';
import initialState from '../initialState';

export default function formVisibility(state = initialState.isFormActive, action) {
  switch (action.type) {
    case IS_ACTIVE: return action.isFormActive;

    default: return state;
  }
}
