import React, { Component } from "react";
import {
  Icon,
  Button,
  Popover,
  Menu,
  MenuItem,
  PopoverInteractionKind
} from "@blueprintjs/core";
import FuzzySearch from "fuzzy-search";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "click here",
      query: "",
      results: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    // this.handleCategory = this.handleCategory.bind(this);
    this.sortSearch = this.sortSearch.bind(this);
  }

  sortSearch(category, query) {
    // // console.log("sortSearch category", category);
    // // console.log("sortSearch query", query);
    let list = null;
    if (category === "features") {
      list = this.props.unfilteredFeatureList;
    } else if (category === "products") {
      list = this.props.products;
    } else if (category === "companies") {
      list = this.props.companies;
    }
    // console.log("sortSearch list", list);
    // list = list.filter(item => {
    //   let itemName = item.name.toLowerCase();
    //   return itemName.indexOf(query.toLowerCase() !== -1);
    // });
    // console.log("sortSearch end?", category[list]);
    const searcher = new FuzzySearch(list, ["name"]);
    const result = searcher.search(query);
    console.log("sortSearch result", result);
  }

  handleClick() {
    // console.log("handleClick query", this.state.query);
    this.sortSearch("companies", this.state.query);
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
        <Button
          icon="plus"
          className="bp3-minimal"
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

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
