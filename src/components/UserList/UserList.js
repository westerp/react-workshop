import React from "react"
import PropTypes from "prop-types"
import { UserListItem } from "./UserListItem"

export class name extends React.PureComponent{
	render(){
		return (
			<div>
				<table>
					<thead>
						<tr>
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
				<button type="button" onClick={this.props.onNewClick}>New</button>
			</div>
		)
	}

	static defaultProps = {
		users: []
	}
	static propTypes = {
		users: PropTypes.arrayOf(PropTypes.object),
		onNewClick: PropTypes.func
	}
}
export default name