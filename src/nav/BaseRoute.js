import React from "react"
import {Route, Switch} from "react-router-dom"


import HomeContainer from "../home"
import BasicsContainer from "../basics"
import Route404 from "../route404"

export const BaseRoute = () => (
	<Switch>
		<Route path="/" exact component={HomeContainer}/>
		<Route path="/basics" component={BasicsContainer}/>
		<Route component={Route404}/>
	</Switch>
)
export default BaseRoute