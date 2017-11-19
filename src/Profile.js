import React from 'react';
import './profile.css';

export default class Profile extends React.Component {
  render() {
    const backgroundStyle = {
      background: "url(" + this.props.globalState.image.url + ") right no-repeat",
      opacity: 0.5,
      backgroundSize: "cover"
    }
    return (
      <div className="profilePreview" style={backgroundStyle}>
        <div className="avatar"></div>
        <div className="username">{this.props.globalState.username}</div>
        <div className="email"><em>{this.props.globalState.email}</em></div>
        <div className="intro">{this.props.globalState.intro}</div>
        <div className="background"></div>
      </div>
    );
  }
}