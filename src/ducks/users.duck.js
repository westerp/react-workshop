import {createAction, handleActions} from "redux-actions"

export const getState = (globalState) => globalState.users || {}

export const getUser = (globalState, id) => {
	return (getState(globalState).byId || {})[id]
}
export const getUsers = (globalState) => {
	const state = getState(globalState)
	return (state.order || []).map((id) => (state.byId || {})[id])
}

export const addUser = createAction("ADD_USER")

export const reducer = handleActions({
	[addUser]: (state, action) => {
		return {
			...state,
			order: (state.order || []).concat([action.payload.id]),
			byId: {
				...(state.byId || {}),
				[action.payload.id]: action.payload
			}
		}
	}
}, {})
export default reducer