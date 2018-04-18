import React from 'react';
import PropTypes from 'prop-types';

import classes from './Textarea.scss';

const idGen = (() => {
  let num = 0;
  return () => {
    return `dynamicid-${num++}`;
  };
})();

export const Textarea = ({label, value, placeholder, onChange, type, ...rest}) => {
  const id = idGen();
  return (
    <div className={classes.container}>
      <label htmlFor={id}>{label || placeholder}</label>
      {type === 'textarea' ? 
        (<textarea placeholder={placeholder} id={id} value={value} onChange={evt => onChange(evt.target.value)} {...rest}/>)
        :
        (<input placeholder={placeholder} id={id} type={type} value={value} onChange={evt => onChange(evt.target.value)} {...rest}/>)
      }
    </div>
    );
}
Textarea.defaultProps = {
  value: '',
  type: 'text'
};
Textarea.propTypes = {
  value: PropTypes.string,
  textarea: PropTypes.bool,
  onChange: PropTypes.func.isRequired
};
export default Textarea;