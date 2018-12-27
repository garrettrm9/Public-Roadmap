import React, { Component } from "react";
import CompanyCard from "../companies/companyCard";

export default class CompanyList extends Component {
  constructor(props) {
    super(props);
    this.renderCompanies = this.renderCompanies.bind(this);
  }

  renderCompanies(company, index) {
    return <CompanyCard key={index} company={company} user={this.props.user} />;
  }

  render() {
    const companies = this.props.companies.map(this.renderCompanies);
    return (
      <div>
        <h1>Company list</h1>
        {companies}
      </div>
    );
  }
}
