import React from "react"
import PropTypes from "prop-types"

export class UserListItem extends React.PureComponent{
	render(){
		return (
			<tr>
				<td>{this.props.name}</td>
				<td>{this.props.type}</td>
				<td>{this.props.description}</td>
			</tr>
		)
	}

	static propTypes = {
		name: PropTypes.string,
		type: PropTypes.string,
		description: PropTypes.string
	}
}
export default UserListItem