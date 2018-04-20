import {connect} from 'react-redux';

import RegisterForm from './RegisterForm/RegisterForm';
import * as registerFormDuck from './registerForm.duck';

const mapStateToProps = (globalState, ownProps) => {
	const state = registerFormDuck.getState(globalState);

	return {
    firstName: registerFormDuck.getFirstName(state),
    lastName: registerFormDuck.getLastName(state),
    dateOfBirth: registerFormDuck.getDateOfBirth(state),

    userName: registerFormDuck.getUserName(state),
    email: registerFormDuck.getEmail(state),

    avatarImageSrc: registerFormDuck.getAvatarImageSrc(state)
	};
};
const mapDispatchToProps = dispatch => ({
	onFirstNameChange: (evt, newValue) => dispatch(registerFormDuck.setFirstName(newValue)),
	onLastNameChange: (evt, newValue) => dispatch(registerFormDuck.setLastName(newValue)),
	onDateOfBirthChange: (evt, newValue) => dispatch(registerFormDuck.setDateOfBirth(newValue)),
	onUserNameChange: (evt, newValue) => dispatch(registerFormDuck.setUserName(newValue)),
	onEmailChange: (evt, newValue) => dispatch(registerFormDuck.setEmail(newValue)),
	onAvatarImageSrcChange: (evt, newValue) => dispatch(registerFormDuck.setAvatarImageSrc(newValue)),

	onReset: () => dispatch(registerFormDuck.resetForm()),
	onSubmit: () => dispatch(registerFormDuck.submitUser())
});
export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);