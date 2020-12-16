import { CHANGE_SRC } from '../actions';

export default function changeSrc(value) {
  return {
    type: CHANGE_SRC,
    src: value,
  };
}
