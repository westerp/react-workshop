import React from 'react';

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
export default NavContainer;