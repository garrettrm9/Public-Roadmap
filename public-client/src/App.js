import React, { Component } from "react";
// import {
//   // Alignment,
//   Button,
//   // Classes,
//   // H5,
//   // Navbar,
//   Icon,
//   // NavbarDivider,
//   // NavbarGroup,
//   // NavbarHeading,
//   // Switch,
//   // Overlay,
//   Dialog
// } from "@blueprintjs/core";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Home from "./Components/screens/home";
import ProductList from "./Components/screens/productList";
import ProductFeatures from "./Components/products/productFeatures";
import Login from "./Components/screens/login";
import NavBar from "./Components/NavBar/navBar";
import "./App.css";
import axios from "axios";
import TokenService from "./Services/tokenService";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      unfilteredFeatureList: [],
      isLoggedIn: false,
      user: [],
      votes: [],
      follows: [],
      productFeatures: []
    };
    this.getAllActivities = this.getAllActivities.bind(this);
    this.getAllProductFeatures = this.getAllProductFeatures.bind(this);
    this.getAllProducts = this.getAllProducts.bind(this);
    this.getAllFeatures = this.getAllFeatures.bind(this);
    this.addFeature = this.addFeature.bind(this);
    this.newActivity = this.newActivity.bind(this);
    this.deleteActivity = this.deleteActivity.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.register = this.register.bind(this);
    this.sortActivities = this.sortActivities.bind(this);
  }

  // ----------------------------PRODUCTS----------------------------

  getAllProducts() {
    // console.log("getAllProducts str", str);
    axios({
      url: "http://localhost:8080/products"
    })
      .then(response => {
        this.setState({ products: response.data });
      })
      .catch(err => console.log(`getAllProducts err: ${err}`));
  }

  // ----------------------------ACTIVITIES----------------------------

  sortActivities(activities) {
    const votes = [];
    const follows = [];
    activities.map(activity => {
      if (activity.type === "vote") {
        votes.push(activity);
      } else if (activity.type === "follow") {
        follows.push(activity);
      }
    });
    this.setState({ votes: votes, follows: follows });
  }

  getAllActivities() {
    axios({
      url: "http://localhost:8080/activities"
    })
      .then(response => {
        const activities = response.data;
        // console.log("getAllActivities resp", activities);
        this.sortActivities(activities);
      })
      .catch(err => console.log(`getAllActivities err: ${err}`));
  }

  newActivity(featureID, userEmail, type) {
    axios({
      url: `http://localhost:8080/activities/${featureID}`,
      method: "POST",
      data: {
        type: type,
        user_email: userEmail
      }
    })
      .then(response => {
        // this.getAllVotes();
        this.getAllActivities();
        this.getAllFeatures();
      })
      .catch(err => console.log(`newActivity err: ${err}`));
  }

  deleteActivity(featureID, userEmail, type) {
    axios({
      url: `http://localhost:8080/activities/${featureID}`,
      method: "DELETE",
      data: {
        type: type,
        user_email: userEmail
      }
    })
      .then(response => {
        // this.getAllVotes();
        this.getAllActivities();
        this.getAllFeatures();
      })
      .catch(err => console.log(`deleteActivity err: ${err}`));
  }

  // ----------------------------FEATURES----------------------------

  getAllFeatures() {
    // console.log("getAllProducts str", str);
    axios({
      url: "http://localhost:8080/features"
    })
      .then(response => {
        const features = response.data;
        features.map(feature => {
          // console.log("feature", feature)
          const votesFilteredArr = [];
          const votes = this.state.votes;
          votes.map(vote => {
            // console.log("vote", vote)
            const voteFeatureID = JSON.stringify(vote.feature_id);
            // console.log("vote.feature_id", typeof voteFeatureID)
            // console.log("feature.id", typeof feature.id)

            if (voteFeatureID === feature.id) {
              votesFilteredArr.push(vote);
              // console.log("yes")
            }
            // console.log("getAllFeatures votesFilteredArr", votesFilteredArr)
            const length = votesFilteredArr.length;
            feature.votes = length;
          });
        });
        // console.log("getAllFeatures features", features)
        this.setState({ unfilteredFeatureList: features });
        // this.sortByVotes();
      })
      .catch(err => console.log(`getAllFeatures err: ${err}`));
  }

  getAllProductFeatures(name) {
    // console.log("getAllProductFeatures name", name);
    axios({
      url: `http://localhost:8080/products/${name}/features`
    })
      .then(response => {
        this.setState({ productFeatures: response.data });
        // console.log("getAllProductFeatures resp", response.data);
      })
      .catch(err => console.log(`getAllProductFeatures err: ${err}`));
  }

  addFeature(data) {
    axios({
      url: "http://localhost:8080/features",
      method: "POST",
      data: data
    })
      .then(response => {
        this.getAllActivities();
        this.getAllFeatures();
      })
      .catch(err => console.log(`addFeature err: ${err}`));
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
        // this.getAllProducts("login");
        // this.getAllVotes("login");
        // this.getAllFeatures("login");
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
        // this.getAllProducts("register");
        // this.getAllVotes("register");
        // this.getAllFeatures("register");
      })
      .catch(err => console.log("register err", err));
  }

  logout() {
    TokenService.destroy();
    this.setState({
      // products: [],
      // unfilteredFeatureList: [],
      isLoggedIn: false,
      user: []
    });
    // console.log("logged out user?", this.state.user);
  }

  componentDidMount() {
    this.getAllProducts();
    this.getAllActivities();
    this.getAllFeatures();
  }

  render() {
    if (this.state.isLoggedIn === true) {
      return (
        <div>
          <NavBar
            addFeature={this.addFeature}
            products={this.state.products}
            user={this.state.user}
          />
          <Router>
            <Switch>
              <Route
                exact
                path="/product/:name"
                render={props => (
                  <ProductFeatures
                    {...props}
                    productFeatures={this.state.productFeatures}
                    getAllProductFeatures={this.getAllProductFeatures}
                    products={this.state.products}
                    votes={this.state.votes}
                    follows={this.state.follows}
                    user={this.state.user}
                    newActivity={this.newActivity}
                    deleteActivity={this.deleteActivity}
                  />
                )}
              />
              <Route
                exact
                path="/product"
                render={props => (
                  <ProductList
                    products={this.state.products}
                    unfilteredFeatureList={this.state.unfilteredFeatureList}
                  />
                )}
              />
              <Route
                exact
                path="/home"
                render={props => (
                  <Home
                    {...props}
                    logout={this.logout}
                    // getAllVotes={this.getAllVotes}
                    getAllFeatures={this.getAllFeatures}
                    addFeature={this.addFeature}
                    getAllActivities={this.getAllActivities}
                    newActivity={this.newActivity}
                    deleteActivity={this.deleteActivity}
                    // getAllVotes={this.getAllVotes}
                    // seeUserFollows={this.seeUserFollows}
                    products={this.state.products}
                    unfilteredFeatureList={this.state.unfilteredFeatureList}
                    user={this.state.user}
                    votes={this.state.votes}
                    follows={this.state.follows}
                  />
                )}
              />
              <Route path="/" render={() => <Redirect to="/home" />} />
            </Switch>
          </Router>
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

// editFeature(
//   id,
//   name,
//   // author,
//   purpose,
//   userStory,
//   acceptanceCriteria,
//   businessValue,
//   wireframes,
//   attachments,
//   votes,
//   dateLastUpdated,
//   productName,
//   userEmail
// ) {
//   // console.log("editFeature id", id);
//   // console.log("editFeature name", name);
//   // console.log("editFeature author", author);
//   // console.log("editFeature purpose", purpose);
//   // console.log("editFeature userStory", userStory);
//   // console.log("editFeature acceptanceCriteria", acceptanceCriteria);
//   // console.log("editFeature businessValue", businessValue);
//   // console.log("editFeature wireframes", wireframes);
//   // console.log("editFeature attachments", attachments);
//   // console.log("editFeature votes", votes);
//   axios({
//     url: `http://localhost:8080/features/${id}`,
//     method: "PUT",
//     data: {
//       name: name,
//       // author: author,
//       purpose: purpose,
//       user_story: userStory,
//       acceptance_criteria: acceptanceCriteria,
//       business_value: businessValue,
//       wireframes: wireframes,
//       attachments: attachments,
//       votes: votes,
//       date_last_updated: dateLastUpdated,
//       product_name: productName,
//       user_email: userEmail
//     }
//   })
//     .then(response => {
//       this.getAllFeatures();
//     })
//     .catch(err => console.log(`editFeature err: ${err}`));
// }
