import React, {Component} from 'react';
import Button from './Button';

export class BasicContainer extends Component{
  state = {
    nrOfClicks: 0
	}

  onButtonClick = () => {
    this.setState({
      nrOfClicks: this.state.nrOfClicks + 1
    });
  }
	
	render(){
		return (
			<div>
				<Button
					onClick={this.onButtonClick}
					nrOfClicks={this.state.nrOfClicks}>
				</Button>
				<Button
					onClick={this.onButtonClick}
					nrOfClicks={this.state.nrOfClicks}>
				</Button>
			</div>
		);
	}
}
export default BasicContainer;