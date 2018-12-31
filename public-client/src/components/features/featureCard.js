import React, { Component } from "react";
import { Button, Card } from "@blueprintjs/core";

export default class FeatureCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: "",
      votesActive: this.props.feature.votesActive,
      followActive: this.props.feature.followActive
      // vote: "",
      // follow: ""
    };

    this.voteClick = this.voteClick.bind(this);
    this.followClick = this.followClick.bind(this);
    this.checkForVote = this.checkForVote.bind(this);
    this.checkForFollow = this.checkForFollow.bind(this);
  }

  voteClick() {
    if (this.state.votesActive === false) {
      this.props.newActivity(
        this.props.feature.id,
        this.props.user.email,
        "vote"
      );
      this.setState({ votesActive: true });
    } else if (this.state.votesActive === true) {
      this.props.deleteActivity(
        this.props.feature.id,
        this.props.user.email,
        "vote"
      );
      this.setState({ votesActive: false });
    }
  }

  followClick() {
    if (this.state.followActive === false) {
      this.props.newActivity(
        this.props.feature.id,
        this.props.user.email,
        "follow"
      );
      this.setState({ followActive: true });
    } else if (this.state.followActive === true) {
      this.props.deleteActivity(
        this.props.feature.id,
        this.props.user.email,
        "follow"
      );
      this.setState({ followActive: false });
    }
  }

  checkForVote() {
    console.log("checkForVote userVote prop", this.props.feature.userVote);
    this.setState({ votesActive: this.props.feature.userVote });
    // const products = this.props.products;
    // for (var i = 0; i < products.length; i++) {
    //   if (this.props.feature.product_name === products[i].name) {
    //     // console.log("logic check product company name", products[i].company_name)
    //     this.setState({ companyName: products[i].company_name });
    //     break;
    //   }
    // }
    // const votes = this.props.votes;
    // // console.log("card votes", votes)
    // for (var x = 0; x < votes.length; x++) {
    //   const voteFeatureID = JSON.stringify(votes[x].feature_id);
    //   // console.log("votes[i].feature_id", votes[x].feature_id)
    //   // console.log("voteFeatureID", voteFeatureID)
    //   // console.log("this.props.feature.id", this.props.feature.id)
    //   if (
    //     voteFeatureID === this.props.feature.id &&
    //     votes[x].user_email === this.props.user.email &&
    //     votes[x].type === "vote"
    //   ) {
    //     this.setState({ votesActive: true });
    //     this.setState({ vote: votes[x] });
    //     break;
    //   }
    // }
  }

  checkForFollow() {
    console.log(
      "checkForFollow userFollow prop",
      this.props.feature.userFollow
    );
    this.setState({ followActive: this.props.feature.userFollow });
    // const products = this.props.products;
    // for (var i = 0; i < products.length; i++) {
    //   if (this.props.feature.product_name === products[i].name) {
    //     // console.log("logic check product company name", products[i].company_name)
    //     this.setState({ companyName: products[i].company_name });
    //     break;
    //   }
    // }
    // const follows = this.props.follows;
    // // console.log("card votes", votes)
    // for (var x = 0; x < follows.length; x++) {
    //   const followFeatureID = JSON.stringify(follows[x].feature_id);
    //   // console.log("follows[i].feature_id", follows[x].feature_id)
    //   // console.log("followFeatureID", followFeatureID)
    //   // console.log("this.props.feature.id", this.props.feature.id)
    //   if (
    //     followFeatureID === this.props.feature.id &&
    //     follows[x].user_email === this.props.user.email &&
    //     follows[x].type === "follow"
    //   ) {
    //     this.setState({ followActive: true });
    //     this.setState({ follow: follows[x] });
    //     break;
    //   }
    // }
  }

  // componentDidMount() {
  //   this.checkForVote();
  //   this.checkForFollow();
  // console.log("FeatureCard votes", this.props.votes);
  // console.log("FeatureCard follows", this.props.follows);
  // }

  componentDidUpdate(prevProps, prevState) {
    //   console.log("featureCard update props", this.props.feature.userVote);
    //   console.log("featureCard update prevProps", prevProps.feature.userVote);
    if (
      this.props.feature.length !== prevProps.feature.length
      // || this.props.feature.userFollow !== prevProps.feature.userFollow
    ) {
      this.checkForVote();
      //     this.checkForFollow();
      //     // } else if (this.props.feature.userVote !== prevProps.feature.userVote) {
      //     //     this.checkForVote();
      //     //   } else if (this.props.feature.userFollow !== prevProps.feature.userFollow) {
      //     //     this.checkForFollow();
      //     //   } else {
      //     //     console.log("FeatureCard update nope");
      //     //   }
      //     //   // if (this.props.votes.length > 0) {
      //     //   //   console.log("votes", this.props.votes);
      //     //   // } else
      //     //   if (this.props.follows.length > 0) {
      //     //     console.log("follows", this.props.follows);
      //   } else {
      //     console.log("nope");
    }
  }

  render() {
    // console.log("FeatureCard render", this.props.feature);
    const feature = this.props.feature;
    const date = feature.date_last_updated.split("T");
    return (
      <section className="card-content">
        <div
          // interactive={true}
          // elevation={Elevation.FOUR}
          className="bp3-card bp3-interactive"
        >
          <h2>Name: {feature.name}</h2>
          <h3>Product: {feature.product_name}</h3>
          <h3>Company: {feature.company_name}</h3>
          <h3>Proposed by: {feature.user_email}</h3>
          <h4>id: {feature.id}</h4>
          <h4>Purpose: {feature.purpose}</h4>
          <h4>Votes: {feature.votes}</h4>
          <h4>Last updated: {date[0]}</h4>
          <Button active={feature.votesActive} onClick={this.voteClick}>
            Vote or die!
          </Button>
          <Button active={feature.followActive} onClick={this.followClick}>
            Follow or die!
          </Button>
        </div>
        <div className="cardDivider" />
      </section>
    );
  }
}
