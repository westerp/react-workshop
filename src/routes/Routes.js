import React from "react"
import {Switch, Route} from "react-router"

import Nav from "../components/Nav"
import UserList from "../components/UserList"
import Blank from "../components/Blank"

export const Routes = () => {
	return (
		<React.Fragment>
			<Nav/>
			<UserList/>
			<Switch>
				<Route path="/new" component={Blank}/>
				<Route path="/view" component={Blank}/>
				<Route path="/edit" component={Blank}/>
			</Switch>
		</React.Fragment>
	)
}
export default Routes