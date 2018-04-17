/* global module */

import React from 'react';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import {hot} from 'react-hot-loader';

import {createStore, history} from './store';
import {NavContainer, BaseRoute} from './nav';

import './App.global.scss';

export class App extends React.PureComponent{
	constructor(props){
		super(props);

		this.setup();
	}
	
	setupRedux(){
		this.store = createStore({});
		this.history = history;
	}
	setup(){
		this.setupRedux();
	}

	render(){
		return (
			<Provider store={this.store}>
				<ConnectedRouter history={this.history}>
					<div>
						<header>
							<NavContainer/>
						</header>
						<div>
							<BaseRoute/>
						</div>
						<footer>
						</footer>
					</div>
				</ConnectedRouter>
			</Provider>
		);
	}
}
export default hot(module)(App);