import {connect} from "react-redux"
import NewUser from "./NewUser"

import * as newUserDucks from "../../ducks/newUser.duck"

const mapStateToProps = (state) => {
	return {
		name: newUserDucks.getName(state),
		description: newUserDucks.getDescription(state)
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		onNameChange: (newName) => {
			dispatch(newUserDucks.setName(newName))
		},
		onDescriptionChange: (newDescription) => {
			dispatch(newUserDucks.setDescription(newDescription))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(NewUser)