import {createStore as createReduxStore, applyMiddleware} from "redux"
import thunk from "redux-thunk"

import createHistory from "history/createBrowserHistory"
import { connectRouter, routerMiddleware } from "connected-react-router"

import rootReducer from "./reducers"

export const history = createHistory()

export const createStore = initialState => createReduxStore(
	connectRouter(history)(rootReducer),
	initialState,
	applyMiddleware(thunk, routerMiddleware(history))
)
export default createStore