import {connect} from "react-redux"
import NewUser from "./NewUser"

import * as newUserDucks from "../../ducks/newUser.duck"

const mapStateToProps = (state) => {
	return {
		name: newUserDucks.getName(state),
		description: newUserDucks.getDescription(state),
		type: newUserDucks.getType(state)
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		onNameChange: (newName) => {
			dispatch(newUserDucks.setName(newName))
		},
		onDescriptionChange: (newDescription) => {
			dispatch(newUserDucks.setDescription(newDescription))
		},
		onTypeChange: (newType) => {
			dispatch(newUserDucks.setType(newType))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(NewUser)