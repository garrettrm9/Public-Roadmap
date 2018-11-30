import React, { Component } from "react";
// import { Button } from "@blueprintjs/core";
import FeatureCard from "./featureCard";

export default class FilteredFeatureList extends Component {
  constructor(props) {
    super(props);
    this.renderFeatureCards = this.renderFeatureCards.bind(this);
  }
  renderFeatureCards(feature, index) {
    return (
      <FeatureCard
        key={index}
        feature={feature}
        products={this.props.products}
        votes={this.props.votes}
        follows={this.props.follows}
        user={this.props.user}
        getAllFeatures={this.props.getAllFeatures}
        getAllActivities={this.props.getAllActivities}
        newActivity={this.props.newActivity}
        deleteActivity={this.props.deleteActivity}
        // getAllFeatures={this.props.getAllFeatures}
        checkNewVotes={this.props.checkNewVotes}
        // editFeature={this.props.editFeature}
        sortByVotes={this.props.sortByVotes}
        // getVotes={this.props.getVotes}
        // votes={this.props.votes}
      />
    );
  }

  render() {
    const featureCards = this.props.filteredResults.map(
      this.renderFeatureCards
    );
    return <div className="featureCardsContainer">{featureCards}</div>;
  }
}
