import React from 'react';
import './form.css';
import ImageSelector from './ImageSelector';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: {
        valid: true,
        message: ''
      },
      email: {
        valid: true,
        message: ''
      },
      intro: '',
      submitClass: ''
    };
  }

  componentDidMount () {
      const submitButton = this.refs.submitButton;
      submitButton.addEventListener('animationend', this.animationDone.bind(this));
  }

  componentWillUnmount () {
    const submitButton = this.refs.submitButton;
    submitButton.removeEventListener('animationend', this.animationDone.bind(this) );
  }

  animationDone () {
    this.setState({submitClass: ''});
  }

  validateUsername(e) {
    const usernameRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const username = typeof e.target === "undefined" ? e : e.target.value;

    this.setState({
      username: {
        valid: usernameRegex.test(username),
        message: username.length ? 'Invalid username' : 'Your username cannot be empty.'
      }
    });
  }

  validateEmail(e) {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const email = typeof e.target === "undefined" ? e : e.target.value;

    this.setState({
      email: {
        valid: emailRegex.test(email),
        message: email.length ? 'Invalid email' : 'Your email cannot be empty.'
      }
    });
  }

  validateSubmit() {
    if ((!this.state.username.valid && this.state.username.message.length) || (!this.state.email.valid && this.state.email.message.length)) {
      this.setState({
        submitClass: 'submit-error'
      });
    } else {
      this.setState({
        submitClass: 'submit-success'
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.validateSubmit();
  }

  render() {
    return (
      <div className="profileForm">
        <div className="formTitle">
          <h2>Profile Data</h2>
        </div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div id="username">
            <label>
              Username
            </label>
            <input type="text" name="username" required placeholder="Username" onChange={this.props.formHandler} onBlur={this.validateUsername.bind(this)}/>
            {!this.state.username.valid &&
              <span className="error">{this.state.username.message}</span>
            }
          </div>
          <div id="email">
            <label>
              Email
            </label>
            <input type="email" name="email" required placeholder="Email" onChange={this.props.formHandler} onBlur={this.validateEmail.bind(this)}/>
            {!this.state.email.valid &&
              <span className="error">{this.state.email.message}</span>
            }
          </div>
          <div id="intro">
            <label>
              Introduction
            </label>
            <textarea name="intro" autoComplete="on" maxLength="450" rows="4" placeholder="Introduce yourself" onChange={this.props.formHandler}/>
          </div>
          <div id="background">
            <label>
              Background:
            </label>
            <ImageSelector onImageChange={this.props.onImageChange}/>
          </div>
          <input type="submit" ref="submitButton" className={this.state.submitClass} value="Submit Profile" />
        </form>
        <div>
          <span>{this.props.username}</span>
        </div>
      </div>
    );
  }
}