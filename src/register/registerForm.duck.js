import {createAction, handleActions} from "redux-actions"
import * as userDucks from "../users/users.duck"

const namespace = "registerForm/"
export const getState = state => state.registerForm || {}
const createNsAction = (action, payload) => createAction(namespace+action, payload)


export const getFirstName = state => state.firstName || ""
export const getLastName = state => state.lastName || ""
export const getDateOfBirth = state => {
	const dob = state.dateOfBirth
	return dob ? new Date(dob) : new Date()
}
export const getUserName = state => state.userName || ""
export const getUserNameInvalidReason = state => state.userNameInvalidReason || ""
export const getEmail = state => state.email || ""
export const getEmailInvalidReason = state => state.emailInvalidReason || ""
export const getAvatarImageSrc = state => state.avatarImageSrc || ""
export const isDisabled = state => !!state.disabled

export const getFormData = state => ({
	firstName: getFirstName(state),
	lastName: getLastName(state),
	dateOfBirth: getDateOfBirth(state),
	userName: getUserName(state),
	email: getEmail(state),
	avatarImageSrc: getAvatarImageSrc(state)
})

export const setFirstName = createNsAction("SET_FIRSTNAME", (name = "") => name)
export const setLastName = createNsAction("SET_LASTNAME", (name = "") => name)
export const setDateOfBirth = createNsAction("SET_DATE_OF_BIRTH")
export const setUserName = createNsAction("SET_USERNAME", (userName = "") => userName)
export const setEmail = createNsAction("SET_EMAIL", (email = "") => email)
export const setUserNameInvalidReason = createNsAction("SET_USERNAME_INVALID_REASON", (reason = "") => reason)
export const setEmailInvalidReason = createNsAction("SET_EMAIL_INVALID_REASON", (reason = "") => reason)
export const setAvatarImageSrc = createNsAction("SET_AVATAR_IMAGE_SRC", (src = "") => src)
export const setDisabled = createNsAction("SET_DISABLED", (flag) => !!flag)


export const resetForm = () => dispatch => {
	dispatch(setFirstName())
	dispatch(setLastName())
	dispatch(setDateOfBirth())
	dispatch(setUserName())
	dispatch(setEmail())
	dispatch(setAvatarImageSrc())
}
export const addUser = () => (dispatch, getGlobalState) => {
	const state = getState(getGlobalState())
	const userState = userDucks.getState(getGlobalState())

	const userInfo = getFormData(state)
	const userName = getUserName(state)
	if (userDucks.getUserByUserName(userState, userName)){
		return
	}

	dispatch(userDucks.addUser(userInfo))
	dispatch(resetForm())
}


export const reducer = handleActions({
	[setFirstName]: (state, {payload}) => ({
		...state,
		firstName: payload
	}),
	[setLastName]: (state, {payload}) => ({
		...state,
		lastName: payload
	}),
	[setDateOfBirth]: (state, {payload}) => ({
		...state,
		dateOfBirth: payload
	}),
	[setUserName]: (state, {payload}) => ({
		...state,
		userName: payload
	}),
	[setEmail]: (state, {payload}) => ({
		...state,
		email: payload
	}),
	[setUserNameInvalidReason]: (state, {payload}) => ({
		...state,
		userNameInvalidReason: payload
	}),
	[setEmailInvalidReason]: (state, {payload}) => ({
		...state,
		emailInvalidReason: payload
	}),
	[setAvatarImageSrc]: (state, {payload}) => ({
		...state,
		avatarImageSrc: payload
	}),
	[setDisabled]: (state, {payload}) => ({
		...state,
		disabled: payload
	})
}, {
	avatarImageSrc: "https://i.imgur.com/qApwiDR.png"
})
export default reducer