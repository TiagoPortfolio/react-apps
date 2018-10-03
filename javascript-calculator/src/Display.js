import React, { Component } from "react";
import PropTypes from "prop-types";
// import ArrowButton from "./ArrowButton";

class Display extends Component {
	constructor(props) {
		super(props);

		// this.handleStyleChange = this.handleStyleChange.bind(this);
		// this.handleSliderChange = this.handleSliderChange.bind(this);
	}

	// handleSliderChange(e) {
	// 	this.props.updateVolume(parseInt(e.target.value, 10));
	// }

	// handleStyleChange(direction) {
	// 	this.props.updateStyle(direction);
	// }

	render() {

		return (
			<div id="display">
				
			</div>
		);
	}
}

// Display.propTypes = {
// 	style: PropTypes.string.isRequired,
// 	description: PropTypes.string.isRequired,
// 	volume: PropTypes.number.isRequired,
// 	updateVolume: PropTypes.func.isRequired
// };

export default Display;
