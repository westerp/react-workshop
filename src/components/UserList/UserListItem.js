import React from "react"
import PropTypes from "prop-types"
import formatDate from "../../utils/formatDate"
import {Link} from "react-router-dom"

export const UserListItem = ({id, name, type, created}) => {
	return (
		<tr>
			<td><Link to={"/view/"+id}>{name}</Link></td>
			<td>{type}</td>
			<td>{formatDate(created)}</td>
		</tr>
	)
}
UserListItem.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	type: PropTypes.string,
	created: PropTypes.instanceOf(Date)
}
export default UserListItem