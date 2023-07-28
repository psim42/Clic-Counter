import counterContainerReducer, { initialState } from '../src/containers/CounterContainer/reducer';
import { INCREMENT, DECREMENT } from '../src/containers/CounterContainer/counterConstant';

describe('test counter logic', () => {
  it('should return the initial state', () => {
    const initialStateResult = counterContainerReducer(undefined, {});
    expect(initialStateResult).toEqual(initialState);
  })

  it('should increase the counter by 1 after the INCREMENT action', () => {
    const currentState = { counter: 0 };
    const action = { type: INCREMENT };
    const newState = counterContainerReducer(currentState, action);

    expect(newState).toEqual({ counter: 1 });
  })

  it('should decrease the counter by 1 after the DECREMENT action, if counter > 0', () => {
    const currentState = { counter: 2 };
    const action = { type: DECREMENT };
    const newState = counterContainerReducer(currentState, action);

    expect(newState).toEqual({ counter: 1 });
  })

  it('should should not decrease the counter after the DECREMENT action if the counter is already at 0', () => {
    const currentState = { counter: 0 };
    const action = { type: DECREMENT };
    const newState = counterContainerReducer(currentState, action);

    expect(newState).toEqual({ counter: 0 });
  })
})