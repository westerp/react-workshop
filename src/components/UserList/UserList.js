import React from "react"
import PropTypes from "prop-types"
import {Link} from "react-router-dom"

import UserListItem from "./UserListItem"

export class UserList extends React.PureComponent{
	render(){
		return (
			<div>
				<h1>The awesome user database</h1>
				<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Type</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
						{this.props.users.map((user) => (
							<UserListItem key={user.id} {...user}/>
						))}
					</tbody>
				</table>
				<Link to="/new">New user</Link>
			</div>
		)
	}

	static defaultProps = {
		users: []
	}
	static propTypes = {
		users: PropTypes.arrayOf(PropTypes.object)
	}
}
export default UserList