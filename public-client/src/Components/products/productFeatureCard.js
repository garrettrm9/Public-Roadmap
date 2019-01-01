import React, { Component } from "react";
import { Button } from "@blueprintjs/core";

export default class ProductFeatureCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: "",
      userVote: this.props.feature.userVote,
      userFollow: this.props.feature.userFollow
    };

    this.voteClick = this.voteClick.bind(this);
    this.followClick = this.followClick.bind(this);
    // this.checkForVote = this.checkForVote.bind(this);
    // this.checkForFollow = this.checkForFollow.bind(this);
  }

  voteClick() {
    const feature = this.props.feature;
    if (feature.userVote === false) {
      this.props.newActivity(
        this.props.feature.id,
        this.props.user.email,
        "vote"
      );
      this.setState({ votesActive: feature.userVote });
    } else if (feature.userVote === true) {
      this.props.deleteActivity(
        this.props.feature.id,
        this.props.user.email,
        "vote"
      );
      this.setState({ votesActive: feature.userVote });
    }
  }

  followClick() {
    const feature = this.props.feature;
    if (feature.userFollow === false) {
      this.props.newActivity(
        this.props.feature.id,
        this.props.user.email,
        "follow"
      );
      this.setState({ followActive: feature.userFollow });
    } else if (feature.userFollow === true) {
      this.props.deleteActivity(
        this.props.feature.id,
        this.props.user.email,
        "follow"
      );
      this.setState({ followActive: feature.userFollow });
    }
  }

  // checkForVote() {
  //   console.log("checkForVote userVote prop", this.props.feature.userVote);
  //   this.setState({ votesActive: this.props.feature.userVote });
  // }

  // checkForFollow() {
  //   console.log(
  //     "checkForFollow userFollow prop",
  //     this.props.feature.userFollow
  //   );
  //   this.setState({ followActive: this.props.feature.userFollow });
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.props.feature.length !== prevProps.feature.length) {
  //     this.checkForVote();
  //   }
  // }

  render() {
    const feature = this.props.feature;
    const date = feature.date_last_updated.split("T");
    return (
      <div className="productCard">
        <div
          // interactive={true}
          // elevation={Elevation.FOUR}
          className="bp3-card bp3-interactive"
        >
          <section className="cardHeader">
            <h2 className="cardSectionHeader">{feature.name}</h2>
            <img
              className="cardImage"
              src={require("../../Images/directions.jpg")}
              alt="roadmap"
            />
          </section>
          <h3 className="cardSectionHeader">Product:</h3>
          <p>{feature.product_name}</p>
          <h3 className="cardSectionHeader">Company:</h3>
          <p>{feature.company_name}</p>
          <h3 className="cardSectionHeader">Proposed by:</h3>
          <p>{feature.user_email}</p>
          <h3 className="cardSectionHeader">Purpose:</h3>
          <p>{feature.purpose}</p>
          <h3 className="cardSectionHeader">Votes:</h3>
          <p>{feature.votes}</p>
          <h3 className="cardSectionHeader">Last updated:</h3>
          <p>{date[0]}</p>
          <Button active={feature.votesActive} onClick={this.voteClick}>
            Vote!
          </Button>
          <Button active={feature.followActive} onClick={this.followClick}>
            Follow!
          </Button>
        </div>
        <div className="cardDivider" />
      </div>
    );
  }
}
