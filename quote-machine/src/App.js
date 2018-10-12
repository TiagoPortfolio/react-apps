import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import QuoteBox from "./QuoteBox.js";
import quotes from "./quotes.js";
import colors from "./colors.js";

class App extends Component {
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

	showNewQuote() {
		// Get another random quote if the quote is the same as the previous one
		while (true) {
			let randomIndex = Math.floor(Math.random() * quotes.length);
			if (quotes[randomIndex].text !== this.state.quote.text) {
				this.setState({
					quote: quotes[randomIndex],
					quoteRenderBlocked: true
				});

				this.changeBackgroundColor();

				setTimeout(() => {
					this.setState({
						quoteRenderBlocked: false
					});
				}, 250);
				break;
			}
		}
	}

	changeBackgroundColor() {
		const newColor = colors[(colors.indexOf(this.state.backgroundColor) + 1) % colors.length];
		console.log(newColor);
		this.setState({
			backgroundColor: newColor
		}, () => {
			document.body.style.backgroundColor = this.state.backgroundColor
		});
		

	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Random Quote Machine</h1>
					<div className="App-react-app">
						<img src={logo} className="App-logo" alt="logo" />
						<h2 className="App-intro">React App</h2>
						<img src={logo} className="App-logo" alt="logo" />
					</div>
				</header>
				<QuoteBox
					quote={this.state.quote}
					isQuoteRenderBlocked={this.state.quoteRenderBlocked}
					newQuoteHandler={this.showNewQuote}
					quoteRenderHandler={this.blockQuoteRender}
				/>
			</div>
		);
	}
}

export default App;