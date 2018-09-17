import React from 'react';
import PropTypes from 'prop-types';

const DrumPad = ({id, keyPad, drumPadClickHandler}) => {
	const audio = '';

	return (
	    <div id={id} className="drum-pad" onClick={drumPadClickHandler}>
			<audio id={keyPad} className="clip">
				<source src="myAudio.mp3" type="audio/mp3" />
				<source src="myAudio.ogg" type="audio/ogg" />
				<p>Your browser doesn't support HTML5 audio.</p>
			</audio>
		</div>
	);
}

// DrumPad.propTypes = {
// 	text: PropTypes.string.isRequired,
// 	drumPadHandler: PropTypes.func.isRequired
// };

export default DrumPad;