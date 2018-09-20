import {createAction, handleActions} from "redux-actions"

export const myFirstAction = createAction("MY_FIRST_ACTION")

export const reducer = handleActions({
	["MY_FIRST_ACTION"]: (state, action) => {
		return {
			...state,
			counter: (state.counter || 0) + 1
		}
	}
}, {})

export default reducer