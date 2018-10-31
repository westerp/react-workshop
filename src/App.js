import React from "react"
import Button from "./components/Button/Button"
import Textbox from "./components/Textbox/Textbox"
import Select from "./components/Select/Select"

export class App extends React.PureComponent{
	state = {
		clickCount: 0,
		name: "",
		homeTown: "",
		natoName: ""
	}

	onButtonClick = () => {
		this.setState({
			clickCount: this.state.clickCount + 1
		})
	}
	onNameChange = (newName) => {
		this.setState({
			name: newName
		})
	}

	render() {
		return <div>
			Click the button
			<Button
				title="Click me"
				onClick={this.onButtonClick}>
					Clicked {this.state.clickCount} number of times
			</Button>
			<Textbox
				placeholder="Name"
				value={this.state.name}
				onChange={this.onNameChange}
			/>
			<Select options={["alpha", "bravo", "charlie", "delta"]} value="charlie"/>
		</div>
	}
}

export default App