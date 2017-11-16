import React from 'react';
import './profile.css';

export default class Profile extends React.Component {
  render() {
    return (
      <div className="profilePreview">
        <div className="avatar"></div>
        <div className="username">{this.props.globalState.username}</div>
        <div className="email"><em>{this.props.globalState.email}</em></div>
        <div className="intro">{this.props.globalState.intro}</div>
        <div className="background"></div>
      </div>
    );
  }
}