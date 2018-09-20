import React from "react"
import PropTypes from "prop-types"

export class Field extends React.PureComponent{
	render(){
		const {label, id} = this.props
		return (
			<div>
				<label htmlFor={id}>{label}</label>
				{this.renderFirstOrOnlyChild()}
			</div>
		)
	}

	renderFirstOrOnlyChild() {
		const {children} = this.props
		const firstChild = Array.isArray(children) ? children[0] : children
		return React.cloneElement(firstChild, {
			...firstChild.props,
			id: this.props.id
		})
	}

	static propTypes = {
		label: PropTypes.string.isRequired,
		id: PropTypes.string.isRequired,
		children: PropTypes.element.isRequired
	}
}
export default Field