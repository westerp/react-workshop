import React from 'react';
import {hot} from 'react-hot-loader';
import {Provider} from 'react-redux';
import createStore from './store';

import './App.global.scss';
import classes from './App.scss';
import CounterButton from './CounterButton';

const store = createStore({});
window._store = store;

export const App = (props) => {
  return (
    <Provider store={store}>
      <div className={classes.container}>
        <CounterButton/>
      </div>
    </Provider>
  );
};
export default hot(module)(App);