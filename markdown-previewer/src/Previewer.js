import React from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';

class Previewer extends React.Component {
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
			langPrefix: 'language-javascript'
		});
		return { __html: rawMarkup };
	};

	render() {
		return (
		    <div className="Previewer-box">
				<div id="preview" dangerouslySetInnerHTML={this.getMarkdownText()}></div>
			</div>
		);
	};
}

Previewer.propTypes = {
	text: PropTypes.string.isRequired
};

export default Previewer;