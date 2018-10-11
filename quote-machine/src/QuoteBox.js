import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

class QuoteBox extends Component {
	constructor(props) {
		super(props);
		
		this.showNewQuote = this.showNewQuote.bind(this);
		this.fade = this.fade.bind(this);
	}

	// Apply fade in on first mount
	componentDidMount() {
		setTimeout(() => {
			this.fade();
		}, 500);
	}

	// Apply fade in after each update (after each new quote)
	componentDidUpdate() {
		setTimeout(() => {
			this.fade();
		}, 500);
	}

	// Lifecycle method to control component animation and wait for fade out to end
	shouldComponentUpdate(nextProps, nextState) {
		if (nextProps.isQuoteRenderBlocked) {
			return false;
		}
		return true;
	}

	showNewQuote() {
		this.fade(); // Fade out quote to show new one
		this.props.newQuoteHandler();
	}

	fade() {
		const quote = ReactDOM.findDOMNode(this).firstChild;
		quote.classList.toggle("fadein");
	}

	render() {
		const { quote } = this.props;
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
						onClick={this.showNewQuote}
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
	isQuoteRenderBlocked: PropTypes.bool.isRequired,
	newQuoteHandler: PropTypes.func.isRequired,
	quoteRenderHandler: PropTypes.func.isRequired
};

export default QuoteBox;