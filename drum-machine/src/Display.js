import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Display extends Component {
	constructor(props) {
		super(props);

		this.handleSliderChange = this.handleSliderChange.bind(this);
	}


	handleSliderChange(e) {
		this.props.updateVolume(e.targe.value);
	}

	render() {
		const { style, description, volume } = this.props;

		return (
			<div id="display">
				<div class="drum-style">
					{style}
				</div>

				<div class="drum-sound-description">
					{description}
				</div>

				<div class="volume-control">
					<input id="drum-volume" class="volume-slider" type="range" min="1" max="100" value={volume} orient="vertical" oninput={this.handleSliderChange} />
				</div>
			</div>
		);
	}
}

DrumPad.propTypes = {
	style: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	volume: PropTypes.number.isRequired,
	updateVolume: PropTypes.func.isRequired
};

export default Display;
