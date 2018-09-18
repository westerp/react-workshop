import {createAction, handleActions} from "redux-actions"
import uid from "uuid/v4"
import omit from "lodash/omit"

const _ns = "users/"
export const getState = state => state.users || {}
const createNsAction = (action, payload) => createAction(_ns+action, payload)

export const getUsers = (state) => {
	const localState = getState(state)
	return localState.order.map((id) => localState.byId[id])
}
export const getUser = (state, id) => getState(state).byId[id]

export const setOrder = createNsAction("SET_ORDER")

export const addNewUser = createNsAction("ADD_USER", (user) => ({
	id: uid(),
	created: new Date(),
	...user
}))
export const updateUser = createNsAction("UPDATE_USER")
export const removeUser = createNsAction("REMOVE_USER")

export const reducer = handleActions({
	[addNewUser]: (state, {payload}) => ({
		...state,
		order: state.order.concat([payload.id]),
		byId: {
			...state.byId,
			[payload.id]: payload
		}
	}),
	[updateUser]: (state, {payload}) => ({
		...state,
		byId: {
			...state.byId,
			[payload.id]: {
				...state.byId[payload.id],
				...payload
			}
		}
	}),
	[removeUser]: (state, {payload}) => ({
		...state,
		order: state.order.filter((id) => payload !== id),
		byId: omit(state.byId, [payload])
	}),
	[setOrder]: (state, {payload}) => ({
		...state,
		order: payload
	})
}, {
	order: [],
	byId: {}
})
export default reducer