import React from 'react';
import PropTypes from 'prop-types';

export const Textbox = (props) => {
  const {value, onTextChange} = props;
  return (
    <input placeholder="Enter your name" type="text" value={value} onChange={
      evt => 
      onTextChange(evt.target.value)
    }/>
  );
};
Textbox.defaultProps = {
  value: ''
};
Textbox.propTypes = {
  value: PropTypes.string,
  onTextChange: PropTypes.func.isRequired
};
export default Textbox;