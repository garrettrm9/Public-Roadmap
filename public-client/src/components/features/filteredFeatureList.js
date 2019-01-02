import React, { Component } from "react";
// import { Button } from "@blueprintjs/core";
import FeatureCard from "./featureCard";

export default class FilteredFeatureList extends Component {
  constructor(props) {
    super(props);
    this.renderFeatureCards = this.renderFeatureCards.bind(this);
  }
  renderFeatureCards(feature, index) {
    feature.userVote = false;
    feature.userFollow = false;

    const votes = this.props.votes;

    for (var i = 0; i < votes.length; i++) {
      const voteID = JSON.stringify(votes[i].feature_id);
      if (voteID === feature.id) {
        feature.userVote = true;
        break;
      }
    }

    const follows = this.props.follows;

    for (var x = 0; x < follows.length; x++) {
      const followID = JSON.stringify(follows[x].feature_id);
      if (followID === feature.id) {
        feature.userFollow = true;
        break;
      }
    }

    return (
      <FeatureCard
        key={index}
        feature={feature}
        products={this.props.products}
        votes={this.props.votes}
        follows={this.props.follows}
        user={this.props.user}
        newActivity={this.props.newActivity}
        deleteActivity={this.props.deleteActivity}
        getUserActivities={this.props.getUserActivities}
        getAllFeatures={this.props.getAllFeatures}
      />
    );
  }

  render() {
    const featureCards = this.props.filteredResults.map(
      this.renderFeatureCards
    );
    return (
      <div className="featureCardsContainer">
        <div className="featureCards">{featureCards}</div>
      </div>
    );
  }
}
