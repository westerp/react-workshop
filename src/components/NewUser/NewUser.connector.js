import {connect} from "react-redux"
import NewUser from "./NewUser"

import * as newUserDuck from "../../ducks/newUser.duck"

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
		onSubmit: () => {}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(NewUser)