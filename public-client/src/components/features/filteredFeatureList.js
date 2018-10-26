import React, { Component } from "react";
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
        editFeature={this.props.editFeature}
        // getVotes={this.props.getVotes}
        // votes={this.props.votes}
      />
    );
  }

  render() {
    const featureCards = this.props.unfilteredFeatureList.map(
      this.renderFeatureCards
    );

    return (
      <div className="featureCardsContainer">
        <h3>filteredfeaturelist</h3>
        {featureCards}
      </div>
    );
  }
}
