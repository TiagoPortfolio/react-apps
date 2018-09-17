import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DrumPad from './DrumPad';

const drumPads = [
	{
		'id': 'drum-Q',
		'key': 'Q'
	},
	{
		'id': 'drum-W',
		'key': 'W'
	},
	{
		'id': 'drum-E',
		'key': 'E'
	},
	{
		'id': 'drum-A',
		'key': 'A'
	},
	{
		'id': 'drum-S',
		'key': 'S'
	},
	{
		'id': 'drum-D',
		'key': 'D'
	},
	{
		'id': 'drum-Z',
		'key': 'Z'
	},
	{
		'id': 'drum-X',
		'key': 'X'
	},
	{
		'id': 'drum-C',
		'key': 'C'
	}
];

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			// text: defaultText.join("\n")
		};

		this.drumPadHandleClick = this.drumPadHandleClick.bind(this);
		this.drumPadHandleKeyPress = this.drumPadHandleKeyPress.bind(this);
	}

	componentDidMount() {
		document.addEventListener('keydown', this.handleKeyPress);
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.handleKeyPress);
	}

	drumPadHandleClick() {
		var audio = document.getElementById("audio");
		audio.play();
	}

	drumPadHandleKeyPress(e) {
		console.log(e.key);
		var audio = document.getElementById("audio");
		audio.play();
	}

	handleKeyPress(e) {
		// if (e.keyCode === this.props.keyCode) {
		// 	this.playSound();
		// }
		console.log(e.keyCode);
	}

	render() {
		const drumPadsComponents = drumPads.map((drumPad) =>
			<DrumPad id={drumPad.id} key={drumPad.key} keyPad={drumPad.key}
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
