import { INCREMENT, DECREMENT } from './counterConstant';

export const initialState = {
  counter: 0,
};

export default function counterContainerReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREMENT:
      return {
        ...state,
        counter: state.counter > 0 ? state.counter - 1 : 0,
      };
    default:
      return state;
  }
}
