import { createSelector } from 'reselect';
import { initialState } from '../CounterContainer/reducer';

const selectHomeContainerDomain = state => state.homeContainer || initialState;
const makeSelectHomeContainerCounter = () => createSelector(selectHomeContainerDomain, substate => substate.counter);

export {
  makeSelectHomeContainerCounter,
};
