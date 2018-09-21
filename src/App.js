import React from "react"
import {hot} from "react-hot-loader"
import NewUser from "./components/NewUser"
import {Provider} from "react-redux"
import {createReduxStore, history} from "./store"
import {ducks} from "./ducks"
import UserList from "./components/UserList"
import ViewUser from "./components/ViewUser"
import {ConnectedRouter} from "connected-react-router" 

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
					<React.Fragment>
						<UserList/>
						<NewUser/>
						<ViewUser/>
					</React.Fragment>
				</ConnectedRouter>
			</Provider>
		)
	}
}

export default hot(module)(App)