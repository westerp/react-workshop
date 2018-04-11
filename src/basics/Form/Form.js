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

	onSubmit = evt => {
		console.log('submitted', this.state);
		evt.preventDefault();
	}

	render(){
		const {value} = this.state;
		return (
			<form onSubmit={this.onSubmit}>
				<input type="text" value={value} onChange={this.onInputChange}/>
				<input type="submit"/>
			</form>
		);
	}
}
export default Form;