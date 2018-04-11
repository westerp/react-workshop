import React from 'react';
import {Route, Switch} from 'react-router-dom';


import HomeContainer from './home';
import BasicsContainer from './basics';
import ApodContainer from './apod';

export const BaseRoute = () => (
	<Switch>
		<Route path="/basics" component={BasicsContainer}/>
		<Route path="/apod" component={ApodContainer}/>
		<Route component={HomeContainer}/>
	</Switch>
);
export default BaseRoute;