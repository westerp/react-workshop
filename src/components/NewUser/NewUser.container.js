import {connect} from "react-redux"
import NewUser from "./NewUser"

import * as newUserDuck from "../../ducks/newUser.duck"

const mapStateToProps = (state) => {
	return {
		name: newUserDuck.getPropValue(state, "name"),
		type: newUserDuck.getPropValue(state, "type"),
		description: newUserDuck.getPropValue(state, "description")
	}
}
const mapDispatchToProps = (dispatch) => ({
	onPropChange: (propName, propValue) => dispatch(newUserDuck.setPropValue(propName, propValue))
})
export default connect(mapStateToProps, mapDispatchToProps)(NewUser)