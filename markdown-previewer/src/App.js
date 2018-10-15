import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Editor from './Editor';
import Previewer from './Previewer';

const defaultText = [
	'# Markdown Previewer',
	'## React App',
	'[**Tiago Portfolio**](https://tiagoportfolio.github.io)',
	'`multiLineCode` function:',
	'```\nfunction multiLineCode(firstLine, lastLine) {\n\tif (firstLine == \'```\' && lastLine == \'```\') {\n\treturn multiLineCode;\n\t}\n}\n```',
	'> This is a very long line that will still be quoted properly when it wraps. Oh boy let\'s keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote.',
	'1. And there are numbererd lists too.\n1. Use just 1s if you want!\n1. But the list goes on...\n- Even if you use dashes or asterisks.\n* And last but not least, let\'s not forget embedded images:',
	'![React Logo](https://goo.gl/Umyytc)'
];

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: defaultText.join("\n")
		};

		this.handleEditorChange = this.handleEditorChange.bind(this);
	}

	handleEditorChange(e) {
		this.setState({
			text: e.target.value
		})
	}
	
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
				<Editor text={this.state.text} editorHandler={this.handleEditorChange}/>
				<Previewer text={this.state.text} />
			</div>
		);
	}
}

export default App;
