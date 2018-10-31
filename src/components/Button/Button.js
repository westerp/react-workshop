import React from "react"
import PropTypes from "prop-types"

export class Button extends React.PureComponent {
	render() {
		return <button title={this.props.title} onClick={this.props.onClick}>{this.props.children}</button>
	}

	static propTypes = {
		title: PropTypes.string.isRequired,
		children: PropTypes.string.isRequired,

		onClick: PropTypes.func.isRequired
	}
}

export default Button