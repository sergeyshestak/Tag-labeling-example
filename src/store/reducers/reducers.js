import { combineReducers } from 'redux';
import notes from './notes';
import isFormActive from './isFormActive';
import currentTag from './currentTag';

const reducers = combineReducers({
  currentTag,
  notes,
  isFormActive,
});

export default reducers;
