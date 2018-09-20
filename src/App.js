import React from "react"
import {hot} from "react-hot-loader"
import NewUser from "./components/NewUser"
import {Provider} from "react-redux"
import {createReduxStore} from "./store"
import * as indexDucks from "./ducks/index.duck"

export class App extends React.PureComponent{
	constructor(props) {
		super(props)
		this.setupRedux()
		window.app = this
	}

	get ducks() {
		return {
			indexDucks
		}
	}

	setupRedux() {
		this.store = createReduxStore()
	}

	render() {
		return (
			<>
				<NewUser/>
			</>
		)
	}
}

export default hot(module)(App)