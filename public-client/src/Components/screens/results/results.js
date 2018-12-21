import React, { Component } from "react";

export default class Results extends Component {
  render() {
    // console.log("Results results", this.props.results);
    const results = this.props.results;
    return <div>{results.name}</div>;
  }
}
