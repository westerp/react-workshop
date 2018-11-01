import React from "react"
import PropTypes from "prop-types"

import classes from "./Controls.scss"

export class name extends React.PureComponent{
	render(){
		return (
			<div className={classes.controls}>
				{this.props.children}
			</div>
		)
	}

	static propTypes = {
		children: PropTypes.node
	}
}
export default name