import React from "react"
import PropTypes from "prop-types"

export class SelectField extends React.PureComponent{
	static propTypes = {
		value: PropTypes.string,
		options: PropTypes.arrayOf(PropTypes.string),
		onChange: PropTypes.func
	}

	render(){
		const {options, ...rest} = this.props
		return (
			<select {...rest}>
				{options.map(option => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
			</select>
		)
	}
}
export default SelectField