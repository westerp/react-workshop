import React from "react"
import {Switch, Route, Redirect} from "react-router"

import Nav from "../components/Nav"
import UserList from "../components/UserList"
import NewUser from "../components/NewUser"
import ViewUser from "../components/ViewUser"
import Blank from "../components/Blank"

export const Routes = () => {
	return (
		<React.Fragment>
			<Nav/>
			<UserList/>
			<Switch>
				<Route path="/new" component={NewUser}/>
				<Route path="/view/:id" component={ViewUser}/>
				<Route path="/edit/:id" component={Blank}/>
				<Redirect to="/"/>
			</Switch>
		</React.Fragment>
	)
}
export default Routes