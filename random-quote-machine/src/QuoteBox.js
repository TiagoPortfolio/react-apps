import React from 'react';
import PropTypes from 'prop-types';
// import logo from './logo.svg';
// import './QuoteBox.css';



const QuoteBox = ({quote, newQuoteHandler}) => {
	return (
		<div id="quote-box">
			<div className="quote">
				<p id="text">{quote.text}</p>
				<p id="author">{quote.author}</p>
			</div>
			<div className="controls">
			<div id="new-quote" role="button" tabindex="0" onClick={newQuoteHandler}>New Quote</div>
				<a id="tweet-quote" 
					 href="https://twitter.com/share"
					 class="twitter-share-button" data-size="large"
					 data-text={`https://twitter.com/intent/tweet?text=${quote.text} - ${quote.author}`}
					 data-show-count="false">
					 Tweet
				</a>
				<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
			</div>
		</div>
	);
}

QuoteBox.propTypes = {
	quote: PropTypes.object.isRequired,
	newQuoteHandler: PropTypes.func.isRequired,
	tweetQuoteHandler: PropTypes.func.isRequired
};

export default QuoteBox;
