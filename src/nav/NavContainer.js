import React from 'react';
import {NavLink, withRouter} from 'react-router-dom';

import classes from './NavContainer.scss';

export class NavContainer extends React.PureComponent{
  state = {
    menuOpen: false
  }

  toggleMenuOpen = () => {
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  }

  render(){
    return (
      <nav>
        <ol className={classes.menu}>
          <li><NavLink to="/" exact>Home</NavLink></li>
          <li><NavLink to="/register">Create User</NavLink></li>
          <li><NavLink to="/users">List all users</NavLink></li>
        </ol>
      </nav>
    );
  }
}
export default withRouter(NavContainer);