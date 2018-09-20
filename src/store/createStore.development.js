import {createStore, applyMiddleware, combineReducers} from "redux"
import reducer from "../ducks/index.duck"

export const createReduxStore = (initialState = {}) => {
	return createStore(
		reducer,
		initialState
	)
}