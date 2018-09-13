import React from 'react';
import PropTypes from 'prop-types';

const Drum = ({key, drumHandler}) => {
	return (
		<div className="Drum-box">
			<textarea id="Drum" name="Drum" autoComplete="on" placeholder="Add here your code..." value={text} type="text" onChange={drumHandler}/>
		</div>
	);
}

Drum.propTypes = {
	text: PropTypes.string.isRequired,
	DrumHandler: PropTypes.func.isRequired
};

export default Drum;