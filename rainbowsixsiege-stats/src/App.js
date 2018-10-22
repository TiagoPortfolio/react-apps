import React, { Component } from 'react';
import RainbowSixApi from 'rainbowsix-api-node';
import logo from './logo.svg';
import './App.css';

const R6 = new RainbowSixApi();

let username = 'Arctic..Monkey';
let platform = 'uplay'; // uplay, xone, ps4;

//Get stats on the user on that platform
R6.stats(username, platform, /*optional true or false if you want operator details or not*/).then(response => {
    console.log("Username", response);
}).catch(error => {
    console.error(error)
});

//For getting details about a user on R6 depending on platform
R6.profile(username, platform).then(response => {
    console.log("Profile", response);
}).catch(error => {
    console.error(error);
});

class App extends Component {
  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
