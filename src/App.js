import React from "react"
import {hot} from "react-hot-loader"
import NewUser from "./components/NewUser"

export class App extends React.PureComponent{
	render() {
		return (
			<>
				<NewUser/>
			</>
		)
	}
}

export default hot(module)(App)