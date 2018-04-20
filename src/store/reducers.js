import {combineReducers} from 'redux';

import registerForm from '../register/registerForm.duck';

import {routerReducer as router} from 'react-router-redux';

export default combineReducers({
	registerForm,

	router
});