import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signInUser, signUpUser, signOutUser } from '../actions';


class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  onEmailChange = (event) => {
    event.preventDefault();
    this.setState({ email: event.target.value });
  }

  onPasswordChange = (event) => {
    event.preventDefault();
    this.setState({ password: event.target.value });
  }

  onSignIn = (event) => {
    event.preventDefault();
    this.props.signInUser(this.state, this.props.history);
  }

  onSignUp = (event) => {
    event.preventDefault();
    this.props.signUpUser(this.state, this.props.history);
  }

  onSignOut = (event) => {
    event.preventDefault();
    this.props.signOutUser(this.state, this.props.history);
  }

  renderSignIn = () => {
    return (
      <div className="signin">
        <h2>Sign In</h2>
        <input
          label="Email"
          onChange={this.onEmailChange}
          value={this.state.email}
        />
        <input
          label="Password"
          type="password"
          onChange={this.onPasswordChange}
          value={this.state.password}
        />
        <div className="signin-buttons">
          <button type="button" className="signin-button" onClick={this.onSwitchContext}>
          Sign in
          </button>
          <button type="button" className="signin-button" onClick={this.onSwitchContext}>
          Sign up
          </button>
        </div>

      </div>
    );
  }

  renderSignOut = () => {
    return (
      <div className="signout">
        <h2>Are you sure you want to sign out</h2>
        <div className="signout-buttons">
          <button type="button" className="signout-button" onClick={this.onSwitchContext}>
            Yes
          </button>
          <button type="button" className="signout-button" onClick={this.onSwitchContext}>
            No
          </button>
        </div>
      </div>
    );
  }


  render() {
    if (this.props.signInUser) {
      return (
        <div className="login-signout">
          {this.renderSignOut()}
        </div>

      );
    }
    return (
      <div className="login-signin">
        {this.renderSignIn()}
      </div>

    );
  }
}

const mapStateToProps = state => (
  {
    signedIn: state.auth.signedIn,
    authError: state.auth.error,
  }
);

export default (withRouter(connect(mapStateToProps, { signInUser, signUpUser, signOutUser })(SignIn)));
