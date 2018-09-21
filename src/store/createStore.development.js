import {createStore, applyMiddleware, combineReducers, compose} from "redux"
const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

import {reducers} from "../ducks"

export const createReduxStore = (initialState = {}) => {
	return createStore(
		combineReducers(reducers),
		initialState,
		composer()
	)
}