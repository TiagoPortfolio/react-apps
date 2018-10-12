import React, { Component } from "react";
import PropTypes from "prop-types";

class ArrowButton extends Component {
	constructor(props) {
		super(props);

		this.arrowClickHandler = this.arrowClickHandler.bind(this);
		this.toggleHoverStyle = this.toggleHoverStyle.bind(this);
	}

	arrowClickHandler() {
		this.props.arrowHandler(this.props.direction);
		this.toggleHoverStyle();
	}

	toggleHoverStyle() {
		const arrow = document.getElementById("style-" + this.props.direction);

		// Add hover style to simulate the arrow being pressed
		arrow.classList.toggle("hover");
		setTimeout(function() {
			arrow.classList.toggle("hover");
		}, 150);
	}

	render() {
		return (
			<div 
				id="arrowButton"
				onClick={this.arrowClickHandler}
			>
				<div
					id={"style-" + this.props.direction}
					className={"arrow-" + this.props.direction}
				/>
			</div>
		);
	}
}

ArrowButton.propTypes = {
	direction: PropTypes.string.isRequired,
	arrowHandler: PropTypes.func.isRequired
};

export default ArrowButton;
