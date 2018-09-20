import React from "react"
import PropTypes from "prop-types"
import cn from "classnames"

import classes from "./Avatar.scss"

export class Avatar extends React.PureComponent{
	render(){
		return (
			<div className={classes.container}>
				<div
					className={cn(classes.avatar, {[classes.hasImage]: !!this.props.value})}
					onClick={this.onClick}
					style={{backgroundImage: `url("${this.props.value}")`}}>
				</div>
			</div>
		)
	}

	onClick = () => {
		const promptValue = prompt("Paste an image url", this.props.value)
		if (promptValue != null) {
			this.props.onChange(promptValue)
		}
	}

	static propTypes = {
		value: PropTypes.string,
		onChange: PropTypes.func.isRequired
	}
}
export default Avatar