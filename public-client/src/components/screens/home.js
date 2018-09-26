import React, { Component } from 'react';
// import FilteredFeatureList from "../filteredFeatureList.js"

import {
  Alignment,
  Button,
  Classes,
  H5,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
  Switch,
} from "@blueprintjs/core";

export default class Home extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const features = this.props.features;
    return (
      <div>
        <h3 className={Classes.HEADING}>Browse Feature Requests</h3>
        {/* <FilteredFeatureList></FilteredFeatureList> */}
      </div>
    )
  }
}