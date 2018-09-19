import React from "react"
import Button from "./Button"
import {hot} from "react-hot-loader"

export class App extends React.PureComponent{
	render() {
		return (
			<div>
				<Button text="Custom text"/>
			</div>
		)
	}
}

export default hot(module)(App)