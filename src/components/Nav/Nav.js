import React from "react"
import {Link} from "react-router-dom"

export const Nav = () => {
	return (
		<nav>
			<ol>
				<li><Link to="/new">New</Link></li>
			</ol>
		</nav>
	)
}
export default Nav