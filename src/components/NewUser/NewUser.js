import React from "react"
import PropTypes from "prop-types"
import Textbox from "../Textbox"
import Select from "../Select"
import DescriptionField from "../DescriptionField"
import Sidebar from "../Sidebar"

export class NewUser extends React.PureComponent{
	static propTypes = {
		name: PropTypes.string,

		type: PropTypes.string,
		types: PropTypes.arrayOf(PropTypes.string),

		description: PropTypes.string,

		onPropChange: PropTypes.func.isRequired
	}

	render(){
		return (
			<Sidebar>
				<form>
					<Textbox
						placeholder="Name"
						value={this.props.name}
						onChange={this.createPropChangeHandlerForName("name")}/>
					<Select
						value={this.props.type}
						options={this.props.types}
						onChange={this.createPropChangeHandlerForName("type")}/>
					<DescriptionField
						maxLength={200}
						value={this.props.description}
						onChange={this.createPropChangeHandlerForName("description")}/>
				</form>
			</Sidebar>
		)
	}

	createPropChangeHandlerForName = (name) => (newValue) => {
		this.props.onPropChange(name, newValue)
	}
}
export default NewUser