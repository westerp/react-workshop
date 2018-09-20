import React from "react"
import PropTypes from "prop-types"
import {Link} from "react-router-dom"
import cn from "classnames"
import Field from "../Field"
import DescriptionField from "../DescriptionField"
import SelectField from "../SelectField"
import Controls from "../Controls"

import classes from "./NewUser.scss"

export class NewUser extends React.PureComponent{
	state = {
		visible: false
	}

	render(){
		return (
			<div className={cn(classes.container, "frame", {[classes.show]: this.state.visible})}>
				<div className={classes.formContainer}>
					<form onSubmit={this.onSubmit} className={classes.form}>
						<Field label="User name" id="new-user-name">
							<input autoFocus type="text" value={this.props.name} onChange={this.onChangeProp("name")}/>
						</Field>
						<Field label="Type" id="new-user-type">
							<SelectField
								value={this.props.type}
								options={this.props.types}
								onChange={this.onChangeProp("type")}/>
						</Field>
						<Field label="Description" id="new-user-description">
							<DescriptionField
								value={this.props.description}
								onChange={this.onChangeProp("description")}/>
						</Field>
						<Controls>
							<Link to="/">Back</Link>
							<button className="right" type="submit" onClick={this.onSubmit}>Create user</button>
						</Controls>
					</form>
				</div>
			</div>
		)
	}

	componentDidMount() {
		this.props.onReset()
		// We need react to mount the component in the DOM before we can apply the transitions
		// so "schedule" the state change for after the stack completes
		setTimeout(() => {
			this.setState({
				visible: true
			})
		})
	}

	onSubmit = (e) => {
		e.preventDefault()
		this.props.onCreate()
	}
	onChangeProp = (name) => (evt) => {
		this.props.onPropChange(name, evt.target.value)
	}

	static propTypes = {
		name: PropTypes.string,
		type: PropTypes.string,
		description: PropTypes.string,
		types: PropTypes.arrayOf(PropTypes.string),

		onReset: PropTypes.func,
		onPropChange: PropTypes.func,
		onCreate: PropTypes.func
	}
}
export default NewUser