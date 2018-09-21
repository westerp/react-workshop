import * as users from "./users.duck"
import * as newUser from "./newUser.duck"

export const ducks = {
	users,
	newUser
}

export const reducers = Object.keys(ducks).reduce((acc, key) => {
	acc[key] = ducks[key].reducer
	return acc
}, {})