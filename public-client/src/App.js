import React, { Component } from 'react';
import {
  Alignment,
  Button,
  Classes,
  H5,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
  Switch,
} from "@blueprintjs/core";
import logo from './logo.svg';
import Home from './Components/screens/home.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
          <Navbar>
            <Navbar.Group align={Alignment.LEFT}>
                <Navbar.Heading>Blueprint</Navbar.Heading>
                <Navbar.Divider />
                <Button className="bp3-minimal" icon="home" text="Home" />
                <Button className="bp3-minimal" icon="document" text="Files" />
            </Navbar.Group>
          </Navbar>
          <Home/>
      </div>
    );
  }
}

export default App;
