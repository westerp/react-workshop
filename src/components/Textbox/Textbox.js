import React from "react"
import PropTypes from "prop-types"

export const Textbox = (props) => {
	const {placeholder, readOnly, children, ...passthrough} = props
	return (<input type="text" placeholder={placeholder} readOnly={readOnly} {...passthrough}/>)
}
Textbox.propTypes = {
	placeholder: PropTypes.string.isRequired,
	readOnly: PropTypes.bool
}

// export class Textbox extends React.PureComponent{
// 	render(){
// 		const {placeholder, readOnly, children, ...passthrough} = this.props
// 		return (<input type="text" placeholder={placeholder} readOnly={readOnly} {...passthrough}/>)
// 	}

// 	static propTypes = {
// 		placeholder: PropTypes.string.isRequired,
// 		readOnly: PropTypes.bool
// 	}
// }
export default Textbox