import { IS_ACTIVE } from '../actions';

export default function formVesibility(value) {
  return {
    type: IS_ACTIVE,
    isFormActive: value,
  };
}
