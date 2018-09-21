import React from "react"
import PropTypes from "prop-types"

import Field from "../Field"
import SelectField from "../SelectField"

const TYPES = [
	"Admin",
	"Elevated",
	"User",
	"Guest"
]

export class NewUser extends React.PureComponent{
	render(){
		return (
			<form onSubmit={this.stopOnSubmit}>
				<Field label="User name" id="new-user-name">
					<input
						type="text"
						value={this.props.name}
						onChange={this.onNameChange}/>
				</Field>
				<Field label="Type" id="new-user-type">
					<SelectField
						options={TYPES}
						value={this.props.type}
						onChange={this.onTypeChange}/>
				</Field>
				<Field label="Description" id="new-user-description">
					<textarea
						value={this.props.description}
						onChange={this.onDescriptionChange}></textarea>
				</Field>
				<button type="submit" onClick={this.props.onNewUser}>Create user</button>
			</form>
		)
	}

	stopOnSubmit = (evt) => {
		evt.preventDefault()
	}

	onNameChange = (evt) => {
		this.props.onNameChange(evt.target.value)
	}
	onDescriptionChange = (evt) => {
		this.props.onDescriptionChange(evt.target.value)
	}
	onTypeChange = (newType) => {
		this.props.onTypeChange(newType)
	}

	static propTypes = {
		name: PropTypes.string,
		type: PropTypes.string,
		description: PropTypes.string,

		onNameChange: PropTypes.func.isRequired,
		onDescriptionChange: PropTypes.func.isRequired,
		onTypeChange: PropTypes.func.isRequired,
		onNewUser: PropTypes.func.isRequired
	}
}
export default NewUser