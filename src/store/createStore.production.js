import {createStore as createReduxStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import {browserHistory} from 'react-router';
import createHistory from 'history/createBrowserHistory';
import {routerMiddleware} from 'react-router-redux';

import rootReducer from './reducers';

export const history = createHistory();

export const createStore = initialState => createReduxStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk, routerMiddleware(history))
);
export default createStore;