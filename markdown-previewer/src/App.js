import React, { Component } from 'react';
import PropTypes from "prop-types";

import Editor from './Editor';
import PreviewerContainer from './PreviewerContainer';

import logo from './logo.svg';
import './App.css';

const App = ({ text, handleEditorChange }) => (
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
);

App.propTypes = {
	text: PropTypes.string.isRequired,
	handleEditorChange: PropTypes.func.isRequired
};

export default App;
