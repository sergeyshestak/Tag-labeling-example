import { CHANGE_SRC } from '../actions';
import initialState from '../initialState';

export default function src(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SRC: return action.src;

    default: return state;
  }
}
