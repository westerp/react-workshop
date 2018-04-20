import React from 'react';
import PropTypes from 'prop-types';

export const UserList = (props) => {
	return (
		<ol>
			{props.users.map(user => (
				<li key={user.id}>
					<strong>{user.firstName}</strong> - {user.userName}
				</li>
			))}
		</ol>
	);
};
UserList.defaultProps = {
	users: []
};
UserList.propTypes = {
	users: PropTypes.arrayOf(PropTypes.shape({
		firstName: PropTypes.string,
		userName: PropTypes.string
	}))
};
export default UserList;