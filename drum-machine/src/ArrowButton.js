import React, { Component } from "react";
import PropTypes from "prop-types";

class ArrowButton extends Component {
	constructor(props) {
		super(props);

		this.arrowClickHandler = this.arrowClickHandler.bind(this)
	}

	arrowClickHandler() {
		this.props.arrowHandler(this.props.direction);
	}

	render() {
		return (
			<div
				id="arrowButton"
				onClick={this.arrowClickHandler}
				className={"arrow-" + this.props.direction}
			/>
		);
	}
};

ArrowButton.propTypes = {
	direction: PropTypes.string.isRequired,
	arrowHandler: PropTypes.func.isRequired
};

export default ArrowButton;
