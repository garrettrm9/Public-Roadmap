import React, { Component } from "react";
import { Link, Router } from "react-router-dom";
import {
  Icon,
  Button
  // Popover,
  // Menu,
  // MenuItem,
  // PopoverInteractionKind
} from "@blueprintjs/core";
// import ResultsBox from "./resultsBox";
import FuzzySearch from "fuzzy-search";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "click here",
      query: "",
      results: []
      // companiesResults: [],
      // productsResults: [],
      // featuresResults: []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    // this.handleCategory = this.handleCategory.bind(this);
    this.sortSearch = this.sortSearch.bind(this);
  }

  sortSearch(list, query) {
    // console.log("sortSearch list", list);
    // console.log("sortSearch query", query);
    // let list = null;
    // if (category === "features") {
    //   list = this.props.unfilteredFeatureList;
    // } else if (category === "products") {
    //   list = this.props.products;
    // } else if (category === "companies") {
    //   list = this.props.companies;
    // }
    // console.log("sortSearch list", list);
    // const newList = list.map(category => {
    //   category.filter(item => {
    //     let itemName = item.name.toLowerCase();
    //     return itemName.indexOf(query.toLowerCase() !== -1);
    //   });
    //   return category;
    // });

    // console.log("sortSearch newList", newList);
    // console.log("sortSearch end?", category[list]);
    const results = [];
    const newList = list.map(category => {
      const searcher = new FuzzySearch(category.results, ["name"]);
      const result = searcher.search(query);
      const resultObj = {};
      resultObj.results = result;
      resultObj.category = category.category;
      // console.log("sortSearch mid search resultObj", resultObj);
      results.push(resultObj);
      return category;
    });

    // console.log("sortSearch post search results", results);
    this.props.grabSearchResults(results);

    // this.setState({ results: results });
    // // const results = {};
    // results.results = result;
    // results.category = category;
    // const catResults = category + "Results";
    // // console.log("sortSearch result", results);
    // this.setState({ [catResults]: results });
    // const obj = {};
    // obj[category] = results;
    // console.log("sortSearch post obj", [obj]);
    // this.setState({
    //   results: {
    //     ...this.state.results,
    //     [category]: obj
    //   }
    // });
    // console.log("sortSearch state results", this.state.results);
  }

  handleClick() {
    // console.log("handleClick query", this.state.query);
    // this.sortSearch("companies", this.state.query);
    // this.sortSearch("products", this.state.query);
    // this.sortSearch("features", this.state.query);
    // const companies = {};
    // companies.companies = this.props.companies;
    // const products = {};
    // products.products = this.props.products;
    // const features = {};
    // features.features = this.props.unfilteredFeatureList;
    const list = [];

    const companies = {};
    companies.results = this.props.companies;
    companies.category = "companies";

    const products = {};
    products.results = this.props.products;
    products.category = "products";

    const features = {};
    features.results = this.props.unfilteredFeatureList;
    features.category = "features";

    list.push(companies, products, features);
    // console.log("handleClick list", list);
    this.sortSearch(list, this.state.query);
  }

  handleInputChange(e) {
    // console.log("handleInputChange e value", e.target.value);
    this.setState({ query: e.target.value });
  }

  // handleCategory(e) {
  //   e.preventDefault();
  //   this.setState({ category: e.target.value });
  // }

  render() {
    return (
      <div className="bp3-input-group">
        <Icon icon="search" />
        <input
          className="bp3-input"
          type="search"
          placeholder="Search"
          onChange={this.handleInputChange}
        />
          <Link to="/results">
            <Button
              icon="plus"
              className="bp3-minimal"
              onClick={this.handleClick}
            />
          </Link>
      </div>
    );
  }
}

// <ResultsBox
//   // companiesResults={this.state.companiesResults}
//   // productsResults={this.state.productsResults}
//   // featuresResults={this.state.featuresResults}
//   results={this.state.results}
// />

// <Popover
//   content={
//     <Menu>
//       <MenuItem text="companies" value="companies" />
//       <MenuItem text="products" value="products" />
//       <MenuItem text="features" value="features" />
//     </Menu>
//   }
//   target={
//     <Button
//       className="bp3-minimal"
//       rightIcon="caret-down"
//       // onClick={this.handleCategory}
//     >
//       {this.state.category}
//     </Button>
//   }
//   interactionKind={PopoverInteractionKind.CLICK}
//   onInteraction={this.handleCategory}
// />;
