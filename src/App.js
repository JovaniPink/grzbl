import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faDribbble, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import llama from './llama.png';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="header-main-heading">
            Hi! I'm Creative.
          </h1>
          <img src={ llama } alt="Llama" />
          
        </header>
        <nav className="navbar-bottom">
            <div className="navbar-bottom-icons">
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faLinkedin} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faDribbble} />
            </div>
        </nav>
      </div>
    );
  }
}

export default App;
