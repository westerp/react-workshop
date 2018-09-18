import {connect} from "react-redux"

import UserList from "./UserList"

import * as userDucks from "../../ducks/users.duck"

const mapStateToProps = (globalState) => {
	return {
		users: userDucks.getUser(globalState)
	}
}
export default connect(mapStateToProps)(UserList)