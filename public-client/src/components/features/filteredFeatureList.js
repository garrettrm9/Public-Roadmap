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
        newActivity={this.props.newActivity}
        deleteActivity={this.props.deleteActivity}
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
