import React from "react"
import Field from "../Field"

export class NewUser extends React.PureComponent{
	render(){
		return (
			<form>
				<Field label="User name" id="new-user-name">
					<input type="text"/>
				</Field>
			</form>
		)
	}
}
export default NewUser