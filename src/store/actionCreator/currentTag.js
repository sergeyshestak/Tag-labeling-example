import { CHANGE_CURRENT_TAG } from '../actions';

export default function currentTag(value) {
  return {
    type: CHANGE_CURRENT_TAG,
    currentTag: value,
  };
}
