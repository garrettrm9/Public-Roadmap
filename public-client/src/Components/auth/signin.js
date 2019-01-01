import React, { Component } from "react";
import Register from "./register";
import { Link } from "react-router-dom";
import { InputGroup, FormGroup, Button, Card } from "@blueprintjs/core";

export default class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
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

  handleLogin(e) {
    e.preventDefault();
    this.props.login(this.state.email, this.state.password);
    // console.log("handleLogin email", this.state.email);
    // console.log("handleLogin password", this.state.password);
  }

  render() {
    return (
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
            <Button icon="log-in" text="Login" onClick={this.handleLogin} />
            <div className="buttonDivider" />
          </FormGroup>
          <p>New user?</p>
          <Link to="/register">
            <Button icon="key-enter" text="Register" />
          </Link>
        </Card>
      </div>
    );
  }
}
