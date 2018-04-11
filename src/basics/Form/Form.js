import React, {Component} from 'react';

export class Form extends Component{
	state = {
		value: ''
	}

	onInputChange = evt => {
		this.setState({
			value: evt.target.value
		});
	}

	render(){
		const {value} = this.state;
		return (
			<div>
				<input type="text" value={value} onChange={this.onInputChange}/>
			</div>
		);
	}
}
export default Form;