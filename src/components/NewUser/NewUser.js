import React from "react"
import PropTypes from "prop-types"
import {Link} from "react-router-dom"
import Field from "../Field"
import DescriptionField from "../DescriptionField"
import SelectField from "../SelectField"
import Controls from "../Controls"
import Avatar from "../Avatar"
import Sidebar from "../Sidebar"
import Textbox from "../Textbox"

import classes from "./NewUser.scss"

export class NewUser extends React.PureComponent{
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

	render(){
		return (
			<Sidebar>
				<form onSubmit={this.onSubmit} className={classes.form}>
					<Avatar canChange value={this.props.avatar} onChange={this.onChangeProp("avatar")}/>
					<Field label="User name" id="new-user-name">
						<Textbox autoFocus value={this.props.name} onChange={this.onChangeProp("name")}/>
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
							maxLength={500}
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
	onChangeProp = (name) => (newValue) => {
		this.props.onPropChange(name, newValue)
	}
}
export default NewUser