import {connect} from "react-redux"
import NewUser from "./NewUser"
import {push} from "connected-react-router"

import * as newUserDuck from "../../ducks/newUser.duck"
import * as userConnectors from "../../ducks/user.connectors"

const mapStateToProps = (state) => {
	return {
		name: newUserDuck.getPropValue(state, "name"),
		type: newUserDuck.getPropValue(state, "type"),
		types: newUserDuck.getTypes(state),
		description: newUserDuck.getPropValue(state, "description")
	}
}
const mapDispatchToProps = (dispatch) => ({
	onReset: () => dispatch(newUserDuck.resetUser()),
	onPropChange: (propName, propValue) => dispatch(newUserDuck.setPropValue(propName, propValue)),
	onCreate: () => {
		dispatch(userConnectors.addNewUser())
		dispatch(push("/"))
	}
})
export default connect(mapStateToProps, mapDispatchToProps)(NewUser)