import {connect} from "react-redux"
import {push} from "connected-react-router"

import UserList from "./UserList"

import * as userDucks from "../../ducks/users.duck"

const mapStateToProps = (globalState) => {
	return {
		users: userDucks.getUsers(globalState)
	}
}
const mapDispatchToProps = (dispatch) => ({
	onNewClick: () => dispatch(push("/new"))
})
export default connect(mapStateToProps, mapDispatchToProps)(UserList)