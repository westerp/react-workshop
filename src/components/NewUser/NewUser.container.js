import {connect} from "react-redux"
import NewUser from "./NewUser"

import * as newUserDucks from "../../ducks/newUser.duck"

const mapStateToProps = (state) => {
	return {
		name: newUserDucks.getName(state),
		type: "User",
		description: "desc"
	}
}

export default connect(mapStateToProps)(NewUser)