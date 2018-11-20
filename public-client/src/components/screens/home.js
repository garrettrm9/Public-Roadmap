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
  // this.state = {
  //   filteredFeatureList: [],
  //   newVoteCheck: false
  // };
  // this.sortByDate = this.sortByDate.bind(this);
  // this.sortByVotes = this.sortByVotes.bind(this);
  // this.checkNewVotes = this.checkNewVotes.bind(this);
  // }

  // checkNewVotes(value) {
  //   // console.log("checkNewVotes value", value);
  //   this.setState({ newVoteCheck: value });
  // }

  // sortByDate() {
  //   const newArray = this.props.filteredFeatureList.sort(function(a, b) {
  //     const dateA = new Date(a.date_created);
  //     const dateB = new Date(b.date_created);
  //     return dateB - dateA;
  //   });
  //   // console.log("sortByDate newArray", newArray);
  //   this.setState({ filteredFeatureList: newArray });
  // }

  // sortByVotes() {
  //   const newArray = this.props.unfilteredFeatureList.sort(function(a, b) {
  //     return b.votes - a.votes;
  //   });
  //   // console.log("sortByVotes newArray", newArray);
  //   this.setState({ filteredFeatureList: newArray });
  // }

  // checkForVoteUpdates(oldArr, newArr) {
  //   const oldArray = oldArr.sort(function(a, b) {
  //     return b.votes - a.votes;
  //   });

  //   const newArray = newArr.sort(function(a, b) {
  //     return b.votes - a.votes;
  //   });

  //   const oldArrayVotes = [];

  //   oldArray.map(feature => {
  //     oldArrayVotes.push(feature.votes);
  //   });

  //   const newArrayVotes = [];

  //   newArray.map(feature => {
  //     newArrayVotes.push(feature.votes);
  //   });

  //   const checkVotes = function() {
  //     for (var i = 0; i < oldArrayVotes; i++) {
  //       if (oldArrayVotes[i] !== newArrayVotes[i]) {
  //       }
  //     }
  //   };
  // }

  componentDidMount() {
    this.props.getAllFeatures();
  }

  // componentDidUpdate(prevProps, prevState) {
  //   // console.log("update prevState", prevState.newVoteCheck);
  //   // console.log("update state", this.state.newVoteCheck);
  //   if (
  //     prevProps.unfilteredFeatureList.length !==
  //     this.props.unfilteredFeatureList.length
  //   ) {
  //     this.sortByVotes();
  //   }
  //   // else if (
  //   //   prevState.newVoteCheck === false &&
  //   //   this.state.newVoteCheck === true
  //   // ) {
  //   //   this.checkNewVotes(false);
  //   //   this.props.getAllFeatures();
  //   // }
  // }

  render() {
    // const features = this.props.features;
    return (
      <div>
        <h3 className={Classes.HEADING}>Browse Feature Requests</h3>
        <Button icon="log-out" text="Logout" onClick={this.props.logout} />
        <FilteredFeatureList
          checkNewVotes={this.checkNewVotes}
          getAllFeatures={this.props.getAllFeatures}
          editFeature={this.props.editFeature}
          sortByVotes={this.props.sortByVotes}
          sortByDate={this.props.sortByDate}
          seeUserFollows={this.props.seeUserFollows}
          filteredFeatureList={this.props.filteredFeatureList}
          products={this.props.products}            
          user={this.props.user}
          // votes={this.props.votes}
          // getVotes={this.props.getVotes}
        />
      </div>
    );
  }
}
