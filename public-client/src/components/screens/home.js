import React, { Component } from "react";
import FilteredFeatureList from "../features/filteredFeatureList.js";

import {
  // Alignment,
  Button,
  Classes
  // H5,
  // Navbar,
  // NavbarDivider,
  // NavbarGroup,
  // NavbarHeading,
  // Switch,
} from "@blueprintjs/core";

export default class Home extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    // const features = this.props.features;
    return (
      <div>
        <h3 className={Classes.HEADING}>Browse Feature Requests</h3>
        <Button icon="log-out" text="Logout" onClick={this.props.logout} />
        <FilteredFeatureList
          editFeature={this.props.editFeature}
          unfilteredFeatureList={this.props.unfilteredFeatureList}
          // votes={this.props.votes}
          // getVotes={this.props.getVotes}
        />
      </div>
    );
  }
}
