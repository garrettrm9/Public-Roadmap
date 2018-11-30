import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "@blueprintjs/core";

export default class ProductFeatures extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: this.props.match.params.name
    };
    this.renderFeatures = this.renderFeatures.bind(this);
  }

  renderFeatures(feature, index) {
    return (
      <div key={index}>
        <p>Feature name: {feature.name}</p>
      </div>
    );
  }

  componentDidMount() {
    // console.log(
    //   "productFeatures mount",
    //   JSON.stringify(this.state.productName)
    // );
    this.props.getAllProductFeatures(this.state.productName);
  }

  render() {
    let productFeatures = null;
    if (this.props.productFeatures.length > 0) {
      productFeatures = this.props.productFeatures.map(this.renderFeatures);
    }
    return (
      <div>
        <Link to="/product">
          <Button> Product page</Button>
        </Link>
        <h2>{this.state.productName} features:</h2>
        {productFeatures}
      </div>
    );
  }
}
