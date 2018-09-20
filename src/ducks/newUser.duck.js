import {createAction, handleActions} from "redux-actions"

export const getName = (state) => state.name || ""
export const setName = createAction("SET_NEW_USER_NAME")

export const reducer = handleActions({
	[setName]: (state, action) => {
		return {
			...state,
			name: action.payload
		}
	}
}, {})

export default reducer