import {createStore as createReduxStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import {browserHistory} from 'react-router';
import createHistory from 'history/createBrowserHistory';
import {routerMiddleware} from 'react-router-redux';

import rootReducer from './reducers';

export const history = createHistory();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const createStore = initialState => createReduxStore(
  rootReducer,
  initialState,
  composeEnhancers(
    applyMiddleware(thunk, routerMiddleware(history))
  )
);
export default createStore;