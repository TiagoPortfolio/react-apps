import React, { Component } from "react";
import PropTypes from "prop-types";

class Key extends Component {
	constructor(props) {
		super(props);

		this.handleKeyPress = this.handleKeyPress.bind(this);
		this.handleOnClick = this.handleOnClick.bind(this);
		this.playSound = this.playSound.bind(this);
		this.toggleHoverStyle = this.toggleHoverStyle.bind(this);
	}

	componentDidMount() {
		document.addEventListener("keydown", this.handleKeyPress);
	}

	componentWillUnmount() {
		document.removeEventListener("keydown", this.handleKeyPress);
	}

	handleKeyPress(e) {
		if (this.keyCode.indexOf(e.keyCode) !== -1) {
			this.props.handleCommand(this.props.key);
		}
	}

	handleOnClick() {
		this.playSound();
	}

	playSound() {
		// const audio = document.getElementById(this.props.drum);
		// audio.load();
		// audio.volume = this.props.volume / 100;
		// audio.play();

		// Update state from App
		// this.props.updateDescription(this.props.description);

		// this.toggleHoverStyle();
	}

	toggleHoverStyle() {
		// const drumPad = document.getElementById(this.props.id);

		// // Add hover style to simulate the drumpad being pressed
		// drumPad.classList.toggle("hover");
		// setTimeout(function() {
		// 	drumPad.classList.toggle("hover");
		// }, 150);
	}

	render() {
		const { id, key } = this.props;

		return (
			<div id={id} className="calculator-key" onClick={this.props.handleCommand}>
				<span>{key}</span>
			</div>
		);
	}
}

// Key.propTypes = {
// 	id: PropTypes.string.isRequired,
// 	keyCode: PropTypes.number.isRequired,
// 	drum: PropTypes.string.isRequired,
// 	volume: PropTypes.number.isRequired,
// 	style: PropTypes.string.isRequired,
// 	description: PropTypes.string.isRequired,
// 	updateDescription: PropTypes.func.isRequired
// };

export default Key;
