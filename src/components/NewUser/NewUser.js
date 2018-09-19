import React from "react"
import PropTypes from "prop-types"
import {Link} from "react-router-dom"
import cn from "classnames"

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
						<div className="field">
							<label htmlFor="new-user-name">User name</label>
							<input id="new-user-name" type="text" value={this.props.name} onChange={this.onChangeProp("name")}/>
						</div>
						<div className="field">
							<label htmlFor="new-user-type">Type</label>
							<select id="new-user-type" value={this.props.type} onChange={this.onChangeProp("type")}>
								{this.props.types.map(type => (
									<option key={type} value={type}>{type}</option>
								))}
							</select>
						</div>
						<div className="field">
							<label htmlFor="new-user-description">Description</label>
							<textarea
								id="new-user-description"
								value={this.props.description}
								onChange={this.onChangeProp("description")}/>
						</div>
						<div className="controls">
							<Link to="/">Back</Link>
							<button className="right" type="submit" onClick={this.onSubmit}>Create user</button>
						</div>
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