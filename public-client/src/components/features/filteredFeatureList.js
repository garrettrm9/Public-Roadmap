import React, { Component } from "react";
import { Button } from "@blueprintjs/core";
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
        // getAllFeatures={this.props.getAllFeatures}
        checkNewVotes={this.props.checkNewVotes}
        editFeature={this.props.editFeature}
        sortByVotes={this.props.sortByVotes}
        // getVotes={this.props.getVotes}
        // votes={this.props.votes}
      />
    );
  }

  // componentDidMount() {
  //   this.props.sortByVotes;
  // }

  render() {
    const featureCards = this.props.filteredFeatureList.map(
      this.renderFeatureCards
    );
    // const sortedByDateCards = this.sortByDate(this.props.unfilteredFeatureList);
    // const featureCards = sortedByDateCards.map(this.renderFeatureCards);

    // const sortedByVoteCards = this.sortByVotes(
    //   this.props.unfilteredFeatureList
    // );
    // const featureCards = sortedByVoteCards.map(this.renderFeatureCards);

    // const featureCards = this.props.unfilteredFeatureList.map(
    //   this.renderFeatureCards
    // );

    return (
      <div className="featureCardsContainer">
        <h3>filteredfeaturelist</h3>
        <Button onClick={this.props.sortByDate}>Sort by date!</Button>
        <Button onClick={this.props.sortByVotes}>Sort by votes!</Button>
        {featureCards}
      </div>
    );
  }
}
