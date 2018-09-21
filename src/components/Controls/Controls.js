import React from "react"
import PropTypes from "prop-types"

import classes from "./Controls.scss"

export const Controls = ({children}) => {
	return (
		<div className={classes.controls}>
			{children}
		</div>
	)
}
Controls.propTypes = {
	children: PropTypes.node
}
export default Controls