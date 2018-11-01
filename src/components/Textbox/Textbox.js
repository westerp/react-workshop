import React from "react"
import PropTypes from "prop-types"

export class Textbox extends React.PureComponent{
	static propTypes = {
		readOnly: PropTypes.bool,
		value: PropTypes.string,

		onChange: PropTypes.func.isRequired
	}

	onChange = (evt) => {
		this.props.onChange(evt.target.value)
	}

	render(){
		return (<input
			{...this.props}
			type="text"
			onChange={this.onChange}/>)
	}
}
export default Textbox