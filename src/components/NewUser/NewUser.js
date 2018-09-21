import React from "react"
import PropTypes from "prop-types"
import {Link} from "react-router-dom"
import Field from "../Field"
import DescriptionField from "../DescriptionField"
import SelectField from "../SelectField"
import Controls from "../Controls"
import Avatar from "../Avatar"
import Sidebar from "../Sidebar"

import classes from "./NewUser.scss"

export class NewUser extends React.PureComponent{
	state = {
		visible: false
	}

	render(){
		return (
			<Sidebar>
				<form onSubmit={this.onSubmit} className={classes.form}>
					<Avatar canChange value={this.props.avatar} onChange={this.onChangeProp("avatar")}/>
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
			</Sidebar>
		)
	}

	componentDidMount() {
		this.props.onReset()
	}

	onSubmit = (e) => {
		e.preventDefault()
		this.props.onCreate()
	}
	onChangeProp = (name) => (evtOrValue) => {
		const value = evtOrValue.target ? evtOrValue.target.value : evtOrValue
		this.props.onPropChange(name, value)
	}

	static propTypes = {
		avatar: PropTypes.string,
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