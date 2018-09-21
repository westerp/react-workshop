import {connect} from "react-redux"
import ViewUser from "./ViewUser"

const mapStateToProps = (state) => {
	return {
		user: {
			name: "hello",
			description: "desc",
			type: "type"
		}
	}
}
const mapDispatchToProps = (dispatch) => ({
})
export default connect(mapStateToProps, mapDispatchToProps)(ViewUser)