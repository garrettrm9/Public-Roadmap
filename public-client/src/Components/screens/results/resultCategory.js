import React, { Component } from "react";
import Results from "./results";

export default class ResultCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: this.props.results.category
    };
    this.renderResults = this.renderResults.bind(this);
  }

  renderResults(result, index) {
    return (
      <Results key={index} result={result} category={this.state.category} />
    );
  }

  // componentDidUpdate(prevState, prevProps) {
  //   if (this.props.results) {
  //     console.log("ResultsCategory results props", this.props.results);
  //   }
  // }
  render() {
    const results = this.props.results;
    // console.log("ResultsCategory results props", results);
    let maybeRender = null;
    if (results.results.length > 0) {
      maybeRender = (
        <div>
          <h3 className="resultsCategory">{this.state.category}:</h3>
          {results.results.map(this.renderResults)}
        </div>
      );
    }
    return <div>{maybeRender}</div>;
  }
}
