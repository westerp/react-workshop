import React from "react"
import PropTypes from "prop-types"

import classes from "./DescriptionField.scss"

export const DescriptionField = (props) => {
	return (
		<textarea className={classes.descriptionField} {...props}/>
	)
}
DescriptionField.propTypes = {
	value: PropTypes.string,
	onChange: PropTypes.func.isRequired
}
export default DescriptionField