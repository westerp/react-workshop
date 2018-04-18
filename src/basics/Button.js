import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Button extends Component{
  render(){
    const {children, title, onClick, nrOfClicks} = this.props;
    return (
      <button
        type="button"
        title={title}
        onClick={onClick}>
          Clicked {nrOfClicks} times
        </button>
      );
  }

  static defaultProps = {
    title: 'Missing title'
  }
  static propTypes = {
    title: PropTypes.string
  }
}

export default Button;