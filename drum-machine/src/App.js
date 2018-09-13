import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Markdown Previewer</h1>
					<div className="App-react-app">
						<img src={logo} className="App-logo" alt="logo" />
						<h2 className="App-intro">React App</h2>
						<img src={logo} className="App-logo" alt="logo" />
					</div>
				</header>
				<div id="drum-machine">
					<div id="display">
						
					</div>
				</div>
			</div>
		);
	}
}

export default App;
