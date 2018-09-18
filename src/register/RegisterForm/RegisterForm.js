import React from "react"
import PropTypes from "prop-types"
import TextField from "material-ui/TextField"
import DatePicker from "material-ui/DatePicker"
import Avatar from "../Avatar"
import RaisedButton from "material-ui/RaisedButton"

import classes from "./RegisterForm.scss"

export class RegisterForm extends React.PureComponent{
	makeHandler = onChange => {
		return (evt, newValue) => {
			onChange(newValue)
		}
	}

	onSubmit = (evt) => {
		evt.preventDefault()
		this.props.onSubmit()
	}
	onReset = (evt) => {
		evt.preventDefault()
		this.props.onReset()
	}

	render(){
		const {disabled, ...props} = this.props

		return (
			<div className={classes.container}>
				<h1>Register a new user</h1>
				<form onSubmit={this.onSubmit}>
					<div>
						<TextField floatingLabelText="First name"
							value={props.firstName}
							onChange={this.makeHandler(props.onFirstNameChange)}
							fullWidth disabled={disabled}/>
						<TextField floatingLabelText="Last name"
							value={props.lastName}
							onChange={this.makeHandler(props.onLastNameChange)}
							fullWidth disabled={disabled}/>
						<DatePicker
							value={props.dateOfBirth}
							onChange={this.makeHandler(props.onDateOfBirthChange)}
							floatingLabelText="Date of birth"
							maxDate={new Date()}
							openToYearSelection fullWidth disabled={disabled}/>
						<hr className={classes.separator}/>
						<TextField floatingLabelText="User name"
							value={props.userName}
							onChange={this.makeHandler(props.onUserNameChange)}
							errorText={props.userNameInvalidReason}
							hintText="Make it something unique"
							fullWidth disabled={disabled}/>
						<TextField floatingLabelText="Email"
							value={props.email}
							onChange={this.makeHandler(props.onEmailChange)}
							errorText={props.emailInvalidReason}
							fullWidth disabled={disabled}/>
					</div>
					<div className={classes.avatarFrame}>
						<Avatar src={props.avatarImageSrc} size={200}/>
						<hr className={classes.separator}/>
						<TextField floatingLabelText="Avatar image url"
							value={props.avatarImageSrc}
							onChange={this.makeHandler(props.onAvatarImageSrcChange)}
							fullWidth disabled={disabled}/>
					</div>
				</form>
				<div className={classes.controls}>
					<RaisedButton label="Reset" disabled={disabled} onClick={this.onReset}/>
					<RaisedButton label="Add" disabled={disabled} primary onClick={this.onSubmit}/>
				</div>
			</div>
		)
	}
	static defaultProps = {
		firstName: "",
		lastName: "",
		dateOfBirth: new Date(),

		userName: "",
		userNameInvalidReason: "",
		email: "",
		emailInvalidReason: "",

		avatarImageSrc: "",
		avatarSubheading: "",
		disabled: false
	}
	static propTypes = {
		firstName: PropTypes.string,
		lastName: PropTypes.string,
		dateOfBirth: PropTypes.instanceOf(Date),

		userName: PropTypes.string,
		userNameInvalidReason: PropTypes.string,
		email: PropTypes.string,
		emailInvalidReason: PropTypes.string,

		avatarImageSrc: PropTypes.string,
		disabled: PropTypes.bool,

		onFirstNameChange: PropTypes.func.isRequired,
		onLastNameChange: PropTypes.func.isRequired,
		onDateOfBirthChange: PropTypes.func.isRequired,
		onUserNameChange: PropTypes.func.isRequired,
		onEmailChange: PropTypes.func.isRequired,
		onAvatarImageSrcChange: PropTypes.func.isRequired,

		onSubmit: PropTypes.func.isRequired,
		onReset: PropTypes.func.isRequired
	}
}
export default RegisterForm