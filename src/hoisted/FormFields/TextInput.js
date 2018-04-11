import React from 'react';
import PropTypes from 'prop-types';

export const TextInput = ({value, type, multiLine, onChange, children, ...rest}) => {
  if (multiLine){
    return (<textare value={value} onChange={evt => onChange(evt.target.value)} {...rest}/>);
  }

  return (<input type={type} value={value} onChange={evt => onChange(evt.target.value)} {...rest}/>);
};
TextInput.defaultProps = {
	value: '',
	type: 'text',
  multiLine: false
};
TextInput.propTypes = {
	text: PropTypes.string,
  value: PropTypes.string,
  multiLine: PropTypes.bool,
  
  onChange: PropTypes.func.isRequired
};
export default TextInput;