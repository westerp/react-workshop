import {getNewUser} from "./newUser.duck"
import {addUser} from "./users.duck"

export const addNewUserToUsers = () => (dispatch, getGlobalState) => {
	const globalState = getGlobalState()
	const newUser = getNewUser(globalState)
	dispatch(addUser(newUser))
}