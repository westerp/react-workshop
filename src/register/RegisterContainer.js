import {connect} from "react-redux"

import RegisterForm from "./RegisterForm"
import * as registerFormDucks from "./registerForm.duck"

const mapStateToProps = (globalState) => {
	const state = registerFormDucks.getState(globalState)

	return {
		firstName: registerFormDucks.getFirstName(state),
		lastName: registerFormDucks.getLastName(state),
		dateOfBirth: registerFormDucks.getDateOfBirth(state),

		userName: registerFormDucks.getUserName(state),
		userNameInvalidReason: registerFormDucks.getUserNameInvalidReason(state),
		email: registerFormDucks.getEmail(state),
		emailInvalidReason: registerFormDucks.getEmailInvalidReason(state),

		avatarImageSrc: registerFormDucks.getAvatarImageSrc(state)
	}
}
const mapDispatchToProps = dispatch => {
	const helper = actionCreator => newValue => dispatch(actionCreator(newValue))

	return {
		onFirstNameChange: helper(registerFormDucks.setFirstName),
		onLastNameChange: helper(registerFormDucks.setLastName),
		onDateOfBirthChange: helper(registerFormDucks.setDateOfBirth),
		onUserNameChange: helper(registerFormDucks.setUserName),
		onEmailChange: helper(registerFormDucks.setEmail),
		onAvatarImageSrcChange: helper(registerFormDucks.setAvatarImageSrc),

		onSubmit: () => dispatch(registerFormDucks.addUser()),
		onReset: () => dispatch(registerFormDucks.resetForm())
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm)