import {combineReducers} from "redux"

import newUser from "../ducks/newUser.duck"
import users from "../ducks/users.duck"

export default combineReducers({
	newUser,
	users
})