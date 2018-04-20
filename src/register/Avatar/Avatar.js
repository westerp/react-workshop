import React from 'react';
import PropTypes from 'prop-types';
import {default as MuiAvatar} from 'material-ui/Avatar';
import CircularProgress from 'material-ui/CircularProgress';
import {loadImage} from '../../utils/imageUtils';

const MODE = {
	loading: 'loading',
	failed: 'failed',
	success: 'success'
};

export class Avatar extends React.PureComponent{
	state = {
		mode: ''
	}

	constructor(props){
		super(props);
		this.loadImage(props.src);
	}

	componentWillReceiveProps(newProps){
		if (this.props.src !== newProps.src){
			this.loadImage(newProps.src);
		}
	}

	async loadImage(src){
		if (!src) return;
		this.setState({ mode: MODE.loading });
		try {
			await loadImage(src);
			this.setState({ mode: MODE.success });
		} catch (err) {
			console.error(err);
			this.setState({ mode: MODE.failed });
		}
	}

	renderLoading(){
		return (<CircularProgress size={this.props.size}/>);
	}
	renderFailed(){
		return (<MuiAvatar size={this.props.size}>Err</MuiAvatar>);
	}
	renderSuccess(){
		return (<MuiAvatar src={this.props.src} size={this.props.size}/>);
	}
	renderNoImage(){
		return (<MuiAvatar size={this.props.size}>N/A</MuiAvatar>);
	}
	render(){
		if (!this.props.src){
			return this.renderNoImage();
		}

		switch (this.state.mode){
			case (MODE.loading):
				return this.renderLoading();
			case (MODE.failed):
				return this.renderFailed();
		}

		return this.renderSuccess();
	}

	static defaultProps = {
		size: 200
	}
	static propTypes = {
		src: PropTypes.string,
		size: PropTypes.number
	}
}
export default Avatar;