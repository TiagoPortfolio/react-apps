import React from "react";
import PropTypes from "prop-types";

const Previewer = ({ markdownText }) => (
	<div className="Previewer-box">
		<div
			id="preview"
			dangerouslySetInnerHTML={markdownText}
		/>
	</div>
);

Previewer.propTypes = {
	markdownText: PropTypes.object.isRequired
};

export default Previewer;