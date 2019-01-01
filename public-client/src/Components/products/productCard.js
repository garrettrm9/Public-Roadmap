import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ProductCard extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const product = this.props.product;
    return (
      <div>
        <ul>
          <Link to={`/product/${product.name}`}>
            <h3>
              <li>{product.name}</li>
            </h3>
          </Link>
        </ul>
      </div>
    );
  }
}
