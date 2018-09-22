import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DrumPad extends Component {
	constructor(props) {
		super(props);

		this.handleKeyPress = this.handleKeyPress.bind(this);
		this.handleOnClick = this.handleOnClick.bind(this);
		this.playSound = this.playSound.bind(this);
		this.toggleHoverStyle = this.toggleHoverStyle.bind(this);
	}

	componentDidMount() {
		document.addEventListener('keydown', this.handleKeyPress);
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.handleKeyPress);
	}

	handleKeyPress(e) {
		if (e.keyCode === this.props.keyCode) {
			// Add class to give hover style
			this.playSound();
		}
	}

	handleOnClick() {
		this.playSound();
	}

	playSound() {
		const audio = document.getElementById(this.props.drum);
		audio.load();
		audio.volume = this.props.volume / 100;
		audio.play();

		// Update state from App
		this.props.updateDescription(this.props.description);

		this.toggleHoverStyle();
	}

	toggleHoverStyle() {
		const drumPad = document.getElementById(this.props.id);

		// Add hover style to simulate the drumpad being pressed
		drumPad.classList.toggle('hover');
		setTimeout(function() {
			drumPad.classList.toggle('hover');
		}, 150);
	}

	render() {
		const { id, drum, style } = this.props;

		return (
		    <div id={id} className="drum-pad" onClick={this.handleOnClick}>
		    	<span>{drum}</span>	
				<audio id={drum} className="clip">
					<source src={process.env.PUBLIC_URL + "/audio/" + style + "/" + drum + ".wav"} type="audio/wav" />
					<p>Your browser doesn't support HTML5 audio.</p>
				</audio>
			</div>
		);
	}
}

DrumPad.propTypes = {
	id: PropTypes.string.isRequired,
	keyCode: PropTypes.number.isRequired,
	drum: PropTypes.string.isRequired,
	volume: PropTypes.number.isRequired,
	style: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	updateDescription: PropTypes.func.isRequired,
};

export default DrumPad;