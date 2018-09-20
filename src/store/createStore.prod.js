import {createStore, applyMiddleware} from "redux"

export const createReduxStore = (initialState = {}) => {
	return createStore(
		{},
		initialState
	)
}