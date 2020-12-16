import { ADD_NOTE, DELETE_NOTE, CHANGE_SRC } from '../actions';
import initialState from '../initialState';

export default function note(state = initialState.notes, action) {
  switch (action.type) {
    case ADD_NOTE: return [...state, action.note];
    case DELETE_NOTE: return [...action.notes];
    case CHANGE_SRC: return [];

    default: return state;
  }
}
