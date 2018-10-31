import React, { Component } from "react";
import FeatureCard from "./featureCard";

export default class FilteredFeatureList extends Component {
  constructor(props) {
    super(props);
    this.renderFeatureCards = this.renderFeatureCards.bind(this);
    this.sortByDate = this.sortByDate.bind(this);
    this.sortByVotes = this.sortByVotes.bind(this);
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

  sortByDate(array) {
    const newArray = array.sort(function(a, b) {
      const dateA = new Date(a.date_created);
      const dateB = new Date(b.date_created);
      return dateB - dateA;
    });
    return newArray;
  }

  sortByVotes(array) {
    const newArray = array.sort(function(a, b) {
      return b.votes - a.votes;
    });
    return newArray;
  }

  render() {
    // const sortedByDateCards = this.sortByDate(this.props.unfilteredFeatureList);
    // const featureCards = sortedByDateCards.map(this.renderFeatureCards);

    const sortedByVoteCards = this.sortByVotes(
      this.props.unfilteredFeatureList
    );
    const featureCards = sortedByVoteCards.map(this.renderFeatureCards);

    // const featureCards = this.props.unfilteredFeatureList.map(
    //   this.renderFeatureCards
    // );

    return (
      <div className="featureCardsContainer">
        <h3>filteredfeaturelist</h3>
        {featureCards}
      </div>
    );
  }
}
