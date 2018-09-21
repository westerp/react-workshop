import React from "react"
import {hot} from "react-hot-loader"
import {Provider} from "react-redux"
import {createReduxStore, history} from "./store"
import {ducks} from "./ducks"
import {ConnectedRouter} from "connected-react-router" 
import Routes from "./Routes"

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
				<ConnectedRouter history={history}>
					<Routes/>
				</ConnectedRouter>
			</Provider>
		)
	}
}

export default hot(module)(App)