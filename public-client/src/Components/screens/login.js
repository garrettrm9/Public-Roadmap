import React, { Component } from "react";
import Signin from "../auth/signin";
// import Register from "../auth/register";
// import { InputGroup, FormGroup, Button } from "@blueprintjs/core";

export default class Login extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     email: "",
  //     password: ""
  //   };
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleLogin = this.handleLogin.bind(this);
  //   this.handleRegister = this.handleRegister.bind(this);
  // }

  // handleChange(e) {
  //   e.preventDefault();
  //   const key = e.target.name;
  //   const value = e.target.value;
  //   this.setState(prevState => {
  //     prevState[key] = value;
  //     return prevState;
  //   });
  // }

  // handleLogin(e) {
  //   e.preventDefault();
  //   this.props.login(this.state.email, this.state.password);
  //   // console.log("handleLogin email", this.state.email);
  //   // console.log("handleLogin password", this.state.password);
  // }

  // handleRegister(e) {
  //   e.preventDefault();
  //   this.props.register(this.state.email, this.state.password);
  //   // console.log("handleRegister email", this.state.email);
  //   // console.log("handleRegister password", this.state.password);
  // }

  render() {
    return (
      <div>
        <h1 className="loginHeader">
          Public <br /> Roadmap
        </h1>
        <h2 className="loginSubheader">Mapping out the future</h2>
        <div className="loginDivider" />
        <Signin login={this.props.login} />
        <div className="loginFooter" />
        <a href="https://www.freepik.com/free-vector/abstract-halftone-white-background-design_3086384.htm">
          Designed by Starline
        </a>
      </div>
    );
  }
}
