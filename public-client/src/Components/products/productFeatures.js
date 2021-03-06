import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import { Button } from "@blueprintjs/core";
import ProductFeatureCard from "./productFeatureCard";

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
      <ProductFeatureCard
        key={index}
        feature={feature}
        products={this.props.products}
        votes={this.props.votes}
        follows={this.props.follows}
        user={this.props.user}
        newActivity={this.props.newActivity}
        deleteActivity={this.props.deleteActivity}
      />
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
        <h1 className="listHeader">{this.state.productName} features:</h1>
        <div className="productCardContainer">{productFeatures}</div>
      </div>
    );
  }
}
