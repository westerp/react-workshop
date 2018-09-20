import React from "react"
import {hot} from "react-hot-loader"
import NewUser from "./components/NewUser"
import {Provider} from "react-redux"
import {createReduxStore} from "./store"
import * as newUserDuck from "./ducks/newUser.duck"

export class App extends React.PureComponent{
	constructor(props) {
		super(props)
		this.setupRedux()
		window.app = this
	}

	get ducks() {
		return {
			newUserDuck
		}
	}

	setupRedux() {
		this.store = createReduxStore()
	}

	render() {
		return (
			<Provider store={this.store}>
				<NewUser/>
			</Provider>
		)
	}
}

export default hot(module)(App)