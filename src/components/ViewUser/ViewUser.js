import React from "react"
import PropTypes from "prop-types"
import Sidebar from "../Sidebar"
import {Link} from "react-router-dom"

import classes from "./ViewUser.scss"

export class ViewUser extends React.PureComponent{
	static propTypes = {
		id: PropTypes.string,
		name: PropTypes.string
	}

	render(){
		return (
			<Sidebar>
				<div className={classes.container}>
					<h2>{this.props.name}</h2>
					<p className={classes.id}>{this.props.id}</p>
				</div>

				<Link to="/">Close</Link>
			</Sidebar>
		)
	}
}
export default ViewUser