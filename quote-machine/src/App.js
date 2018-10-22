import React from "react";
import logo from "./logo.svg";
import "./App.css";
import QuoteBoxContainer from "./QuoteBoxContainer";

const App = ({ quote, isQuoteRenderBlocked, newQuoteHandler }) => (
  <div className="App">
  	<header className="App-header">
  		<h1 className="App-title">Random Quote Machine</h1>
  		<div className="App-react-app">
  			<img src={logo} className="App-logo" alt="logo" />
  			<h2 className="App-intro">React App</h2>
  			<img src={logo} className="App-logo" alt="logo" />
  		</div>
  	</header>
  	<QuoteBoxContainer
  		quote={quote}
  		isQuoteRenderBlocked={isQuoteRenderBlocked}
  		newQuoteHandler={newQuoteHandler}
  	/>
  </div>
);

export default App;