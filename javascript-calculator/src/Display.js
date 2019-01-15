import React, { Component } from "react";
import PropTypes from "prop-types";

export default Display = ( expression ) => (
		<div id="display">
			{expression}
		</div>
	);


Display.propTypes = {
	expression: PropTypes.string.isRequired,
};

