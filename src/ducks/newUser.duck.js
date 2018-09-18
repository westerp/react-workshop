import {createAction, handleActions} from "redux-actions"

const _ns = "newUser/"
export const getState = state => state.newUser || {}
const createNsAction = (action, payload) => createAction(_ns+action, payload)

export const getPropValue = (state, propName) => getState(state)[propName]
export const setPropValue = createNsAction("SET_PROP_VALUE", (propName, propValue) => ({propName, propValue}))

export const reducer = handleActions({
	[setPropValue]: (state, {payload}) => ({
		...state,
		[payload.propName]: payload.propValue
	})
}, {})
export default reducer