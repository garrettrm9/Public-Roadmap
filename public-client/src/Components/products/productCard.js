import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ProductCard extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const product = this.props.product;
    return (
      <div className="featureCards">
        <Link to={`/product/${product.name}`}>
          <h3>{product.name}</h3>
        </Link>
      </div>
    );
  }
}
