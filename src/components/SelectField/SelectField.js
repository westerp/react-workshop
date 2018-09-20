import React from "react"
import PropTypes from "prop-types"

export class SelectField extends React.PureComponent{
	render(){
		return (
			<select>
				{this.props.options.map(option => (
					<option key={option} value={option}>{option}</option>
				))}
			</select>
		)
	}

	static propTypes = {
		options: PropTypes.arrayOf(PropTypes.string)
	}
}
export default SelectField