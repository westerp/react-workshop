import React from 'react';
import PropTypes from 'prop-types';

const func = ({title, ...rest}) => {
  return <div title={title}></div>
}

func({
  title: '123',
  value: 'abc',
  bool: true
})

export const Textarea = ({value, onChange, type, ...rest}) => (
  type === 'textarea' ? 
    (<textarea value={value} onChange={evt => onChange(evt.target.value)} {...rest}/>)
    :
    (<input type={type} value={value} onChange={evt => onChange(evt.target.value)} {...rest}/>)
);
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