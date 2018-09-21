import React from "react"
import {Switch, Route} from "react-router"

import NewUser from "../components/NewUser"
import UserList from "../components/UserList"
import ViewUser from "../components/ViewUser"

export class Routes extends React.Component{
	render(){
		return (
			<>
				<UserList/>
				<Switch>
					<Route path="/new" exact component={NewUser}/>
					<Route path="/view/:userId" component={ViewUser}/>
				</Switch>
			</>
		)
	}
}
export default Routes