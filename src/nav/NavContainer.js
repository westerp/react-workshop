import React from 'react';
import PropTypes from 'prop-types';

import {NavLink} from 'react-router-dom';

import classes from './NavContainer.scss';

export const NavContainer = () => (
  <nav>
    <ol className={classes.menu}>
      <li><NavLink to="/" exact>Home</NavLink></li>
      <li><NavLink to="/basics">Basics</NavLink></li>
    </ol>
  </nav>
);
NavContainer.propTypes = {
};
export default NavContainer;