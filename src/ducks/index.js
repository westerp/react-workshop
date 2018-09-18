import * as users from "./users.duck"

export const ducks = {
	users
}

export const reducers = Object.keys(ducks).reduce((acc, key) => {
	acc[key] = ducks[key].reducer
	return acc
}, {})
export default reducers