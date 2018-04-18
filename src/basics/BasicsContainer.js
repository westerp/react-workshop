import React, {Component} from 'react';
import Button from './Button';
import Textbox from './Textbox';

export class BasicContainer extends Component{
  state = {
		nrOfClicks: 0,
		inputValue: ''
	}

  onButtonClick = () => {
    this.setState({
      nrOfClicks: this.state.nrOfClicks + 1
    });
	}
	
	onInputChange = (newInputText) => {
		this.setState({
			inputValue: newInputText
		});
	}
	
	render(){
		return (
			<div>
				<Button
					onClick={this.onButtonClick}
					nrOfClicks={this.state.nrOfClicks}>
				</Button>
				<Textbox
					value={this.state.inputValue}
					onTextChange={this.onInputChange}
					/>
			</div>
		);
	}
}
export default BasicContainer;