import React from "react"
import PropTypes from "prop-types"
import formatDate from "../../utils/formatDate"
import {Link} from "react-router-dom"
import Avatar from "../Avatar"

import columnClasses from "./UserListColumns.scss"

export const UserListItem = ({avatar, id, name, type, created}) => {
	return (
		<tr>
			<td><Avatar value={avatar} size="30px"/></td>
			<td className={columnClasses.name}><Link to={"/view/"+id}>{name}</Link></td>
			<td className={columnClasses.type}>{type}</td>
			<td className={columnClasses.created}>{formatDate(created)}</td>
		</tr>
	)
}
UserListItem.propTypes = {
	avatar: PropTypes.string,
	id: PropTypes.string,
	name: PropTypes.string,
	type: PropTypes.string,
	created: PropTypes.instanceOf(Date)
}
export default UserListItem