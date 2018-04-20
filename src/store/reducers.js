import {combineReducers} from 'redux';

import registerForm from '../register/registerForm.duck';
import users from '../users/users.duck';

import {routerReducer as router} from 'react-router-redux';

export default combineReducers({
	registerForm,
	users,

	router
});