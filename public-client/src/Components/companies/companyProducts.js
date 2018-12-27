import React, { Component } from "react";
import ProductCard from "../products/productCard";
export default class CompanyProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: this.props.match.params.name
    };
    this.renderProducts = this.renderProducts.bind(this);
  }

  renderProducts(product, index) {
    return <ProductCard key={index} product={product} />;
  }

  componentDidMount() {
    this.props.getCompanyProducts(this.state.companyName);
  }

  render() {
    let companyProducts = null;
    if (this.props.companyProducts.length > 0) {
      companyProducts = this.props.companyProducts.map(this.renderProducts);
    }
    return (
      <div>
        <h2>{this.state.companyName} products:</h2>
        {companyProducts}
      </div>
    );
  }
}
