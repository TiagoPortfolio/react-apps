import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import drumKit from "./drumKit.js";
import DrumPad from "./DrumPad";
import Display from "./Display";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			style: "Big Shaq",
			description: "Silence",
			volume: 100
		};

		this.updateStyle = this.updateStyle.bind(this);
		this.updateDescription = this.updateDescription.bind(this);
		this.updateVolume = this.updateVolume.bind(this);
	}

	updateStyle(direction) {
		const style = 
			drumKit.styles[
				((direction === "left"
					? drumKit.styles.indexOf(this.state.style) - 1
					: drumKit.styles.indexOf(this.state.style) + 1) +
					drumKit.styles.length) %
					drumKit.styles.length
			];
		this.setState({
			style
		});
	}

	updateDescription(description) {
		this.setState({
			description
		});
	}

	updateVolume(volume) {
		this.setState({
			volume
		});
	}

	render() {
		const drumPadsComponents = drumKit.drumPads.map(drumPad => (
			<DrumPad
				id={drumPad.id}
				key={drumPad.key}
				keyCode={drumPad.keyCode}
				drum={drumPad.key}
				volume={this.state.volume}
				style={this.state.style}
				description={drumPad.description[this.state.style.toLowerCase().replace(/\s/g, '')]}
				updateDescription={this.updateDescription}
			/>
		));

		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Drum Pad Machine</h1>
					<div className="App-react-app">
						<img src={logo} className="App-logo" alt="logo" />
						<h2 className="App-intro">React App</h2>
						<img src={logo} className="App-logo" alt="logo" />
					</div>
				</header>
				<div id="drum-machine">
					<div id="drumPads">
						<div id="brand">
							<span>React Drum Pad 9000</span>
						</div>
						{drumPadsComponents}
					</div>
					<Display
						style={this.state.style}
						description={this.state.description}
						volume={this.state.volume}
						updateVolume={this.updateVolume}
						updateStyle={this.updateStyle}
					/>
				</div>
			</div>
		);
	}
}

export default App;
