import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { encrypt, decrypt } from '../helpers/encryption';


class Encrypt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      encrypt: '',
      encryptResult: '',
      decrypt: '',
      decryptResult: '',
    };
  }

  onEncryptChange = (event) => {
    event.preventDefault();
    this.setState({ encrypt: event.target.value });
  }

  onEncrypt = (event) => {
    event.preventDefault();
    this.setState((prevState) => {
      return { encryptResult: encrypt(prevState.encrypt) };
    });
  }

  onDecryptChange = (event) => {
    event.preventDefault();
    this.setState({ decrypt: event.target.value });
  }

  onDecrypt = (event) => {
    event.preventDefault();
    this.setState((prevState) => {
      return { decryptResult: decrypt(prevState.decrypt) };
    });
  }

  renderEncrypt = () => {
    return (
      <div className="encrypt">
        <h2>Encrypt Message Here</h2>
        <input
          onChange={this.onEncryptChange}
          value={this.state.encrypt}
        />
        <button type="button" className="encrypt-button" onClick={this.onEncrypt} />
        <p>{this.state.encryptResult}</p>
      </div>
    );
  }

  renderDecrypt = () => {
    return (
      <div className="decrypt">
        <h2>Decrypt Message Here</h2>
        <input
          onChange={this.onDecryptChange}
          value={this.state.decrypt}
        />
        <button type="button" className="decrypt-button" onClick={this.onDecrypt} />
        <p>{this.state.decryptResult}</p>
      </div>
    );
  }

  render() {
    return (
      <div className="encrypt-decrypt">
        {this.renderEncrypt()}
        {this.renderDecrypt()}
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    signedIn: state.auth.signedIn,
  }
);

export default (withRouter(connect(mapStateToProps, { })(Encrypt)));
