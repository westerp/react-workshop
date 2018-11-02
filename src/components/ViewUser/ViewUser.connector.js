import {connect} from "react-redux"
import ViewUser from "./ViewUser"

import {getUser} from "../../ducks/users.duck"

const mapStateToProps = (globalState, ownProps) => {
	const user = getUser(globalState, ownProps.match.params.id)

	return {
		...user
	}
}
export default connect(mapStateToProps)(ViewUser)