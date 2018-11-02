import React from "react"
import {Provider} from "react-redux"
import {ConnectedRouter} from "connected-react-router"
import pick from "lodash/pick"
import uid from "uuid/v4"
import { newStore, history } from "./store"
import Routes from "./routes"

import "./styles/App.global.scss"

export class App extends React.PureComponent{
	state = {
		name: "",
		type: "User",
		types: ["Admin", "Elevated", "User", "Reader"],
		description: "",

		users: []
	}

	constructor(props) {
		super(props)
		this.setupRedux()
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

	setupRedux() {
		this.store = newStore({})
	}

	render() {
		return (
			<Provider store={this.store}>
				<ConnectedRouter history={history}>
					<Routes/>
				</ConnectedRouter>
			</Provider>
		)
	}
}

export default App