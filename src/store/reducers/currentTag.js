import { CHANGE_CURRENT_TAG, CHANGE_SRC } from '../actions';
import initialState from '../initialState';

export default function currentTag(state = initialState.currentTag, action) {
  switch (action.type) {
    case CHANGE_CURRENT_TAG: return action.currentTag;
    case CHANGE_SRC: return '';

    default: return state;
  }
}
