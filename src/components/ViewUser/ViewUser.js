import React from "react"
import PropTypes from "prop-types"
import formatDate from "../../utils/formatDate"
import Sidebar from "../Sidebar"
import Avatar from "../Avatar"
import Controls from "../Controls"
import {Link} from "react-router-dom"

import classes from "./ViewUser.scss"

export class ViewUser extends React.PureComponent{
	render(){
		return (
			<Sidebar>
				<div className={classes.container}>
					<Avatar value={this.props.avatar} size="200px"/>
					<h2>{this.props.name}</h2>
					<p className={classes.id}>{this.props.id}</p>
					<p><strong>Created</strong> {formatDate(this.props.created)}</p>
					<p><strong>Type</strong> {this.props.type}</p>
					<p><strong>Description</strong></p>
					<p>
						{this.props.description}
					</p>
					<Controls>
						<Link to="/">Back</Link>
						<button className="right" type="button" onClick={this.deleteThisUser}>Delete</button>
					</Controls>
				</div>
			</Sidebar>
		)
	}

	deleteThisUser = () => {
		this.props.onDelete(this.props.id)
	}

	static propTypes = {
		avatar: PropTypes.string,
		id: PropTypes.string,
		name: PropTypes.string,
		created: PropTypes.instanceOf(Date),
		type: PropTypes.string,
		description: PropTypes.string,

		onDelete: PropTypes.func
	}
}
export default ViewUser