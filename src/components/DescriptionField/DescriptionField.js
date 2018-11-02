import React from "react"
import PropTypes from "prop-types"

export class DescriptionField extends React.PureComponent{
	static propTypes = {
		maxLength: PropTypes.number,

		onChange: PropTypes.func.isRequired
	}

	onChange = (evt) => {
		const newText = evt.target.value
		if (this.props.maxLength > 0 && newText.length > this.props.maxLength) {
			return
		}

		this.props.onChange(evt.target.value)
	}

	render(){
		const {maxLength, value, ...rest} = this.props

		return (
			<>
				<textarea value={value} {...rest} onChange={this.onChange}/>
				{maxLength > 0 && (
					<span>{value.length} / {maxLength}</span>
				)}
			</>
		)
	}
}
export default DescriptionField