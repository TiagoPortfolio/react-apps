import React, { Component } from "react";
import ReactDOM from "react-dom";
import QuoteBox from "./QuoteBox";
import PropTypes from "prop-types";

class QuoteBoxContainer extends Component {
	constructor(props) {
		super(props);
		
		this.showNewQuote = this.showNewQuote.bind(this);
		this.fade = this.fade.bind(this);
	}

	// Apply fade in on first mount
	componentDidMount() {
		setTimeout(() => {
			this.fade();
		}, 250);
	}

	// Apply fade in after each update (after each new quote)
	componentDidUpdate() {
		this.fade();
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
			<QuoteBox
				quote={quote}
				showNewQuote={this.showNewQuote}
			/>
		);
	}
}

QuoteBoxContainer.propTypes = {
	quote: PropTypes.object.isRequired,
	isQuoteRenderBlocked: PropTypes.bool.isRequired,
	newQuoteHandler: PropTypes.func.isRequired
};

export default QuoteBoxContainer;