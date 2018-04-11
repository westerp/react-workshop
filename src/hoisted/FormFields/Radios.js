import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Radios extends Component{
  renderRadioButton(key, option){
    const id = `${this.props.name}-${key}`;
    return (
      <div>
        <input id={id} type="radio" value={option.value}/>
        <label for={id}>{option.text}</label>
      </div>
    );
  }

  render(){
    return this.props.options.map((option, key) => this.renderRadioButton(key, option));
  }

  static defaultProps = {
    options: []
  }
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })),

    name: PropTypes.string.isRequired
  }
}
export default Radios;