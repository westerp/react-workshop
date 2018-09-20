import React from "react"
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
					<input type="text"/>
				</Field>
				<Field label="Type" id="new-user-type">
					<SelectField options={TYPES}/>
				</Field>
				<Field label="Description" id="new-user-description">
					<textarea></textarea>
				</Field>
			</form>
		)
	}
}
export default NewUser