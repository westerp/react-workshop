import React, {Component} from 'react';
import Form from './MyForm/Form';

export class BasicContainer extends Component{
	onFormSubmit = (formValues) => {
		console.log(formValues);
	}

	render(){
		return (
			<div>
				<Form onSubmit={this.onFormSubmit}/>
			</div>
		);
	}
}
export default BasicContainer;