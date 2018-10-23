import React from "react";
import PropTypes from "prop-types";
import marked from "marked";

class PreviewerContainer extends React.Component {
	constructor(props) {
		super(props);

		this.getMarkdownText = this.getMarkdownText.bind(this);
	}

	getMarkdownText() {
		let rawMarkup = marked(this.props.text, {
			gfm: true,
			tables: true,
			breaks: true,
			sanitize: true,
			smartLists: true,
			langPrefix: "language-javascript"
		});
		return { __html: rawMarkup };
	}

	render() {
		return <Previewer markdownText={this.getMarkdownText()} />;
	}
}

PreviewerContainer.propTypes = {
	text: PropTypes.string.isRequired
};

export default PreviewerContainer;