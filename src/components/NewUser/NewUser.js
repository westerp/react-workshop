import React from "react"
import PropTypes from "prop-types"
import Textbox from "../Textbox/Textbox"
import Select from "../Select/Select"

export class NewUser extends React.PureComponent{
	static propTypes = {
		name: PropTypes.string,

		type: PropTypes.string,
		types: PropTypes.arrayOf(PropTypes.string),

		onPropChange: PropTypes.func.isRequired
	}

	render(){
		return (
			<form>
				<Textbox
					placeholder="Name"
					value={this.props.name}
					onChange={this.createPropChangeHandlerForName("name")}/>
				<Select
					value={this.props.type}
					options={this.props.types}
					onChange={this.createPropChangeHandlerForName("type")}/>
			</form>
		)
	}

	createPropChangeHandlerForName = (name) => (newValue) => {
		this.props.onPropChange(name, newValue)
	}
}
export default NewUser