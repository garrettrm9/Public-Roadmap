import React, { Component } from "react";
import { InputGroup, FormGroup, Button, Card } from "@blueprintjs/core";
import { Link } from "react-router-dom";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    const key = e.target.name;
    const value = e.target.value;
    this.setState(prevState => {
      prevState[key] = value;
      return prevState;
    });
  }
  handleRegister(e) {
    e.preventDefault();
    this.props.register(this.state.email, this.state.password);
    // console.log("handleRegister email", this.state.email);
    // console.log("handleRegister password", this.state.password);
  }

  render() {
    return (
      <div>
        <h1 className="loginHeader">
          Public <br /> Roadmap
        </h1>
        <h2 className="loginSubheader">Mapping out the future</h2>
        <div className="loginDivider" />
        <div className="authCard">
          <Card
            interactive={true}
            // elevation={Elevation.FOUR}
            className="bp3-card bp3-interactive"
          >
            <FormGroup>
              <InputGroup
                leftIcon="envelope"
                placeholder="Email"
                name="email"
                onChange={this.handleChange}
                autoComplete="off"
              />
              <div className="buttonDivider" />
              <InputGroup
                leftIcon="key"
                placeholder="Password"
                name="password"
                onChange={this.handleChange}
                autoComplete="off"
              />
              <div className="buttonDivider" />
              <Button
                icon="key-enter"
                text="Register"
                onClick={this.handleRegister}
              />
              <div className="buttonDivider" />
            </FormGroup>
            <p>Back to login page</p>
            <Link to="/login">
              <Button icon="log-in" text="Login" />
            </Link>
          </Card>
        </div>
        <div className="loginFooter" />
        <a href="https://www.freepik.com/free-vector/abstract-halftone-white-background-design_3086384.htm">
          Designed by Starline
        </a>
      </div>
    );
  }
}
