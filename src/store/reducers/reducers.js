import { combineReducers } from 'redux';
import notes from './notes';
import isFormActive from './isFormActive';
import currentTag from './currentTag';
import src from './src';

const reducers = combineReducers({
  currentTag,
  notes,
  isFormActive,
  src,
});

export default reducers;
