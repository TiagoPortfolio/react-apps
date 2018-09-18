import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DrumPad extends Component {
	constructor(props) {
		super(props);
		this.state = {
			// text: defaultText.join("\n")
		};

		this.handleKeyPress = this.handleKeyPress.bind(this);
		this.playSound = this.playSound.bind(this);
	}

	componentDidMount() {
		document.addEventListener('keydown', this.handleKeyPress);
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.handleKeyPress);
	}

	handleKeyPress(e) {
		console.log(e.keyCode);
		// if (e.keyCode === this.props.keyCode) {
		// 	this.playSound();
		// }
		console.log(e.keyCode);
	}

	playSound() {
		const audio = document.getElementById(this.props.drum);
		audio.play();
	}

	render() {
		const audio = '';

		return (
		    <div id={this.props.id} className="drum-pad" onClick={this.props.drumPadClickHandler}>
		    	{this.props.drum}
				<audio id={this.props.drum} className="clip">
					<source src="myAudio.mp3" type="audio/mp3" />
					<source src="myAudio.ogg" type="audio/ogg" />
					<p>Your browser doesn't support HTML5 audio.</p>
				</audio>
			</div>
		);
	}
}

// DrumPad.propTypes = {
// 	text: PropTypes.string.isRequired,
// 	drumPadHandler: PropTypes.func.isRequired
// };

export default DrumPad;