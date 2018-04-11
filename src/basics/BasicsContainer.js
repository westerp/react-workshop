import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Button from './Button';
import Form from './Form';

export class BasicContainer extends Component{
	render(){
		return (
			<div>
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