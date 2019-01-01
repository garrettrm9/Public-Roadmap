import React, { Component } from "react";
import FilteredFeatureList from "../features/filteredFeatureList";
import {
  Button
  // Classes
} from "@blueprintjs/core";
// import { Link } from "react-router-dom";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortByMarker: "votes",
      filteredResults: []
    };
    this.sortFeatures = this.sortFeatures.bind(this);
    this.sortByVotes = this.sortByVotes.bind(this);
    this.sortByDate = this.sortByDate.bind(this);
    this.sortByUserFollow = this.sortByUserFollow.bind(this);
    this.handleVotesClicked = this.handleVotesClicked.bind(this);
    this.handleDateClicked = this.handleDateClicked.bind(this);
    this.handleFollowClicked = this.handleFollowClicked.bind(this);
  }

  sortByVotes() {
    const newArray = this.props.unfilteredFeatureList.sort(function(a, b) {
      return b.votes - a.votes;
    });
    // console.log("sortByVotes newArray", newArray);
    this.setState({ filteredResults: newArray });
  }

  sortByDate() {
    const newArray = this.props.unfilteredFeatureList.sort(function(a, b) {
      const dateA = new Date(a.date_last_updated);
      const dateB = new Date(b.date_last_updated);
      return dateB - dateA;
    });
    // console.log("sortByDate newArray", newArray);
    this.setState({ filteredResults: newArray });
  }

  sortByUserFollow() {
    const features = this.props.unfilteredFeatureList;
    const follows = this.props.follows;
    // console.log("sortByUserFollow features", features);
    // console.log("sortByUserFollow follows", follows);
    const featureIDs = [];
    follows.map(follow => {
      if (follow.user_email === this.props.user.email) {
        featureIDs.push(follow.feature_id);
      }
      return follow;
    });
    // console.log("sortByUserFollow featureIDs", featureIDs);
    const filteredFeatures = [];
    features.map(feature => {
      featureIDs.map(featureID => {
        if (feature.id === JSON.stringify(featureID)) {
          filteredFeatures.push(feature);
        }
        return featureID;
      });
      return feature;
    });
    // console.log("sortByUserFollow filteredFeatures", filteredFeatures);
    this.setState({ filteredResults: filteredFeatures });
  }

  sortFeatures() {
    if (this.state.sortByMarker === "votes") {
      this.sortByVotes();
    } else if (this.state.sortByMarker === "date") {
      this.sortByDate();
    } else if (this.state.sortByMarker === "follow") {
      this.sortByUserFollow();
    }
  }

  handleDateClicked(e) {
    e.preventDefault();
    this.setState({ sortByMarker: "date" });
  }

  handleVotesClicked(e) {
    e.preventDefault();
    this.setState({ sortByMarker: "votes" });
  }

  handleFollowClicked(e) {
    e.preventDefault();
    this.setState({ sortByMarker: "follow" });
  }

  componentDidMount() {
    this.sortFeatures();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.sortByMarker !== prevState.sortByMarker) {
      this.sortFeatures();
    } else {
      console.log("no update");
    }
  }

  render() {
    // const features = this.props.features;
    return (
      <div>
        <br />
        <h1 className="listHeader">Browse Feature Requests</h1>
        <div className="buttonBox">
          <Button onClick={this.handleDateClicked}>Sort by date!</Button>
          <Button onClick={this.handleVotesClicked}>Sort by votes!</Button>
          <Button onClick={this.handleFollowClicked}>
            See your followed features!
          </Button>
        </div>
        <br />
        <FilteredFeatureList
          checkNewVotes={this.checkNewVotes}
          getAllFeatures={this.props.getAllFeatures}
          editFeature={this.props.editFeature}
          // getAllActivities={this.props.getAllActivities}
          getUserActivities={this.props.getUserActivities}
          newActivity={this.props.newActivity}
          deleteActivity={this.props.deleteActivity}
          // sortByVotes={this.props.sortByVotes}
          // sortByDate={this.props.sortByDate}
          // getVotes={this.props.getVotes}
          // seeUserFollows={this.props.seeUserFollows}
          votes={this.props.votes}
          follows={this.props.follows}
          filteredResults={this.state.filteredResults}
          products={this.props.products}
          user={this.props.user}
          // votes={this.props.votes}
          // getVotes={this.props.getVotes}
        />
      </div>
    );
  }
}
