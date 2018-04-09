import React from 'react';
import PropTypes from 'prop-types';
import {hot} from 'react-hot-loader';

import Component from './Component'

import './App.global.scss';
import classes from './App.scss';

export class App extends React.PureComponent{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className={classes.root}>
        <h1>App</h1>
        <Component text="Cool"/>
      </div>
    );
  }
}
export default hot(module)(App);