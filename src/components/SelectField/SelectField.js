import React from "react"
import PropTypes from "prop-types"
import omit from "lodash/omit"

export class SelectField extends React.PureComponent{
	static propTypes = {
		value: PropTypes.string,
		options: PropTypes.arrayOf(PropTypes.string),
		onChange: PropTypes.func
	}

	render(){
		return (
			<select {...this.selectProps}>
				{this.props.options.map(option => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
			</select>
		)
	}

	get selectProps() {
		return omit(this.props, ["options"])
	}
}
export default SelectField