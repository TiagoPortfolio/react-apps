import React from 'react';
import PropTypes from 'prop-types';

const QuoteBox = ({quote, newQuoteHandler}) => {
	return (
		<div id="quote-box">
			<div className="QuoteBox-quote">
				<span id="text">" {quote.text} "</span>
				<span id="author"> - {quote.author}</span>
			</div>
			<hr />
			<div className="QuoteBox-controls">
				<div id="new-quote" role="button" tabIndex="0" onClick={newQuoteHandler}>New Quote</div>
				<a id="tweet-quote" href={`https://twitter.com/intent/tweet?text="${quote.text}" - ${quote.author}`}>
					<a id="tweet-quote"
					   href={`https://twitter.com/intent/tweet?text="${quote.text}" - ${quote.author}`}
					   target="_blank"
					   className="twitter-share-button" data-size="large"
					   data-show-count="false" title="Tweet this quote!">
					</a>
				</a>
			</div>
		</div>
	);
}

QuoteBox.propTypes = {
	quote: PropTypes.object.isRequired,
	newQuoteHandler: PropTypes.func.isRequired
};

export default QuoteBox;