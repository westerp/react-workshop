import React from "react"
import PropTypes from "prop-types"

export class Select extends React.PureComponent{
	static propTypes = {
		options: PropTypes.arrayOf(PropTypes.string),
		value: PropTypes.string,

		onChange: PropTypes.func.isRequired
	}

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
}
export default Select