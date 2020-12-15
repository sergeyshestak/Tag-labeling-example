import { CHANGE_CURRENT_TAG } from '../actions';
import initialState from '../initialState';

export default function currentTag(state = initialState.currentTag, action) {
  switch (action.type) {
    case CHANGE_CURRENT_TAG: return action.currentTag;

    default: return state;
  }
}
