import React, { Component } from "react";
import PropTypes from "prop-types";

const ArrowButton = ({ direction, arrowHandler }) => {
	return (
		<div
			id="arrowButton"
			onClick={arrowHandler(direction)}
			className={"arrow-" + direction}
		/>
	);
};

ArrowButton.propTypes = {
	direction: PropTypes.string.isRequired,
	arrowHandler: PropTypes.func.isRequired
};

export default ArrowButton;
