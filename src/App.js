import React from "react"
import {hot} from "react-hot-loader"
import NewUser from "./components/NewUser"
import {Provider} from "react-redux"
import {createReduxStore} from "./store"
import {ducks} from "./ducks"
import UserList from "./components/UserList"

export class App extends React.PureComponent{
	constructor(props) {
		super(props)
		this.setupRedux()
		window.app = this
	}

	get ducks() {
		return ducks
	}

	setupRedux() {
		this.store = createReduxStore()
	}

	render() {
		return (
			<Provider store={this.store}>
				<React.Fragment>
					<UserList/>
					<NewUser/>
				</React.Fragment>
			</Provider>
		)
	}
}

export default hot(module)(App)