import * as usersDuck from "./users.duck"
import * as newUserDuck from "./newUser.duck"

export const addNewUser = () => (dispatch, getState) => {
	const state = getState()
	const newUser = newUserDuck.getNewUser(state)
	dispatch(usersDuck.addNewUser(newUser))
}