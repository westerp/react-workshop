import React from "react"
import {Switch, Route} from "react-router"

import UserList from "../components/UserList"
import Blank from "../components/Blank"

export const Routes = () => {
	return (
		<React.Fragment>
			<UserList/>
			<Switch>
				<Route path="/" component={Blank}/>
				<Route path="/new" component={Blank}/>
				<Route path="/view" component={Blank}/>
				<Route path="/edit" component={Blank}/>
			</Switch>
		</React.Fragment>
	)
}
export default Routes