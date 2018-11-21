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
      products: [],
      unfilteredFeatureList: [],
      filteredFeatureList: [],
      count: "",
      isLoggedIn: false,
      user: [],
      votes: ""
    };
    this.getAllProducts = this.getAllProducts.bind(this)
    this.getAllFeatures = this.getAllFeatures.bind(this);
    this.editFeature = this.editFeature.bind(this);
    this.getVotes = this.getVotes.bind(this);
    this.addVote = this.addVote.bind(this)
    this.deleteVote = this.deleteVote.bind(this)
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.register = this.register.bind(this);
    this.sortByVotes = this.sortByVotes.bind(this);
    this.sortByDate = this.sortByDate.bind(this);
    // this.seeUserFollows = this.seeUserFollows.bind(this)
  }

// ----------------------------SORTING----------------------------
  sortByVotes() {
    const newArray = this.state.unfilteredFeatureList.sort(function(a, b) {
      return b.votes - a.votes;
    });
    // console.log("sortByVotes newArray", newArray);
    this.setState({ filteredFeatureList: newArray });
  }

  sortByDate() {
    const newArray = this.state.filteredFeatureList.sort(function(a, b) {
      const dateA = new Date(a.date_last_updated);
      const dateB = new Date(b.date_last_updated);
      return dateB - dateA;
    });
    // console.log("sortByDate newArray", newArray);
    this.setState({ filteredFeatureList: newArray });
  }

// ----------------------------PRODUCTS----------------------------

  getAllProducts(){
    axios({
      url: "http://localhost:8080/products"      
    })
      .then(response => {
        this.setState({products: response.data})
      })
      .catch(err => console.log(`getAllProducts err: ${err}`));
  }

// ----------------------------VOTES----------------------------

  getVotes() {
    axios({
      url: 'http://localhost:8080/activities/votes/'
    })
      .then(response => {
        // console.log("getVotes", response.data);
        // console.log("feature_id", feature_id);
        // const length = response.data
        // console.log("getVotes votes length", length)
        // const data = response.data;
        // const count = data.length;
        // console.log("getVotes", count);
        this.setState({ votes: response.data });
      })
      .catch(err => console.log(`getVotes err: ${err}`));
  }

  addVote(featureID, userEmail){
    axios({
      url: `http://localhost:8080/activities/votes/${featureID}`,
      method: "POST",
      data: {
        user_email: userEmail
      }
    })
    .then(response => {
      this.getVotes();
      this.getAllFeatures();
    })
    .catch(err => console.log(`addVote err: ${err}`));
  }

  deleteVote(featureID, userEmail){
    axios({
      url: `http://localhost:8080/activities/votes/${featureID}`,
      method: "DELETE",
      data: {
        user_email: userEmail
      }
    })
    .then(response => {
      this.getVotes();
      this.getAllFeatures();
    })
    .catch(err => console.log(`deleteVote err: ${err}`));    
  }

// ----------------------------FEATURES----------------------------

  getAllFeatures() {
    axios({
      url: "http://localhost:8080/features"
    })
      .then(response => {
        const features = response.data
        features.map(feature => {
          // console.log("feature", feature)
          const votesFilteredArr = []
          const votes = this.state.votes
          votes.map(vote => {
            // console.log("vote", vote)
            const voteFeatureID = JSON.stringify(vote.feature_id)
            // console.log("vote.feature_id", typeof voteFeatureID)
            // console.log("feature.id", typeof feature.id)

            if (voteFeatureID === feature.id) {
              votesFilteredArr.push(vote)
              // console.log("yes")
            }
          // console.log("getAllFeatures votesFilteredArr", votesFilteredArr)
          const length = votesFilteredArr.length
          feature.votes = length
          })
        })
        // console.log("getAllFeatures features", features)
        this.setState({ unfilteredFeatureList: features });
        this.sortByVotes();
      })
      .catch(err => console.log(`getAllFeatures err: ${err}`));
  }

  editFeature(
    id,
    name,
    // author,
    purpose,
    userStory,
    acceptanceCriteria,
    businessValue,
    wireframes,
    attachments,
    votes,
    dateLastUpdated,
    productName,
    userEmail
  ) {
    // console.log("editFeature id", id);
    // console.log("editFeature name", name);
    // console.log("editFeature author", author);
    // console.log("editFeature purpose", purpose);
    // console.log("editFeature userStory", userStory);
    // console.log("editFeature acceptanceCriteria", acceptanceCriteria);
    // console.log("editFeature businessValue", businessValue);
    // console.log("editFeature wireframes", wireframes);
    // console.log("editFeature attachments", attachments);
    // console.log("editFeature votes", votes);
    axios({
      url: `http://localhost:8080/features/${id}`,
      method: "PUT",
      data: {
        name: name,
        // author: author,
        purpose: purpose,
        user_story: userStory,
        acceptance_criteria: acceptanceCriteria,
        business_value: businessValue,
        wireframes: wireframes,
        attachments: attachments,
        votes: votes,
        date_last_updated: dateLastUpdated,
        product_name: productName,
        user_email: userEmail
      }
    })
      .then(response => {
        this.getAllFeatures();
      })
      .catch(err => console.log(`editFeature err: ${err}`));
  }

// ----------------------------AUTH----------------------------

  login(email, password) {
    axios({
      url: "http://localhost:8080/users/login",
      method: "POST",
      data: { email: email, password: password }
    })
      .then(response => {
        // this.getAllFeatures();
        TokenService.save(response.data.token);
        // console.log("login response", response.data);
        this.setState({ isLoggedIn: true, user: response.data.user });
      })
      .catch(err => console.log("login err", err));
  }

  register(email, password) {
    axios({
      url: "http://localhost:8080/users",
      method: "POST",
      data: { email: email, password: password }
    })
      .then(response => {
        // this.getAllFeatures();
        TokenService.save(response.data.token);
        // console.log("register response", response.data);
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
      filteredFeatureList: [],
      count: ""
    });
    // console.log("logged out user?", this.state.user);
  }

  // seeUserFollows(userID){
  //   axios({
  //     url: `http://localhost:8080/activities/follows/${userID}`
  //   })
  //   .then(response => {
  //     console.log("seeUserFollows response", response.data)
  //     const data = response.data
  //     data.map(follow => {
  //       this.getFeature(follow.id)
  //     })
  //   })
  //     .catch(err => console.log(`seeUserFollows err: ${err}`));
  // }


  componentDidMount() {
    this.getVotes()
    this.getAllProducts();
  }

  componentDidUpdate(prevProps, prevState){
    if (prevState.votes.length !== this.state.votes.length) {
      this.getAllFeatures()
    }
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
            getAllFeatures={this.getAllFeatures}
            editFeature={this.editFeature}
            sortByVotes={this.sortByVotes}
            sortByDate={this.sortByDate}
            addVote={this.addVote}  
            deleteVote={this.deleteVote}                                                                            
            // getVotes={this.getVotes}
            // seeUserFollows={this.seeUserFollows}
            products={this.state.products}
            // votes={this.state.votes}            
            unfilteredFeatureList={this.state.unfilteredFeatureList}
            filteredFeatureList={this.state.filteredFeatureList}
            user={this.state.user}
            votes={this.state.votes}
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
