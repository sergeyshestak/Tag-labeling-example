import { combineReducers } from 'redux';
import notes from './notes';
import isActive from './isActive';

const reducers = combineReducers({
  notes,
  isActive,
});

export default reducers;
