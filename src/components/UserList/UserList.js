import React from "react"
import PropTypes from "prop-types"
import UserListItem from "./UserListItem"

import classes from "./UserList.scss"
import columnClasses from "./UserListColumns.scss"

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
			<div className={classes.container + " list"}>
				<h1>The awesome user database</h1>
				<table>
					<thead>
						<tr>
							<th></th>
							<th className={columnClasses.name}>Name</th>
							<th className={columnClasses.type}>Type</th>
							<th className={columnClasses.created}>Created</th>
						</tr>
					</thead>
					<tbody>
						{this.props.users.map((user) => (
							<UserListItem key={user.id} {...user}/>
						))}
					</tbody>
				</table>
				<div className={classes.newBtnContainer}>
					<button type="button" onClick={this.props.onNewUserClick}>
						<i className="fas fa-plus"/>
					</button>
				</div>
			</div>
		)
	}
}
export default UserList