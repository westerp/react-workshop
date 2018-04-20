import {createAction, handleActions} from 'redux-actions';
import * as usersDucks from '../users/users.duck';

const namespace = 'registerForm/';
const createNsAction = (action, payload) => createAction(namespace+action, payload);
export const getState = (globalState) => globalState.registerForm || {};


export const getFirstName = state => state.firstName || '';
export const getLastName = state => state.lastName || '';
export const getDateOfBirth = state => {
  const dob = state.dateOfBirth;
  return dob ? new Date(dob) : new Date();
};
export const getUserName = state => state.userName || '';
export const getEmail = state => state.email || '';
export const getAvatarImageSrc = state => state.avatarImageSrc || '';

export const getFormData = state => {
  return {
    firstName: getFirstName(state),
    lastName: getLastName(state),
    dateOfBirth: getDateOfBirth(state),
    userName: getUserName(state),
    email: getEmail(state),
    avatarImageSrc: getAvatarImageSrc(state)
  };
};


export const setFirstName = createNsAction('SET_FIRSTNAME', (name = '') => name);
export const setLastName = createNsAction('SET_LASTNAME', (name = '') => name);
export const setDateOfBirth = createNsAction('SET_DATE_OF_BIRTH');
export const setUserName = createNsAction('SET_USERNAME', (userName = '') => userName);
export const setEmail = createNsAction('SET_EMAIL', (email = '') => email);
export const setAvatarImageSrc = createNsAction('SET_AVATAR_IMAGE_SRC', (src = '') => src);


export const resetForm = () => dispatch => {
  dispatch(setFirstName());
  dispatch(setLastName());
  dispatch(setDateOfBirth());
  dispatch(setUserName());
  dispatch(setEmail());
  dispatch(setAvatarImageSrc());
};
export const submitUser = () => async (dispatch, getGlobalState) => {
  const state = getState(getGlobalState());
  const userInfo = getFormData(state);

  dispatch(usersDucks.addUser(userInfo));
  dispatch(resetForm());
};


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
  [setAvatarImageSrc]: (state, {payload}) => ({
    ...state,
    avatarImageSrc: payload
  })
}, {});
export default reducer;