import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCustomers } from "../actions/index";
const client = require('../jsfiles/client');
const follow = require('../jsfiles/follow');

class CustomerIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [],
      attributes: [],
      pageSize: 2,
      links: {}
    };
    // this.onNavigate = this.onNavigate.bind(this);
    // this.onCreate = this.onCreate.bind(this);
    // this.updatePageSize = this.updatePageSize.bind(this);
    // this.onDelete = this.onDelete.bind(this);
    // this.onNavigate = this.onNavigate.bind(this);
  }

  componentDidMount() {
//    this.props.fetchCustomers(this.state.pageSize);
//
const ROOT_URL='customers/?size=1';
      const request=follow(client, ROOT_URL, [
      {
        rel: 'customers',
        params: {
          'size': this.state.pageSize
        }
      }
    ]).then(customerCollection => {
      console.log("customerCollection",customerCollection);
       return client({
        method: 'GET',
        path: customerCollection.entity._links.profile.href,
        headers: {
          'Accept': 'application/schema+json'
        }
      }).then(schema => {
        console.log("schema",schema);
        this.schema = schema.entity;
        console.log(schema);
        return customerCollection;
      });
    }).done(customerCollection => {
          console.log("schema",customerCollection);
       this.setState({
       employees: customerCollection.entity._embedded.employees,
         attributes: Object.keys(this.schema.properties),
       pageSize: pageSize,
         links: customerCollection.entity._links
       });
     });
}

  render() {
    console.log("Customers:", this.props.customers);
    return <h1>List of Customers</h1>;
  }
}

function mapStateToProps(state) {
  console.log("state", state);
  return {
    customers: state.customers
  };
}

export default connect(mapStateToProps, { fetchCustomers })(CustomerIndex);
