import React, { Component } from "react";
import AddFeatureForm from "./addFeatureForm";
import Search from "./search";
import { Alignment, Button, Dialog, Navbar } from "@blueprintjs/core";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    };
    this.toggleOverlay = this.toggleOverlay.bind(this);
  }

  toggleOverlay() {
    this.setState({ modalOpen: !this.state.modalOpen });
  }

  render() {
    return (
      <Navbar>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>Blueprint</Navbar.Heading>
          <Navbar.Divider />
          <Button className="bp3-minimal" icon="home" text="Home" />
          <Button className="bp3-minimal" icon="document" text="Files" />
          <div>
            <Button
              className="bp3-minimal"
              icon="plus"
              text="Add feature request"
              onClick={this.toggleOverlay}
            />
            <Dialog isOpen={this.state.modalOpen} onClose={this.toggleOverlay}>
              <AddFeatureForm
                toggleOverlay={this.toggleOverlay}
                addFeature={this.props.addFeature}
                products={this.props.products}
                user={this.props.user}
              />
            </Dialog>
          </div>
        </Navbar.Group>
        <Navbar.Group align={Alignment.RIGHT}>
          <Search
            user={this.props.user}
            products={this.props.products}
            companies={this.props.companies}
            votes={this.props.votes}
            follows={this.props.follows}
            unfilteredFeatureList={this.props.unfilteredFeatureList}
            getInfo={this.props.getInfo}
            searchResults={this.props.searchResults}
          />
        </Navbar.Group>
      </Navbar>
    );
  }
}
