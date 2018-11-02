import {createStore, applyMiddleware, compose} from "redux"
import thunk from "redux-thunk"

import createBrowserHistory from "history/createBrowserHistory"
import {connectRouter, routerMiddleware} from "connected-react-router"
import rootReducer from "./reducers"

export const history = createBrowserHistory()

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const newStore = (initialState) => createStore(
	connectRouter(history)(rootReducer),
	initialState,
	composeEnhancer(
		applyMiddleware(thunk, routerMiddleware(history))
	)
)