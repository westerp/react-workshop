import React from 'react';
import PropTypes from 'prop-types';

export const Textbox = (props) => {
  const {value, onChange} = props;
  return (
    <input placeholder="Enter your name" type="text" value={value} onChange={onChange}/>
  );
};
Textbox.defaultProps = {
  value: ''
};
Textbox.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired
};