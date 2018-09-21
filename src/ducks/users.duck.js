import {createAction, handleActions} from "redux-actions"
import uid from "uuid/v4"

export const getUsers = (state) => {
	return state.order.map(userId => state.byId[userId])
}
export const getUser = (state, id) => state.byId[id]

export const addNewUser = createAction("ADD_NEW_USER", (newUser) => {
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