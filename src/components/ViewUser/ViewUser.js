import React from "react"
import PropTypes from "prop-types"

export class ViewUser extends React.PureComponent{
	render(){
		return (
			<div>
				<p>{this.props.user.name}</p>
				<p>{this.props.user.type}</p>
				<p>{this.props.user.description}</p>
			</div>
		)
	}

	static propTypes = {
		user: PropTypes.object.isRequired
	}
}
export default ViewUser