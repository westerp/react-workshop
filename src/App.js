import React from "react"
import {Provider} from "react-redux"
import {ConnectedRouter} from "connected-react-router"
import {hot} from "react-hot-loader"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"

import {createStore, history} from "./store"
import {NavContainer, BaseRoute} from "./nav"

import "./App.global.scss"

export class App extends React.PureComponent{
	constructor(props){
		super(props)
		this.setup()
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
					<MuiThemeProvider>
						<React.Fragment>
							<header>
								<NavContainer/>
							</header>
							<div>
								<BaseRoute/>
							</div>
							<footer>
							</footer>
						</React.Fragment>
					</MuiThemeProvider>
				</ConnectedRouter>
			</Provider>
		)
	}
}
export default hot(module)(App)