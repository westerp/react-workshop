import React from "react"
import PropTypes from "prop-types"

export class ViewUser extends React.PureComponent{
	render(){
		return (
			<div>
				<p>{this.props.name}</p>
				<p>{this.props.type}</p>
				<p>{this.props.description}</p>
			</div>
		)
	}

	static propTypes = {
		name: PropTypes.string,
		type: PropTypes.string,
		description: PropTypes.string,
	}
}
export default ViewUser