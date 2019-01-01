import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Results extends Component {
  render() {
    // console.log("Results result", this.props.result);
    const result = this.props.result;
    let categoryVar = null;
    if (result.category === "company") {
      categoryVar = `/company/${result.name}`;
    } else if (result.category === "product") {
      categoryVar = `/product/${result.name}`;
    } else if (result.category === "feature") {
      categoryVar = `/product/${result.product_name}`;
    }
    // console.log("results categoryVar", categoryVar);
    return (
      <div>
        <ul>
          <Link to={categoryVar}>
            <h3>
              <li>{result.name}</li>
            </h3>
          </Link>
        </ul>
      </div>
    );
  }
}

// path="/product/:name"
//    render={props => (
//      <ProductFeatures

//  path="/company/:name"
//    render={props => (
//      <CompanyProducts
