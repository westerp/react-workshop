import {createAction, handleActions} from "redux-actions"
import uid from "uuid/v4"

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

export const getNewUser = (globalState) => {
	const state = getState(globalState)

	return {
		name: state.name || "",
		type: state.type || "User",
		description: state.description || "",
		created: (new Date()).toString(),
		id: uid()
	}
}

export const reducer = handleActions({
	[setPropValue]: (state, action) => {
		return {
			...state,
			[action.payload.prop]: action.payload.value
		}
	}
}, {})
export default reducer