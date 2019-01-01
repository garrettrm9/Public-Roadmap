import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class CompanyCard extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const company = this.props.company;
    return (
      <div>
        <ul>
          <Link to={`/company/${company.name}`}>
            <h3>
              <li>{company.name}</li>
            </h3>
          </Link>
        </ul>
      </div>
    );
  }
}
