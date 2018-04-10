import {createAction, handleActions} from 'redux-actions';

export const reducer = handleActions({

}, {
	loading: false,
	imageUrl: '',
	title: '',
	description: ''
});

export default reducer;