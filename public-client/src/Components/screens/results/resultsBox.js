import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "@blueprintjs/core";
import ResultCategory from "./resultCategory";

export default class ResultsBox extends Component {
  constructor(props) {
    super(props);
    this.renderCategories = this.renderCategories.bind(this);
  }

  // componentDidMount() {
  //   console.log("ResultsBox mount results props", this.props.searchResults);
  // }

  // componentDidUpdate(prevState, prevProps) {
  //   if (this.props.searchResults) {
  //     console.log("ResultsBox results props", this.props.searchResults);
  //   }
  // }

  renderCategories(results, index) {
    return <ResultCategory key={index} results={results} />;
  }

  render() {
    // console.log("ResultsBox searchResults", this.props.searchResults);
    const results = this.props.searchResults.map(this.renderCategories);
    // let maybeRender = null;
    // if (this.props.searchResults) {
    //   maybeRender = this.props.searchResults.map(this.renderCategories);
    // }

    // if (
    //   this.props.companiesResults.results &&
    //   this.props.productsResults.results &&
    //   this.props.featuresResults.results
    // ) {
    //   console.log("resultsbox company", this.props.companiesResults.results);
    //   console.log("resultsbox products", this.props.productsResults.results);
    //   console.log("resultsbox features", this.props.featuresResults.results);
    // }

    // const compResults = this.props.companiesResults;
    // const prodResults = this.props.productsResults;
    // const featResults = this.props.featuresResults;
    // let maybeRender = null;

    return (
      <div>
        <Link to="/home">
          <Button>Home</Button>
        </Link>
        {results}
      </div>
    );
  }
}
