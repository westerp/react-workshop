import React from "react"
import PropTypes from "prop-types"

import columnClasses from "./UserListColumns.scss"

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
				<td className={columnClasses.name}>{name}</td>
				<td className={columnClasses.type}>{type}</td>
				<td className={columnClasses.created}>{created}</td>
			</tr>
		)
	}
}
export default UserListItem