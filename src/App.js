import React from "react"
import {Provider} from "react-redux"
import {ConnectedRouter} from "connected-react-router"
import {newStore, history} from "./store"
import Routes from "./routes"

import "./styles/App.global.scss"

export class App extends React.PureComponent{
	constructor(props) {
		super(props)
		this.setupRedux()

		window.app = this
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