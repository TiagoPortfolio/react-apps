import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import keys from "./keys.js";
import Display from "./Display";
import Key from "./Key";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentExpression: "0",
			previousResult: ""
		};

		this.operators = ["+", "-", "*", "/", ".", "C", "="];

		this.handleCalculatorCommand = this.handleCalculatorCommand.bind(this);
	}

	handleCalculatorCommand(command) {
		let currentExpression = this.state.currentExpression;
		let isExpressionEndANumber =
			this.operators.indexOf(
				currentExpression[currentExpression.length - 1]
			) === -1;

		if (currentExpression.length === 1) {
			// Ignore multiple zeros at the start
			if (command === "0") {
				return;
			} else if (this.operators.indexOf(command) === -1) {
				// Remove first zero to be replaced
				currentExpression = currentExpression.substring(
					0,
					currentExpression.length - 1
				);
			}
		}

		// If an operator command is pressed
		if (this.operators.indexOf(command) !== -1) {
			if (currentExpression[currentExpression.length - 1] === command) {
				// Ignore if last character on display is that same operator
				return;
			} else if (command === ".") {
				if (isExpressionEndANumber) {
					// Get last number (decimal or not) and ignore more than one decimal point
					let lastNumber = currentExpression.match(
						/^(\d*\.)?\d*$/gim
					);
					if (lastNumber !== null) {
						if (lastNumber[0].indexOf(".") !== -1) {
							return;
						}
					}
				} else {
					command = "0.";
				}
			} else if (!isExpressionEndANumber) {
				// Remove last command character to be replaced
				currentExpression = currentExpression.substring(
					0,
					currentExpression.length - 1
				);
			} else if (command === "=") {
				// Evaluate expression
				currentExpression = eval(currentExpression).toString();
				command = "";
			} else if (command === "C") {
				// Clear display
				currentExpression = "0";
				command = "";
			}
		}

		this.setState({
			currentExpression: currentExpression + command
		});
	}

	render() {
		const calculatorKeys = keys.map(key => (
			<Key
				id={key.id}
				key={key.key}
				keyCode={key.keyCode}
				command={key.key}
				handleCommand={this.handleCalculatorCommand}
			/>
		));

		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Javascript Calculator</h1>
					<div className="App-react-app">
						<img src={logo} className="App-logo" alt="logo" />
						<h2 className="App-intro">React App</h2>
						<img src={logo} className="App-logo" alt="logo" />
					</div>
				</header>

				<div id="calculator-container">
					<div id="brand">
						<span>React Calculator TI Infinity</span>
					</div>
					<div id="calculator">
						<div id="calculator-keys">
							{calculatorKeys}
						</div>
						<Display expression={this.state.currentExpression} />
					</div>
				</div>
			</div>
		);
	}
}

export default App;