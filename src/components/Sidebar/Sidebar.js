import React from "react"
import PropTypes from "prop-types"

import classes from "./Sidebar.scss"

export class Sidebar extends React.PureComponent{
	static propTypes = {
		children: PropTypes.node
	}

	state = {
		visible: false
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({
				visible: true
			})
		})
	}

	render(){
		return (
			<div className={classes.sidebar + (this.state.visible ? " "+classes.show : "")}>
				<div className={classes.box}>
					{this.props.children}
				</div>
			</div>
		)
	}
}
export default Sidebar