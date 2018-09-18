import React from "react"
import {Route, Switch} from "react-router-dom"


import HomeContainer from "../home"
import RegisterContainer from "../register"
import Route404 from "../route404"

export const BaseRoute = () => (
	<Switch>
		<Route path="/" exact component={HomeContainer}/>
		<Route path="/register" component={RegisterContainer}/>
		<Route component={Route404}/>
	</Switch>
)
export default BaseRoute