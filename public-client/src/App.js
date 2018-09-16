import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <nav class="bp3-navbar bp3-dark">
        <div style="margin: 0 auto; width: 480px;"> <!-- ADD ME -->
          <div class="bp3-navbar-group bp3-align-left">
            <div class="bp3-navbar-heading">Blueprint</div>
            <input class="bp3-input" placeholder="Search files..." type="text" />
          </div>
          <div class="bp3-navbar-group bp3-align-right">
            <button class="bp3-button bp3-minimal bp3-icon-home">Home</button>
            <button class="bp3-button bp3-minimal bp3-icon-document">Files</button>
            <span class="bp3-navbar-divider"></span>
            <button class="bp3-button bp3-minimal bp3-icon-user"></button>
            <button class="bp3-button bp3-minimal bp3-icon-notifications"></button>
            <button class="bp3-button bp3-minimal bp3-icon-cog"></button>
          </div>
        </div>
      </nav>
    );
  }
}

export default App;
