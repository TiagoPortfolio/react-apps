import React from "react";
import PropTypes from "prop-types";
import marked from "marked";

const Previewer = ({ markdownText }) => {
	<div className="Previewer-box">
		<div
			id="preview"
			dangerouslySetInnerHTML={markdownText}
		/>
	</div>
};

Previewer.propTypes = {
	markdownText: PropTypes.object.isRequired
};

export default Previewer;