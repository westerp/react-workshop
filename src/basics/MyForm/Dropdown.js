import React from 'react';
import PropTypes from 'prop-types';

export const Dropdown = ({options, value, onChange}) => (
  <select value={value} onChange={evt => onChange(evt.target.value)}>
    {options.map(({value, label}) => (
      <option key={value} value={value}>{label || value}</option>
    ))}
  </select>
);
Dropdown.defaultProps = {
  value: '',
  options: []
};
Dropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string
  })),
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired
};
export default Dropdown;