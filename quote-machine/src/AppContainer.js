import React, { Component } from "react";
import App from "./App";
import quotes from "./quotes.js";
import colors from "./colors.js";

class AppContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			quote: quotes[Math.floor(Math.random() * quotes.length)],
			quoteRenderBlocked: false,
			backgroundColor: colors[0]
		};

		this.showNewQuote = this.showNewQuote.bind(this);
		this.changeBackgroundColor = this.changeBackgroundColor.bind(this);
	}

	// Apply background color on first  mount
	componentDidMount() {
		document.body.style.backgroundColor = this.state.backgroundColor;
	}

	componentDidUpdate() {
		document.body.style.backgroundColor = this.state.backgroundColor;
	}

	showNewQuote() {
		// Get another random quote if the quote is the same as the previous one
		while (true) {
			let randomIndex = Math.floor(Math.random() * quotes.length);
			if (quotes[randomIndex].text !== this.state.quote.text) {
				this.setState(prevState => ({
					quote: quotes[randomIndex],
					quoteRenderBlocked: true,
					backgroundColor: this.changeBackgroundColor(prevState)
				}));

				setTimeout(() => {
					this.setState({
						quoteRenderBlocked: false
					});
				}, 250);
				break;
			}
		}
	}

	changeBackgroundColor(prevState) {
		return colors[(colors.indexOf(prevState.backgroundColor) + 1) % colors.length];
	}

	render() {
		return (
			<App 
				quote={this.state.quote}
				isQuoteRenderBlocked={this.state.quoteRenderBlocked}
				newQuoteHandler={this.showNewQuote}
			/>
		);
	}
}

export default AppContainer;