import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TextareaAutosize from 'react-textarea-autosize';
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
    decrypt(this.state.decrypt, (error, result) => {
      if (error) {
        this.setState(({ decryptResult: 'Nonexistent or has already been deciphered' }));
      } else {
        this.setState(({ decryptResult: result }));
      }
    });
  }

  renderEncrypt = () => {
    return (
      <div className="encrypt">
        <h2>Encrypt Message Here</h2>
        <TextareaAutosize
          minRows={3}
          maxRows={6}
          style={{ width: '50%', height: '100%', minHeight: '10em' }}
          onChange={this.onEncryptChange}
          placeholder="Encrypt your message here"
          value={this.state.encrypt}
        />
        <h3 className="message-title">Your Encryption is:</h3>
        <p className="message-content">{this.state.encryptResult}</p>
        <button type="button" className="encrypt-button" onClick={this.onEncrypt}>Encrypt Your Message</button>
      </div>
    );
  }

  renderDecrypt = () => {
    return (
      <div className="decrypt">
        <h2>Decrypt Message Here</h2>
        <TextareaAutosize
          minRows={3}
          maxRows={6}
          style={{ width: '50%', height: '100%', minHeight: '10em' }}
          onChange={this.onDecryptChange}
          placeholder="Decrypt your message here"
          value={this.state.decrypt}
        />
        <h3 className="message-title">Your Secret Message is:</h3>
        <p className="message-content">{this.state.decryptResult}</p>
        <button type="button" className="decrypt-button" onClick={this.onDecrypt}>Decrypt Your Message</button>
      </div>
    );
  }

  render() {
    return (
      <div className="encrypt-main">
        <h1>Welcome to the top secret message decoder</h1>
        <div className="encrypt-decrypt">
          {this.renderEncrypt()}
          {this.renderDecrypt()}
        </div>
      </div>

    );
  }
}

const mapStateToProps = state => (
  {

  }
);

export default (withRouter(connect(mapStateToProps, { })(Encrypt)));
