import {createAction, handleActions} from "redux-actions"
import pick from "lodash/pick"

const _ns = "newUser/"
export const getState = state => state.newUser || {}
const createNsAction = (action, payload) => createAction(_ns+action, payload)

export const getTypes = (state) => getState(state).types || []
export const getNewUser = (state) => ({
	created: (new Date()).toString(),
	...pick(getState(state), ["avatar", "name", "type", "description"])
})

export const getPropValue = (state, propName) => getState(state)[propName] || ""
export const setPropValue = createNsAction("SET_PROP_VALUE", (propName, propValue) => ({propName, propValue}))

export const resetUser = createNsAction("RESET_NEW_USER")

export const reducer = handleActions({
	[setPropValue]: (state, {payload}) => ({
		...state,
		[payload.propName]: payload.propValue
	}),
	[resetUser]: (state) => ({
		...state,
		avatar: "",
		name: "",
		type: "User",
		description: ""
	})
}, {
	types: [
		"Admin",
		"Elevated",
		"User",
		"Guest"
	]
})
export default reducer