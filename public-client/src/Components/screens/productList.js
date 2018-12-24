import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "@blueprintjs/core";
import ProductCard from "../products/productCard";

export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.renderProducts = this.renderProducts.bind(this);
  }

  renderProducts(product, index) {
    return (
      <ProductCard
        key={index}
        product={product}
        unfilteredFeatureList={this.props.unfilteredFeatureList}
      />
    );
  }

  render() {
    const products = this.props.products.map(this.renderProducts);
    return (
      <div>
        <h1>Product</h1>
        {products}
      </div>
    );
  }
}
