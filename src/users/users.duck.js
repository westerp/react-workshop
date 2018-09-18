import {createAction, handleActions} from "redux-actions"
import uuid from "uuid/v4"

const namespace = "users/"
export const getState = state => state.users || {}
const createNsAction = (action, payload) => createAction(namespace+action, payload)


export const getUsers = state => {
	const order = state.order || []
	const byId = state.byId || {}
	return order.map(id => byId[id])
}
export const getUser = (state, id) => {
	const byId = state.byId || {}
	return byId[id]
}
export const getUserByUserName = (state, userName) => {
	return getUsers(state).find(user => user.userName === userName)
}


export const addUser = createNsAction("ADD_USER", userProps => ({
	...userProps,
	id: uuid()
}))


export const reducer = handleActions({
	[addUser]: (state, {payload}) => ({
		...state,
		order: (state.order || []).concat(payload.id),
		byId: {
			...state.byId,
			[payload.id]: payload
		}
	})
}, {})
export default reducer