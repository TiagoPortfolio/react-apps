import React from "react";
import PropTypes from "prop-types";

const Editor = ({ text, editorHandler }) => {
	<div className="Editor-box">
		<textarea
			id="editor"
			name="editor"
			autoComplete="on"
			placeholder="Add here your code..."
			value={text}
			type="text"
			onChange={editorHandler}
		/>
	</div>
};

Editor.propTypes = {
	text: PropTypes.string.isRequired,
	editorHandler: PropTypes.func.isRequired
};

export default Editor;