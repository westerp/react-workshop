import React from "react"
import {Switch, Route} from "react-router"

import UserList from "../components/UserList"
import NewUser from "../components/NewUser"
import ViewUser from "../components/ViewUser"

export class Routes extends React.Component{
	render() {
		return (
			<React.Fragment>
				<UserList/>
				<Switch>
					<Route path="/new" component={NewUser}/>
					<Route path="/view/:id" component={ViewUser}/>
				</Switch>
			</React.Fragment>
		)
	}
}

export default Routes