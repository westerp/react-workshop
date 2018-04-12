import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Button from './Button';
import Form from './Form';

export class BasicContainer extends Component{
	render(){
		return (
			<div>
				<ol>
					<li>Create a basic component with a Button that responds to clicks</li>
					<li>Create a basic form with a text input and submit that posts the form data to console</li>
				</ol>
				<div>
					<Button>Example button</Button>
				</div>
				<div>
					<Form/>
				</div>
			</div>
		);
	}

	static propTypes = {
	}
}
export default BasicContainer;