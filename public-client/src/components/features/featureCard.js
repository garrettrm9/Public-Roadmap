import React, { Component } from "react";
import { Button } from "@blueprintjs/core";

export default class FeatureCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userVote: this.props.userVote,
      userFollow: this.props.userFollow
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
      feature.userVote = true;
      this.props.getAllFeatures();
      this.props.getUserActivities();
      // this.forceUpdate();
    } else if (feature.userVote === true) {
      this.props.deleteActivity(
        this.props.feature.id,
        this.props.user.email,
        "vote"
      );
      feature.userVote = false;
      this.props.getAllFeatures();
      this.props.getUserActivities();
      // this.forceUpdate();
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
      feature.userFollow = true;
      this.props.getAllFeatures();
      this.props.getUserActivities();
      // this.forceUpdate();
    } else if (feature.userFollow === true) {
      this.props.deleteActivity(
        this.props.feature.id,
        this.props.user.email,
        "follow"
      );
      feature.userFollow = false;
      this.props.getAllFeatures();
      this.props.getUserActivities();
      // this.forceUpdate();
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

  componentDidUpdate(prevProps, prevState) {
    if (this.props.userFollow !== prevProps.userFollow) {
      console.log("userFollow update");
      this.setState({ userFollow: this.props.userFollow });
    } else if (this.props.userVote !== prevProps.userFollow) {
      console.log("userVote update");
      this.setState({ userVote: this.props.userVote });
    }
  }

  // componentDidMount() {
  // this.checkForVote();
  // this.checkForFollow();
  // const feature = this.props.feature;
  // console.log("card mount vote", this.state.userVote);
  // console.log("card mount follow", this.state.userFollow);
  // }

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
          <Button
            text={feature.userVote ? "Unvote" : "Vote"}
            onClick={this.voteClick}
            active={feature.userVote}
          />
          <Button
            text={feature.userFollow ? "Unfollow" : "Follow"}
            onClick={this.followClick}
            active={feature.userFollow}
          />
        </div>
        <div className="cardDivider" />
      </section>
    );
  }
}
