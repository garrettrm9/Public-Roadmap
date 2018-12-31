import React, { Component } from "react";
import { Link } from "react-router-dom";
// import AddFeatureForm from "./addFeatureForm";
import Search from "./search";
import { Alignment, Button, Navbar, Divider } from "@blueprintjs/core";

export default class NavBar extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     modalOpen: false
  //   };
  //   this.toggleOverlay = this.toggleOverlay.bind(this);
  // }

  // toggleOverlay() {
  //   this.setState({ modalOpen: !this.state.modalOpen });
  // }

  render() {
    return (
      <div>
        <Navbar className="navbar">
          <Navbar.Group align={Alignment.LEFT}>
            <Navbar.Heading>Roadmap</Navbar.Heading>
            <Divider className="navbarDivider" />
            <Link to="/home">
              <Button
                className="bp3-minimal bp3-intent-warnings navButton"
                icon="home"
                text="Home"
              />
            </Link>
            <Link to="/addFeature">
              <Button
                className="bp3-minimal bp3-intent-warnings navButton"
                icon="plus"
                text="Feature request"
              />
            </Link>
            <Link to="/product">
              <Button
                className="bp3-minimal bp3-intent-warnings navButton"
                icon="projects"
                text="Products"
              />
            </Link>
            <Link to="/company">
              <Button
                className="bp3-minimal bp3-intent-warnings navButton"
                icon="briefcase"
                text="Companies"
              />
            </Link>
            <Button
              className="bp3-minimal bp3-intent-warnings navButton"
              icon="log-out"
              text="Logout"
              onClick={this.props.logout}
            />
          </Navbar.Group>
          <Navbar.Group align={Alignment.RIGHT}>
            <Search
              grabSearchResults={this.props.grabSearchResults}
              user={this.props.user}
              products={this.props.products}
              companies={this.props.companies}
              votes={this.props.votes}
              follows={this.props.follows}
              unfilteredFeatureList={this.props.unfilteredFeatureList}
              navigateToResults={this.props.navigateToResults}
              // getInfo={this.props.getInfo}
              // searchResults={this.props.searchResults}
            />
          </Navbar.Group>
        </Navbar>
      </div>
    );
  }
}

// <Dialog isOpen={this.state.modalOpen} onClose={this.toggleOverlay}>
//   <AddFeatureForm
//     toggleOverlay={this.toggleOverlay}
//     addFeature={this.props.addFeature}
//     products={this.props.products}
//     user={this.props.user}
//   />
// </Dialog>
