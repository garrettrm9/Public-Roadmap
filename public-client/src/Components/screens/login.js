import React, { Component } from "react";
import { InputGroup, FormGroup, Button } from "@blueprintjs/core";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
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

  handleLogin(e) {
    e.preventDefault();
    this.props.login(this.state.email, this.state.password);
    // console.log("handleLogin email", this.state.email);
    // console.log("handleLogin password", this.state.password);
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
        <FormGroup>
          <h3>login</h3>
          <InputGroup
            leftIcon="envelope"
            placeholder="Email"
            name="email"
            onChange={this.handleChange}
          />
          <div className="loginDivider" />
          <InputGroup
            leftIcon="key"
            placeholder="Password"
            name="password"
            onChange={this.handleChange}
          />
          <div className="buttonDivider" />
          <Button icon="key-enter" text="Login" onClick={this.handleLogin} />
          <div className="loginDivider2" />
        </FormGroup>
        <h3>registration</h3>
        <FormGroup>
          <InputGroup
            leftIcon="envelope"
            placeholder="Email"
            name="email"
            onChange={this.handleChange}
          />
          <div className="loginDivider" />
          <InputGroup
            leftIcon="key"
            placeholder="Password"
            name="password"
            onChange={this.handleChange}
          />
          <div className="buttonDivider" />
          <Button
            icon="key-enter"
            text="Register"
            onClick={this.handleRegister}
          />
        </FormGroup>
      </div>
    );
  }
}

export default Login;
