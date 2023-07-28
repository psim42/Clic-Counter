import { INCREMENT, DECREMENT } from './counterConstant';

export function incrementAction() {
  return {
    type: INCREMENT,
  };
}

export function decrementAction() {
  return {
    type: DECREMENT,
  };
}
