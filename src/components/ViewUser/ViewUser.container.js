import {connect} from "react-redux"
import ViewUser from "./ViewUser"

import * as usersDuck from "../../ducks/users.duck"

const mapStateToProps = (state, ownProps) => {
	const user = usersDuck.getUser(state, ownProps.match.params.id)
	return user
}
const mapDispatchToProps = (dispatch) => ({
})
export default connect(mapStateToProps, mapDispatchToProps)(ViewUser)