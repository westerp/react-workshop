import {connect} from 'react-redux';

import * as usersDucks from './users.duck';

import UserList from './UserList/UserList';

const mapStateToProps = (globalState, ownProps) => {
	const state = usersDucks.getState(globalState);

	return {
		users: usersDucks.getUsers(state)
	};
};
export default connect(mapStateToProps)(UserList);