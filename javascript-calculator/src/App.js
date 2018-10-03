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

		this.operators = [
			"+",
			"-",
			"*",
			"/",
			".",
			"C"
		]

		this.handleCalculatorCommand = this.handleCalculatorCommand.bind(this);
	}

	handleCalculatorCommand(command) {
		let currentExpression = this.state.expression;

		// Ignore multiple zeros at the start
		if (
		    currentExpression.length === 1 &&
		    command === "0"
		)  {
			return;
		}

		// If an operator command is pressed
		if (this.operators.indexOf(command) !== -1) {
			// Ignore if last character on display is that same operator
			if (currentExpression[currentExpression.length - 1] === command) {
				return;
			} else if (command === ".") {
				// Get last number (decimal or not) and ignore more than one decimal point
				let lastNumber = currentExpression.match(/(\d*\.)?\d+$/gm);
				if (lastNumber !== null) {
					if (lastNumber[0].indexOf('.') !== -1) {
						return;
					}
				}
				command = "0."
			}
		} else if (command === ".") {

		}

		this.setState({
			currentExpression : currentExpression + command
		});
	}

	render() {
		const calculatorKeys = keys.map(key => (
			<Key
				id={key.id}
				key={key.key}
				keyCode={key.keyCode}
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
				<div id="drum-machine">
					<div id="drumPads">
						<div id="brand">
							<span>React Calculator Ti Infinity</span>
						</div>
						{calculatorKeys}
					</div>
					<Display
						style={this.state.style}
						description={this.state.description}
						volume={this.state.volume}
						updateVolume={this.updateVolume}
						expression={this.updateStyle}
					/>
				</div>
			</div>
		);
	}
}

export default App;
