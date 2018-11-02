import React, { Component } from "react";
import { Button, Card } from "@blueprintjs/core";

export default class FeatureCard extends Component {
  constructor(props) {
    super(props);
    this.newVote = this.newVote.bind(this);
  }

  newVote() {
    const feature = this.props.feature;
    const votes = feature.votes + 1;
    // console.log("FeatureCard votes", votes);
    // this.props.checkNewVotes(true);
    this.props.editFeature(
      feature.id,
      feature.name,
      feature.author,
      feature.purpose,
      feature.user_story,
      feature.acceptance_criteria,
      feature.business_value,
      feature.wireframes,
      feature.attachments,
      votes,
      feature.date_last_updated
    );
    // this.props.sortByVotes();
  }

  // componentDidMount() {
  //   // console.log("FeatureCard mount", this.props.feature.id);
  //   this.props.getVotes(this.props.feature.id);
  // }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.feature.id !== this.props.feature.id) {
  //     this.props.getVotes(this.props.feature.id);
  //   }
  // }

  render() {
    const feature = this.props.feature;
    const date = feature.date_last_updated.split("T");
    return (
      <div>
        <Card
          interactive={true}
          // elevation={Elevation.FOUR}
          className="featureCards bp3-card bp3-interactive"
        >
          <h4>Feature name: {feature.name}</h4>
          <h4>Author: {feature.author}</h4>
          <h4>Purpose: {feature.purpose}</h4>
          <h4>Votes: {feature.votes}</h4>
          <h4>Last updated: {date[0]}</h4>
          <Button onClick={this.newVote}>Vote or die!</Button>
        </Card>
        <div className="cardDivider" />
      </div>
    );
  }
}
