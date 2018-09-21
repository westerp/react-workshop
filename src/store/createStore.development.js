import {createStore, applyMiddleware, combineReducers, compose} from "redux"
import thunk from "redux-thunk"
import createBrowserHistory from "history/createBrowserHistory"
import {connectRouter, routerMiddleware} from "connected-react-router"

export const history = createBrowserHistory()
const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

import {reducers} from "../ducks"

export const createReduxStore = (initialState = {}) => {
	return createStore(
		connectRouter(history)(combineReducers(reducers)),
		initialState,
		composer(
			applyMiddleware(thunk, routerMiddleware(history))
		)
	)
}