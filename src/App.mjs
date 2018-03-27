import React from 'react';
import PropTypes from 'prop-types';

// import classes from './App.scss';
const classes = {};

export class App extends React.PureComponent{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className={classes.root}>
        App
      </div>
    );
  }
}
export default App;