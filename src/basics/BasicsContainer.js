import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';
import Form from './Form';

export const BasicsContainer = () => (
  <div>
    <div>
      <Button>This is a simple button</Button>
    </div>
    <hr/>
    <div>
      <Form/>
    </div>
  </div>
);
BasicsContainer.propTypes = {
};
export default BasicsContainer;