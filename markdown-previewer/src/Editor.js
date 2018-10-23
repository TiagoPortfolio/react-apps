import React from "react";

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

export default Editor;