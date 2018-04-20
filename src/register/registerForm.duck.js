import {createAction, handleActions} from 'redux-actions';

const namespace = 'registerForm/';
const createNsAction = (action, payload) => createAction(namespace+action, payload);
export const getState = (globalState) => globalState.registerForm || {};


export const getFirstName = state => state.firstName || '';
export const getLastName = state => state.lastName || '';


export const setFirstName = createNsAction('SET_FIRST_NAME', (name = '') => name);
export const setLastName = createNsAction('SET_LAST_NAME', (name = '') => name);


export const reducer = handleActions({
	[setFirstName]: (state, {payload}) => {
		return {
			...state,
			firstName: payload
		};
	},
	[setLastName]: (state, {payload}) => {
		return {
			...state,
			lastName: payload
		};
	}
}, {});
export default reducer;