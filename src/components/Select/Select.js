import React from "react"
import PropTypes from "prop-types"

export class Select extends React.PureComponent{
	render(){
		const {defaultValue, options} = this.props

		return (
			<select value={defaultValue}>
				{options.map((option) => (
					<option key={option} value={option}>{option}</option>
				))}
			</select>
		)
	}

	static propTypes = {
		options: PropTypes.arrayOf(PropTypes.string),
		defaultValue: PropTypes.string
	}
}
export default Select