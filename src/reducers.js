/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import counterReducer from './containers/CounterContainer/reducer';
// import languageProviderReducer from './containers/LanguageProvider/reducer';


/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    // language: languageProviderReducer,
    counter: counterReducer,
    ...injectedReducers,
  });

  return rootReducer;
}
