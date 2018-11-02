import React from "react"
import {Link} from "react-router-dom"
import PropTypes from "prop-types"
import Textbox from "../Textbox"
import Select from "../Select"
import DescriptionField from "../DescriptionField"
import Sidebar from "../Sidebar"
import Field from "../Field"

export class NewUser extends React.PureComponent{
	static propTypes = {
		name: PropTypes.string,

		type: PropTypes.string,
		types: PropTypes.arrayOf(PropTypes.string),

		description: PropTypes.string,

		onPropChange: PropTypes.func.isRequired,
		onSubmit: PropTypes.func.isRequired
	}

	render(){
		return (
			<Sidebar>
				<form onSubmit={this.onSubmit}>
					<Field label="bbbb" id="new-user-name">
						<Textbox
							placeholder="Name"
							value={this.props.name}
							onChange={this.createPropChangeHandlerForName("name")}/>
					</Field>
					<Field label="bbbb" id="new-user-type">
						<Select
							value={this.props.type}
							options={this.props.types}
							onChange={this.createPropChangeHandlerForName("type")}/>
					</Field>
					<Field label="bbbb" id="new-user-description">
						<DescriptionField
							maxLength={200}
							value={this.props.description}
							onChange={this.createPropChangeHandlerForName("description")}/>
					</Field>

					<Link to="/">Close</Link>
					<button type="submit">Create user</button>
				</form>
			</Sidebar>
		)
	}

	createPropChangeHandlerForName = (name) => (newValue) => {
		this.props.onPropChange(name, newValue)
	}

	onSubmit = (evt) => {
		evt.preventDefault()
		this.props.onSubmit()
	}
}
export default NewUser