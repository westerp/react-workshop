import React from "react"
import PropTypes from "prop-types"
import {Link} from "react-router-dom"

export class UserListItem extends React.PureComponent{
	render(){
		return (
			<tr>
				<td><Link to={"/view/"+this.props.id}>{this.props.name}</Link></td>
				<td>{this.props.type}</td>
				<td>{this.props.description}</td>
			</tr>
		)
	}

	static propTypes = {
		id: PropTypes.string,
		name: PropTypes.string,
		type: PropTypes.string,
		description: PropTypes.string
	}
}
export default UserListItem