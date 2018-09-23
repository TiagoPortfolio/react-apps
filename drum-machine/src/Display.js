import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Display extends Component {
	constructor(props) {
		super(props);

		this.handleSliderChange = this.handleSliderChange.bind(this);
	}


	handleSliderChange(e) {
		this.props.updateVolume(parseInt(e.target.value));
	}

	render() {
		const { style, description, volume } = this.props;

		return (
			<div id="display">
				<div className="drum-style">
					<span className="title">Style</span>
					<span className="info">{style}</span>
				</div>

				<div className="drum-sound-description">
					<span className="title">Sound</span>
					<span className="info">{description}</span>
				</div>

				<div className="volume-control">
					<span className="title">Volume</span>
					<input id="drum-volume" className="volume-slider" type="range" min="1" max="100" value={volume} orient="vertical" onChange={this.handleSliderChange} />
				</div>
			</div>
		);
	}
}

Display.propTypes = {
	style: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	volume: PropTypes.number.isRequired,
	updateVolume: PropTypes.func.isRequired
};

export default Display;
