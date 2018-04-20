import React from 'react';
import {Route, Switch} from 'react-router-dom';

import HomeContainer from '../home';
import RegisterFormContainer from '../register';
import UsersContainer from '../users/UsersContainer';
import Route404 from '../route404';

export const BaseRoute = () => (
	<Switch>
		<Route path="/" exact component={HomeContainer}/>
		
		<Route path="/register" component={RegisterFormContainer}/>
		<Route path="/users" component={UsersContainer}/>

		<Route component={Route404}/>
	</Switch>
);
export default BaseRoute;