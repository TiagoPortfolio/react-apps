import React, { Component } from "react";
import PropTypes from "prop-types";

Display = ( expression ) => {
	return (
		<div id="display">
			{expression}
		</div>
	);
}

Display.propTypes = {
	expression: PropTypes.string.isRequired,
};

export default Display;
