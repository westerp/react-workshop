import React from "react"
import PropTypes from "prop-types"

import classes from "./Field.scss"

export class Field extends React.PureComponent{
	static propTypes = {
		label: PropTypes.string.isRequired,
		id: PropTypes.string.isRequired,

		children: PropTypes.element.isRequired
	}

	render(){
		return (
			<div className={classes.field}>
				<label
					htmlFor={this.props.id}>{this.props.label}</label>
				{this.renderFirstChild()}
			</div>
		)
	}

	renderFirstChild() {
		const {children} = this.props
		const firstChild = Array.isArray(children) ? children[0] : children

		return React.cloneElement(firstChild, {
			...firstChild.props,
			id: this.props.id
		})
	}
}
export default Field