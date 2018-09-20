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
			<form>
				<Field label="User name" id="new-user-name">
					<input type="text" value={this.props.name}/>
				</Field>
				<Field label="Type" id="new-user-type">
					<SelectField options={TYPES} value={this.props.type}/>
				</Field>
				<Field label="Description" id="new-user-description">
					<textarea value={this.props.description}></textarea>
				</Field>
			</form>
		)
	}

	static propTypes = {
		name: PropTypes.string,
		type: PropTypes.string,
		description: PropTypes.string
	}
}
export default NewUser