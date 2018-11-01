import React from "react"
import PropTypes from "prop-types"

export class DescriptionField extends React.PureComponent{
	static propTypes = {
		value: PropTypes.string,
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
		return (
			<>
				<textarea value={this.props.value} onChange={this.onChange}/>
				{this.props.maxLength > 0 && (
					<span>{this.props.value.length} / {this.props.maxLength}</span>
				)}
			</>
		)
	}
}
export default DescriptionField