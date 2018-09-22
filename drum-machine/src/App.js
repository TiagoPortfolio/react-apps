import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import drumKit from './drumKit.js';
import DrumPad from './DrumPad';
import Display from './Display';



class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			style: 'Electro',
			description: '',
			volume: 100,
		};

		this.updateStyle = this.updateStyle.bind(this);
		this.updateDescription = this.updateDescription.bind(this);
		this.updateVolume = this.updateVolume.bind(this);
	}

	updateStyle(style) {
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
		})
	}

	render() {
		const drumPadsComponents = drumKit.drumPads.map((drumPad) =>
			<DrumPad
				id={drumPad.id}
				key={drumPad.key}
				keyCode={drumPad.keyCode}
				drum={drumPad.key}
				volume={this.state.volume}
				style={this.state.style}
				description={drumPad.description[this.state.style]}
				updateDescription={this.updateDescription}
			/>
		);

		return (
			<div className="App">
				<div id="drum-machine">
					<div id="drumPads">
						{drumPadsComponents}
					</div>
					<Display
						style={this.state.style}
						description={this.state.description}
						volume={this.state.volume}
						updateVolume={this.updateVolume}
					/>
				</div>
			</div>
		);
	}
}

export default App;
