import React from "react"
import PropTypes from "prop-types"

import classes from "./DescriptionField.scss"

export class DescriptionField extends React.PureComponent{
	render() {
		return (
			<textarea className={classes.descriptionField} {...this.props}/>
		)
	}
	static propTypes = {
		value: PropTypes.string,
		onChange: PropTypes.func.isRequired
	}
}
export default DescriptionField