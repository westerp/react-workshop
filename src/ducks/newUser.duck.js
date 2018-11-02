import {createAction, handleActions} from "redux-actions"

export const getState = (globalState) => globalState.newUser || {}

export const getTypes = (globalState) => {
	return getState(globalState).types || [
		"Admin", "Elevated", "User", "Reader"
	]
}

export const getPropValue = (globalState, propName) => {
	return getState(globalState)[propName] || ""
}
export const setPropValue = createAction("SET_PROP_VALUE", (propName, propValue) => ({
	prop: propName,
	value: propValue
}))

export const reducer = handleActions({
	[setPropValue]: (state, action) => {
		return {
			...state,
			[action.payload.name]: action.payload.value
		}
	}
}, {})
export default reducer