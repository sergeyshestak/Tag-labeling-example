import { ADD_NOTE } from '../actions';

export default function addNote(value) {
  return {
    type: ADD_NOTE,
    note: value,
  };
}
