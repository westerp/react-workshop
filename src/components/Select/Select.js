import React from "react"
import PropTypes from "prop-types"

export class Select extends React.PureComponent{
	render(){
		const {value, options} = this.props

		return (
			<select value={value}>
				{options.map((option) => (
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
export default Select