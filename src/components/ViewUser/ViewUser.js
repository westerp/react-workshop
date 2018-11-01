import React from "react"
import PropTypes from "prop-types"
import formatDate from "../../utils/formatDate"
import Sidebar from "../Sidebar"
import Avatar from "../Avatar"
import Controls from "../Controls"
import {Link} from "react-router-dom"
import toDate from "../../utils/toDate"

import classes from "./ViewUser.scss"

export class ViewUser extends React.PureComponent{
	static propTypes = {
		avatar: PropTypes.string,
		id: PropTypes.string,
		name: PropTypes.string,
		created: PropTypes.string,
		type: PropTypes.string,
		description: PropTypes.string,

		onDelete: PropTypes.func
	}

	render(){
		return (
			<Sidebar>
				<div className={classes.container}>
					<Avatar value={this.props.avatar} size="200px"/>
					<h2>{this.props.name}</h2>
					<p className={classes.id}>{this.props.id}</p>
					<p><strong>Created</strong> {formatDate(toDate(this.props.created))}</p>
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
}
export default ViewUser