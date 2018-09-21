import React from "react"
import PropTypes from "prop-types"

export class SelectField extends React.PureComponent{
	render(){
		return (
			<select
				value={this.props.value}
				onChange={this.onSelectChange}>
				{this.props.options.map(option => (
					<option key={option} value={option}>{option}</option>
				))}
			</select>
		)
	}

	onSelectChange = (evt) => {
		this.props.onChange(evt.target.value)
	}

	static propTypes = {
		options: PropTypes.arrayOf(PropTypes.string),
		value: PropTypes.string,
		onChange: PropTypes.func.isRequired
	}
}
export default SelectField