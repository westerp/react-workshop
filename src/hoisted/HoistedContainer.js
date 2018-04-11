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
        <label>
					<TextInput/>
				</label>
      </div>
    );
  }

  static propTypes = {
  }
}
export default HoistedContainer;