import {connect} from 'react-redux';

import RegisterForm from './RegisterForm/RegisterForm';
import * as registerFormDuck from './registerForm.duck';

const mapStateToProps = (globalState, ownProps) => {
	const state = registerFormDuck.getState(globalState);

	return {
		firstName: registerFormDuck.getFirstName(state),
		lastName: registerFormDuck.getLastName(state)
	};
};
const mapDispatchToProps = dispatch => ({
	onFirstNameChange: (evt, newValue) => dispatch(registerFormDuck.setFirstName(newValue)),
	onLastNameChange: (evt, newValue) => dispatch(registerFormDuck.setLastName(newValue))
});
export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);