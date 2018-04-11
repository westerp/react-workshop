import React from 'react';
import PropTypes from 'prop-types';

export const Checkbox = ({checked, id, onChange, children, ...rest}) => (
  <div>
    <input type="checkbox" id={id} checked={checked}
      onChange={evt => onChange(evt.target.checked)} {...rest}/>
    <label for={id}>{children}</label>
  </div>
);
Checkbox.defaultProps = {
  checked: false
};
Checkbox.propTypes = {
  checked: PropTypes.bool,
  id: PropTypes.string.isRequired,

  onChange: PropTypes.func.isRequired
};
export default Checkbox;