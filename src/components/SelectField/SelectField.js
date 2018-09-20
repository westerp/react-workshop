import React from "react"
import PropTypes from "prop-types"

export class SelectField extends React.PureComponent{
	render(){
		return (
			<select value={this.props.value}>
				{this.props.options.map(option => (
					<option key={option} value={option}>{option}</option>
				))}
			</select>
		)
	}

	static propTypes = {
		options: PropTypes.arrayOf(PropTypes.string),
		value: PropTypes.string
	}
}
export default SelectField