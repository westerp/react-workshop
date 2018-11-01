import React from "react"
import NewUser from "./components/NewUser/NewUser"

export class App extends React.PureComponent{
	state = {
		name: "",
		type: "User",
		types: ["Admin", "Elevated", "User", "Reader"],
		description: ""
	}

	onPropChange = (propName, newValue) => {
		this.setState({
			[propName]: newValue
		})
	}

	render() {
		return (
			<div>
				<NewUser
					name={this.state.name}
					type={this.state.type}
					types={this.state.types}
					description={this.state.description}
					onPropChange={this.onPropChange}/>
			</div>
		)
	}
}

export default App