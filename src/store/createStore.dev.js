import {createStore as createReduxStore, compose} from 'redux';
import rootReducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const createStore = initialState => {
  return createReduxStore(rootReducer, initialState, composeEnhancers());
};

export default createStore;