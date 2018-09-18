import React from "react"
import {Provider} from "react-redux"
import {ConnectedRouter} from "connected-react-router"
import {hot} from "react-hot-loader"
import {createStore, history} from "./store"
import {ducks} from "./ducks"

import Routes from "./routes"

import "./App.global.scss"

export class App extends React.PureComponent{
	constructor(props){
		super(props)
		this.setup()
	}

	get ducks() {
		return ducks
	}
	get storeState() {
		return this.store.getState()
	}
	get dispatch() {
		return this.store.dispatch
	}

	setupRedux(){
		this.store = createStore({})
		this.history = history
		window.app = this
	}
	setup(){
		this.setupRedux()
	}

	render(){
		return (
			<Provider store={this.store}>
				<ConnectedRouter history={this.history}>
					<Routes/>
				</ConnectedRouter>
			</Provider>
		)
	}
}
export default hot(module)(App)