import { ADD_NOTE, DELETE_NOTE } from '../actions';
import initialState from '../initialState';

export default function notes(state = initialState.notes, action) {
  switch (action.type) {
    case ADD_NOTE: return state.set(Symbol(Math.random()), action.note);
    case DELETE_NOTE: return { a: 2 };

    default: return state;
  }
}
