import {createAction, handleActions} from "redux-actions"

export const getName = (state) => state.name || ""
export const setName = createAction("SET_NEW_USER_NAME")

export const getDescription = (state) => state.description || ""
export const setDescription = createAction("SET_NEW_USER_DESCRIPTION")

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
	}
}, {})

export default reducer