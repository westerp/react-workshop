import {combineReducers} from "redux"

import registerForm from "../register/registerForm.duck"
import users from "../users/users.duck"

export default combineReducers({
	registerForm,
	users
})