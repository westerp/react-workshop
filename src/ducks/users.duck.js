import {createAction, handleActions} from "redux-actions"
import uid from "uuid/v4"

const _ns = "users/"
export const getState = (state) => state.users || {}
const createNsAction = (action, payload) => createAction(_ns+action, payload)

export const getUsers = (state) => {
	const localState = getState(state)
	return localState.order.map(userId => localState.byId[userId])
}
export const getUser = (state, id) => getState(state).byId[id]

export const addNewUser = createNsAction("ADD_NEW_USER", (newUser) => {
	return {
		id: uid(),
		...newUser
	}
})

export const reducer = handleActions({
	[addNewUser]: (state, action) => {
		return {
			...state,
			order: state.order.concat([action.payload.id]),
			byId: {
				...state.byId,
				[action.payload.id]: action.payload
			}
		}
	}
}, {})

/*
state = {
	order: ["user1", "user2", "user3"],
	byId: {
		'user1': {...},
		'user2': {...},
		"user3": {...}
	}
}
*/

export default reducer