import React from "react"
import PropTypes from "prop-types"
import {default as MuiAvatar} from "material-ui/Avatar"
import CircularProgress from "material-ui/CircularProgress"
import omit from "lodash/omit"
import {loadImage} from "../../utils/imageUtils"

const MODE = {
	loading: "loading",
	failed: "failed",
	success: "success"
}

export class Avatar extends React.PureComponent{
	state = {
		mode: MODE.noImage
	}

	componentWillReceiveProps(newProps){
		if (this.props.src !== newProps.src){
			this.loadImage(newProps.src)
		}
	}

	async loadImage(src){
		if (!src) return
		this.setState({ mode: MODE.loading })
		try {
			await loadImage(src)
			this.setState({ mode: MODE.success })
		} catch (error){
			this.setState({ mode: MODE.failed })
		}
	}

	get hasIamgeUrl(){
		const src = (this.props.src || "").toLocaleLowerCase()
		return src.startsWith("http") || src.startsWith("//")
	}
	get additionalProps(){
		return omit(this.props, ["src"])
	}

	renderLoading(){
		return (<CircularProgress size={this.props.size}/>)
	}
	renderFailed(){
		return (<MuiAvatar {...this.additionalProps}>Err</MuiAvatar>)
	}
	renderSuccess(){
		return (<MuiAvatar src={this.props.src} {...this.additionalProps}/>)
	}
	renderNoImage(){
		return (<MuiAvatar {...this.additionalProps}>N/A</MuiAvatar>)
	}
	render(){
		const {mode} = this.state

		if (!this.hasIamgeUrl){
			return this.renderNoImage()
		}

		switch (mode){
		case (MODE.loading):
			return this.renderLoading()
		case (MODE.failed):
			return this.renderFailed()
		}
		return this.renderSuccess()
	}

	static defaultProps = {
		size: 200
	}
	static propTypes = {
		src: PropTypes.string,
		size: PropTypes.number
	}
}
export default Avatar