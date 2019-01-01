import React, { Component } from "react";
import { Button, Card } from "@blueprintjs/core";

export default class ProductFeatureCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: "",
      votesActive: this.props.feature.votesActive,
      followActive: this.props.feature.followActive
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
  }

  checkForFollow() {
    console.log(
      "checkForFollow userFollow prop",
      this.props.feature.userFollow
    );
    this.setState({ followActive: this.props.feature.userFollow });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.feature.length !== prevProps.feature.length) {
      this.checkForVote();
    }
  }

  render() {
    const feature = this.props.feature;
    const date = feature.date_last_updated.split("T");
    return (
      <div className="productCardContainer">
        <div
          // interactive={true}
          // elevation={Elevation.FOUR}
          className="bp3-card bp3-interactive productCard"
        >
          <section className="cardHeader">
            <h2 className="cardSectionHeader">{feature.name}</h2>
            <img
              className="cardImage"
              src={require("../../Images/directions.jpg")}
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
