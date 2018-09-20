import {createStore, applyMiddleware, combineReducers, compose} from "redux"
const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

import reducer from "../ducks/newUser.duck"

export const createReduxStore = (initialState = {}) => {
	return createStore(
		reducer,
		initialState,
		composer()
	)
}