import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

class QuoteBox extends Component {
	constructor(props) {
		super(props);
		
		this.fade = this.fade.bind(this);
	}

	componentWillUnmount() {
		this.fade();

	}

	componentDidMount() {
		setTimeout(this.fade, 500); //call the into animation
	}

	fade() {
		const quote = ReactDOM.findDOMNode(this).firstChild;
		quote.classList.toggle("fadein");
	}

	render() {
		const { quote, newQuoteHandler } = this.props;
		return (
			<div id="quote-box">
				<div className="QuoteBox-quote">
					<span id="text">" {quote.text} "</span>
					<span id="author"> - {quote.author}</span>
				</div>
				<hr />
				<div className="QuoteBox-controls">
					<div
						id="new-quote"
						role="button"
						tabIndex="0"
						onClick={newQuoteHandler}
					>
						New Quote
					</div>
					<a
						id="tweet-quote"
						className="tweet-button"
						href={`https://twitter.com/intent/tweet?text="${quote.text}" - ${quote.author}`}
						target="_blank"
						rel="noopener noreferrer"
					>
						Tweet
					</a>
				</div>
			</div>
		);
	}
}

QuoteBox.propTypes = {
	quote: PropTypes.object.isRequired,
	newQuoteHandler: PropTypes.func.isRequired
};

export default QuoteBox;