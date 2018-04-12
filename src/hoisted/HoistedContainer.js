import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class HoistedContainer extends Component{
	state = {
		name: '',
		
		comments: '',
		newsletter: false,
		acceptTerms: false
	}

  render(){
    return (
      <div>
        <ol>
          <li>
            Create individual form components
            <ol>
              <li>Text (type text, textarea, number)</li>
              <li>Radio button controller that takes an array of (string:value, string:text)</li>
              <li>Checkbox</li>
            </ol>
          </li>
          <li>
            Create a form with 
          </li>
        </ol>
      </div>
    );
  }

  static propTypes = {
  }
}
export default HoistedContainer;