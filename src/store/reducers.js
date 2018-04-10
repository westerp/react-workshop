import {combineReducers} from 'redux';

import apod from '../apod/apod.duck';
import {routerReducer as router} from 'react-router-redux';

export default combineReducers({
	apod,

	router
});