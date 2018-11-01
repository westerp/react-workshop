import React from "react"
import PropTypes from "prop-types"

export class UserListItem extends React.PureComponent{
	static propTypes = {
		name: PropTypes.string,
		type: PropTypes.string,
		created: PropTypes.string
	}

	render(){
		const {
			name, type, created
		} = this.props

		return (
			<tr>
				<td></td>
				<td>{name}</td>
				<td>{type}</td>
				<td>{created}</td>
			</tr>
		)
	}
}
export default UserListItem