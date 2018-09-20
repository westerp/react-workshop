import {connect} from "react-redux"
import NewUser from "./NewUser"

import * as newUserDucks from "../../ducks/newUser.duck"

const mapStateToProps = (state) => {
	return {
		name: newUserDucks.getName(state)
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		onNameChange: (newName) => {
			dispatch(newUserDucks.setName(newName))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(NewUser)