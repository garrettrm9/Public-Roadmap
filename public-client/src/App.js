import React, { Component } from "react";
import {
  Alignment,
  Button,
  // Classes,
  // H5,
  Navbar
  // NavbarDivider,
  // NavbarGroup,
  // NavbarHeading,
  // Switch
} from "@blueprintjs/core";
import Home from "./Components/screens/home";
import Login from "./Components/screens/login";
import "./App.css";
import axios from "axios";
import TokenService from "./Services/tokenService";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unfilteredFeatureList: [],
      count: "",
      isLoggedIn: false,
      user: []
    };
    this.getAllFeatures = this.getAllFeatures.bind(this);
    this.editFeature = this.editFeature.bind(this);
    // this.getVotes = this.getVotes.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.register = this.register.bind(this);
  }

  getAllFeatures() {
    axios({
      url: "http://localhost:8080/features"
    })
      .then(response => {
        // console.log("getAllFeatures response", response.data);
        this.setState({ unfilteredFeatureList: response.data });
      })
      .catch(err => console.log(`getAllFeatures err: ${err}`));
  }

  editFeature(
    id,
    name,
    author,
    purpose,
    userStory,
    acceptanceCriteria,
    businessValue,
    wireframes,
    attachments,
    votes
  ) {
    console.log("editFeature id", id);
    // console.log("editFeature name", name);
    // console.log("editFeature author", author);
    // console.log("editFeature purpose", purpose);
    // console.log("editFeature userStory", userStory);
    // console.log("editFeature acceptanceCriteria", acceptanceCriteria);
    // console.log("editFeature businessValue", businessValue);
    // console.log("editFeature wireframes", wireframes);
    // console.log("editFeature attachments", attachments);
    console.log("editFeature votes", votes);
    axios({
      url: `http://localhost:8080/features/${id}`,
      method: "PUT",
      data: {
        name: name,
        author: author,
        purpose: purpose,
        user_story: userStory,
        acceptance_criteria: acceptanceCriteria,
        business_value: businessValue,
        wireframes: wireframes,
        attachments: attachments,
        votes: votes
      }
    })
      .then(response => {
        this.getAllFeatures();
      })
      .catch(err => console.log(`editFeature err: ${err}`));
  }

  login(email, password) {
    // console.log("login app.js", data);
    axios({
      url: "http://localhost:8080/users/login",
      method: "POST",
      data: { email: email, password: password }
    })
      .then(response => {
        TokenService.save(response.data.token);
        console.log("login response", response.data);
        this.setState({ isLoggedIn: true, user: response.data.user });
      })
      .catch(err => console.log("login err", err));
  }

  register(email, password) {
    // console.log("register app.js", data);
    this.setState({ isLoggedIn: "WAITING" });
    axios({
      url: "http://localhost:8080/users",
      method: "POST",
      data: { email: email, password: password }
    })
      .then(response => {
        TokenService.save(response.data.token);
        console.log("register response", response.data);
        this.setState({ isLoggedIn: true, user: response.data.user });
      })
      .catch(err => console.log("register err", err));
  }

  logout() {
    TokenService.destroy();
    this.setState({
      isLoggedIn: false,
      user: [],
      unfilteredFeatureList: [],
      count: ""
    });
    // console.log("logged out user?", this.state.user);
  }

  // getVotes(feature_id) {
  //   axios({
  //     url: `http://localhost:8080/activities/votes/${feature_id}`
  //   })
  //     .then(response => {
  //       // console.log("getVotes", response.data);
  //       // console.log("feature_id", feature_id);
  //       const data = response.data;
  //       const count = data.length;
  //       // console.log("getVotes", count);
  //       this.setState({ votes: count });
  //     })
  //     .catch(err => console.log(`getVotes err: ${err}`));
  // }

  componentDidMount() {
    this.getAllFeatures();
  }

  render() {
    if (this.state.isLoggedIn === true) {
      return (
        <div>
          <Navbar>
            <Navbar.Group align={Alignment.LEFT}>
              <Navbar.Heading>Blueprint</Navbar.Heading>
              <Navbar.Divider />
              <Button className="bp3-minimal" icon="home" text="Home" />
              <Button className="bp3-minimal" icon="document" text="Files" />
            </Navbar.Group>
          </Navbar>
          <Home
            logout={this.logout}
            // getVotes={this.getVotes}
            editFeature={this.editFeature}
            unfilteredFeatureList={this.state.unfilteredFeatureList}
            // votes={this.state.votes}
          />
        </div>
      );
    } else if (this.state.isLoggedIn === false) {
      return (
        <div>
          <Login login={this.login} register={this.register} />
        </div>
      );
    }
  }
}

export default App;
