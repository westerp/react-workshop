import {createStore as createReduxStore, applyMiddleware, compose} from "redux"
import thunk from "redux-thunk"

import createBrowserHistory from "history/createBrowserHistory"
import { connectRouter, routerMiddleware } from "connected-react-router"

import rootReducer from "./reducers"

export const history = createBrowserHistory()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const createStore = initialState => createReduxStore(
	connectRouter(history)(rootReducer),
	initialState,
	composeEnhancers(
		applyMiddleware(thunk, routerMiddleware(history))
	)
)
export default createStore