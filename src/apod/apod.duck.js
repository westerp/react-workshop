import {createAction, handleActions} from 'redux-actions';
import axios from 'axios';

export const getState = state => state.apod;
const _ns = 'apod/';
const createNsAction = (action, payload) => createAction(_ns+action, payload);

export const setIsLoading = createNsAction('IS_LOADING', (flag = true) => flag);
export const setIsSuccess = createNsAction('IS_SUCCESS', (flag = true) => flag);
export const setIsFailed = createNsAction('IS_FAILED', (flag = true) => flag);

const test = {a: 1, b: 2, c: 3};
const test2 = {
	...test
};

export const fetch = () => async dispatch => {

};

export const reducer = handleActions({
	[setIsLoading]: (state, action) => ({
		...state,
		isLoading: action.payload
	}),
	[setIsSuccess]: (state, action) => ({
		...state,
		isSuccess: action.payload
	}),
	[setIsFailed]: (state, action) => ({
		...state,
		isFailed: action.payload
	}),
}, {
	isLoading: false,
	isSuccess: false,
	isFailed: false,
	loadError: undefined,

	title: '',
	copyright: '',
	explanation: '',
	date: '',

	highDefUrl: '',
	url: ''
});

export default reducer;