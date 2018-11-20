import React, { Component } from "react";
import { Button, Card } from "@blueprintjs/core";

export default class FeatureCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: ""
    };

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
      // feature.author,
      feature.purpose,
      feature.user_story,
      feature.acceptance_criteria,
      feature.business_value,
      feature.wireframes,
      feature.attachments,
      votes,
      feature.date_last_updated,
      feature.product_name,
      feature.user_email
    );
    // this.props.sortByVotes();
  }

  componentDidMount() {
    // console.log("featureCard mount products props", this.props.products)
    // console.log("featureCard mount feature.product_name", this.props.feature.product_name)
    const products = this.props.products
    for (var i = 0; i < products.length; i++) {
      if (this.props.feature.product_name === products[i].name) {
        // console.log("logic check product company name", products[i].company_name)
        this.setState({companyName: products[i].company_name})
        break
      }
    }
  }

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
          <h2>Name: {feature.name}</h2>
          <h3>Product: {feature.product_name}</h3>
          <h3>Company: {this.state.companyName}</h3>
          <h3>Proposed by: {feature.user_email}</h3>
          <h4>id: {feature.id}</h4>
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
