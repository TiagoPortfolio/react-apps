import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Editor from './Editor';
import Previewer from './Previewer';

const App = ({ text, handleEditorChange }) => {
	<div className="App">
		<header className="App-header">
			<h1 className="App-title">Markdown Previewer</h1>
			<div className="App-react-app">
				<img src={logo} className="App-logo" alt="logo" />
				<h2 className="App-intro">React App</h2>
				<img src={logo} className="App-logo" alt="logo" />
			</div>
		</header>
		<Editor text={text} editorHandler={handleEditorChange}/>
		<PreviewerContainer text={text} />
	</div>
}

export default App;
