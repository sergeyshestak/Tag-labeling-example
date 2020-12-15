import { DELETE_NOTE } from '../actions';

export default function deleteNote(value) {
  return {
    type: DELETE_NOTE,
    notes: value,
  };
}
