import {connect} from "react-redux"
import NewUser from "./NewUser"
import { push } from "connected-react-router"

import * as newUserDuck from "../../ducks/newUser.duck"
import {addNewUserToUsers} from "../../ducks/newUser.combiner"

const mapStateToProps = (globalState) => {
	return {
		name: newUserDuck.getPropValue(globalState, "name"),
		type: newUserDuck.getPropValue(globalState, "type"),
		description: newUserDuck.getPropValue(globalState, "description"),
		types: newUserDuck.getTypes(globalState)
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		onPropChange: (name, newValue) => {
			const actionToDispatch = newUserDuck.setPropValue(name, newValue)
			dispatch(actionToDispatch)
		},
		onSubmit: () => {
			dispatch(addNewUserToUsers())
			dispatch(newUserDuck.resetNewUser())
			dispatch(push("/"))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(NewUser)