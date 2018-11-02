import {connect} from "react-redux"
import {push} from "connected-react-router"
import UserList from "./UserList"

const mapStateToProps = (state) => {
	return {}
}
const mapDispatchToProps = (dispatch) => {
	return {
		onNewUserClick: () => {
			dispatch(push("/new"))
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(UserList)