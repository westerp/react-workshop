import {createAction, handleActions} from "redux-actions"

const _ns = "newUser/"
export const getState = (state) => state.newUser || {}
const createNsAction = (action, payload) => createAction(_ns+action, payload)

export const getName = (state) => getState(state).name || ""
export const setName = createNsAction("SET_NEW_USER_NAME")

export const getDescription = (state) => getState(state).description || ""
export const setDescription = createNsAction("SET_NEW_USER_DESCRIPTION")

export const getType = (state) => getState(state).type || ""
export const setType = createNsAction("SET_NEW_USER_TYPE")

export const getNewUser = (state) => {
	return {
		name: getName(state),
		description: getDescription(state),
		type: getType(state)
	}
}

export const reducer = handleActions({
	[setName]: (state, action) => {
		return {
			...state,
			name: action.payload
		}
	},
	[setDescription]: (state, action) => {
		return {
			...state,
			description: action.payload
		}
	},
	[setType]: (state, action) => {
		return {
			...state,
			type: action.payload
		}
	}
}, {})

export default reducer