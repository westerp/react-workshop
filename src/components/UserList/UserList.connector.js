import {connect} from "react-redux"
import {push} from "connected-react-router"
import UserList from "./UserList"

import {getUsers} from "../../ducks/users.duck"

const mapStateToProps = (globalState) => {
	return {
		users: getUsers(globalState)
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		onNewUserClick: () => {
			dispatch(push("/new"))
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(UserList)