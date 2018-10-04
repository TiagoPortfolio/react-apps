import React, { Component } from "react";
import PropTypes from "prop-types";

class Key extends Component {
	constructor(props) {
		super(props);

		this.handleKeyPress = this.handleKeyPress.bind(this);
		this.handleOnClick = this.handleOnClick.bind(this);
	}

	componentDidMount() {
		document.addEventListener("keydown", this.handleKeyPress);
	}

	componentWillUnmount() {
		document.removeEventListener("keydown", this.handleKeyPress);
	}

	handleKeyPress(e) {
		if (this.props.keyCode.indexOf(e.keyCode) !== -1) {
			this.props.handleCommand(this.props.command);
		}
	}

	handleOnClick() {
		this.props.handleCommand(this.props.command);
	}

	render() {
		const { id, command } = this.props;

		return (
			<div id={id} className="calculator-key" onClick={this.handleOnClick}>
				<span>{command}</span>
			</div>
		);
	}
}

Key.propTypes = {
	id: PropTypes.string.isRequired,
	keyCode: PropTypes.number.isRequired,
	command: PropTypes.string.isRequired,
	handleCommand: PropTypes.func.isRequired,
};

export default Key;
