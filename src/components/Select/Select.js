import React from "react"
import PropTypes from "prop-types"

export class Select extends React.PureComponent{
	onChangeHandler = (evt) => {
		this.props.onChange(evt.target.value)
	}

	render(){
		const {value, options} = this.props

		return (
			<select value={value} onChange={this.onChangeHandler}>
				{options.map((option) => (
					<option key={option} value={option}>{option}</option>
				))}
			</select>
		)
	}

	static propTypes = {
		options: PropTypes.arrayOf(PropTypes.string),
		value: PropTypes.string,

		onChange: PropTypes.func.isRequired
	}
}
export default Select