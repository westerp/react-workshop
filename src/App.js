import React from "react"
import NewUser from "./components/NewUser"
import pick from "lodash/pick"
import uid from "uuid/v4"

import "./styles/App.global.scss"

export class App extends React.PureComponent{
	state = {
		name: "",
		type: "User",
		types: ["Admin", "Elevated", "User", "Reader"],
		description: "",

		users: []
	}

	onPropChange = (propName, newValue) => {
		this.setState({
			[propName]: newValue
		})
	}
	onSubmit = () => {
		this.setState({
			users: this.state.users.concat([{
				id: uid(),
				created: (new Date()).toString(),
				...pick(this.state, ["name", "type", "description"])
			}])
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

					onPropChange={this.onPropChange}
					onSubmit={this.onSubmit}/>
			</div>
		)
	}
}

export default App