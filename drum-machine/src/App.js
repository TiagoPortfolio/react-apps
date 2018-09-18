import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DrumPad from './DrumPad';

const drumPads = [
	{
		'id': 'drum-Q',
		'key': 'Q',
		'keyCode': 81
	},
	{
		'id': 'drum-W',
		'key': 'W',
		'keyCode': 87
	},
	{
		'id': 'drum-E',
		'key': 'E',
		'keyCode': 69
	},
	{
		'id': 'drum-A',
		'key': 'A',
		'keyCode': 65
	},
	{
		'id': 'drum-S',
		'key': 'S',
		'keyCode': 83
	},
	{
		'id': 'drum-D',
		'key': 'D',
		'keyCode': 68
	},
	{
		'id': 'drum-Z',
		'key': 'Z',
		'keyCode': 90
	},
	{
		'id': 'drum-X',
		'key': 'X',
		'keyCode': 88
	},
	{
		'id': 'drum-C',
		'key': 'C',
		'keyCode': 67
	}
];

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			// text: defaultText.join("\n")
		};

		this.drumPadHandleClick = this.drumPadHandleClick.bind(this);
	}

	drumPadHandleClick() {
		var audio = document.getElementById("audio");
		audio.play();
	}

	render() {
		const drumPadsComponents = drumPads.map((drumPad) =>
			<DrumPad
				id={drumPad.id}
				key={drumPad.key}
				keyCode={drumPad.keyCode}
				drum={drumPad.key}
				drumPadClickHandler={this.drumPadHandleClick}
			/>
		);

		return (
			<div className="App">
				<div id="drum-machine">
					<div id="display">

					</div>
					{drumPadsComponents}
				</div>
			</div>
		);
	}
}

export default App;
