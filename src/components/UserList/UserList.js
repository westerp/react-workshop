import React from "react"
import PropTypes from "prop-types"
import UserListItem from "./UserListItem"

export class UserList extends React.PureComponent{
	static propTypes = {
		users: PropTypes.arrayOf(PropTypes.object),

		onNewUserClick: PropTypes.func.isRequired
	}
	static defaultProps = {
		users: []
	}

	render(){
		return (
			<div>
				<h1>The awesome user database</h1>
				<table>
					<thead>
						<tr>
							<th></th>
							<th>Name</th>
							<th>Type</th>
							<th>Created</th>
						</tr>
					</thead>
					<tbody>
						{this.props.users.map((user) => (
							<UserListItem key={user.id} {...user}/>
						))}
					</tbody>
				</table>
				<div>
					<button type="button" onClick={this.props.onNewUserClick}>
						<i className="fas fa-plus"/>
					</button>
				</div>
			</div>
		)
	}
}
export default UserList