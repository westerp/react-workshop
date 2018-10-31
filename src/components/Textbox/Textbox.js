import React from "react"
import PropTypes from "prop-types"

export class Textbox extends React.PureComponent{
	onChangeHandler = (evt) => {
		this.props.onChange(evt.target.value)
	}

	render(){
		const {
			placeholder,
			readOnly,
			value
		} = this.props

		return (<input
			type="text"
			placeholder={placeholder}
			readOnly={readOnly}
			value={value}
			onChange={this.onChangeHandler}/>)
	}

	static propTypes = {
		placeholder: PropTypes.string.isRequired,
		readOnly: PropTypes.bool,
		value: PropTypes.string,

		onChange: PropTypes.func.isRequired
	}
}
export default Textbox



// export const Textbox = (props) => {
// 	const {
// 		placeholder,
// 		readOnly,
// 		value
// 	} = props

// 	return (<input
// 		type="text"
// 		placeholder={placeholder}
// 		readOnly={readOnly}
// 		value={value}
// 		onChange={onChangeHandler}/>)
// }
// Textbox.propTypes = {
// 	placeholder: PropTypes.string.isRequired,
// 	readOnly: PropTypes.bool,
// 	value: PropTypes.string,

// 	onChange: PropTypes.func.isRequired
// }