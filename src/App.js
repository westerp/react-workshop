import React from "react"
import Button from "./components/Button/Button"
import Textbox from "./components/Textbox/Textbox"

export class App extends React.PureComponent{
	onButtonClick = () => {
		console.log(this.boooo())
	}

	boooo() {
		return "hello from foo"
	}

	render() {
		return <div>
			Click the button
			<Button title="Click me" onClick={this.onButtonClick}>Heading button</Button>
			<Textbox placeholder="Enter some text"/>
			<Textbox placeholder="Enter some text here" readOnly/>
			{/* <Select options={["alpha", "bravo", "charlie"]} value="charlie"/> */}
		</div>
	}
}

export default App