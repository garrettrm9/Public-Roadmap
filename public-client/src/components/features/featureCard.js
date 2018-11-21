import React, { Component } from "react";
import { Button, Card } from "@blueprintjs/core";

export default class FeatureCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: "",
      votesActive: false,
      vote: ""
    };

    this.voteClick = this.voteClick.bind(this);
    // this.removeVote = this.removeVote.bind(this);
  }

  voteClick() {
    if (this.state.votesActive === false) {
      this.props.addVote(this.props.feature.id, this.props.user.email)
      this.setState({votesActive: true})
    }
    else if (this.state.votesActive === true) {
      this.props.deleteVote(this.props.feature.id, this.props.user.email)
      this.setState({votesActive: false})
    }
    // const feature = this.props.feature;
    // const votes = feature.votes + 1;
    // // console.log("FeatureCard votes", votes);
    // // this.props.checkNewVotes(true);
    // this.props.editFeature(
    //   feature.id,
    //   feature.name,
    //   // feature.author,
    //   feature.purpose,
    //   feature.user_story,
    //   feature.acceptance_criteria,
    //   feature.business_value,
    //   feature.wireframes,
    //   feature.attachments,
    //   votes,
    //   feature.date_last_updated,
    //   feature.product_name,
    //   feature.user_email
    // );
    // // this.props.sortByVotes();
  }

  // removeVote(){
  //   this.props.deleteVote(this.state.vote.id)
  // }

  componentDidMount() {
    // this.props.getVotes(this.props.feature.id)
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
    const votes = this.props.votes
    // console.log("card votes", votes)
    for (var x = 0; x < votes.length; x++) {
      const voteFeatureID = JSON.stringify(votes[x].feature_id)
      // console.log("votes[i].feature_id", votes[x].feature_id)
      // console.log("voteFeatureID", voteFeatureID)
      // console.log("this.props.feature.id", this.props.feature.id)
      if (voteFeatureID === this.props.feature.id && votes[x].user_email === this.props.user.email) {
        this.setState({votesActive: true})
        this.setState({vote: votes[x]})
        break
      }
    }
  }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.votes.length !== this.props.votes.length) {
  //     const votes = this.props.votes
  //     // console.log("card votes", votes)
  //     for (var x = 0; x < votes.length; x++) {
  //       const voteFeatureID = JSON.stringify(votes[x].feature_id)
  //       // console.log("votes[i].feature_id", votes[x].feature_id)
  //       // console.log("voteFeatureID", voteFeatureID)
  //       // console.log("this.props.feature.id", this.props.feature.id)
  //       if (voteFeatureID === this.props.feature.id && votes[x].user_email === this.props.user.email) {
  //         this.setState({votesActive: true})
  //         this.setState({vote: votes[x]})
  //         break
  //       }
  //       else {
  //         this.setState({votesActive: false})
  //       }
  //     }
  //   }
  // }

  render() {
    // let buttonClick = null
    // if (this.state.votesActive === true) {
    //   buttonClick = this.removeVote()
    // } else if (this.state.votesActive === false) {
    //   buttonClick = this.newVote()
    // }
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
          <Button active={this.state.votesActive} onClick={this.voteClick}>Vote or die!</Button>
        </Card>
        <div className="cardDivider" />
      </div>
    );
  }
}
