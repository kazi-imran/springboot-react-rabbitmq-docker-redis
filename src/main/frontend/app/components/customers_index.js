import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCustomers } from "../actions/index";
import CustomerList from "./CustomerList";
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
    this.props.fetchCustomers(this.state.pageSize);
}

  render() {
    console.log("State---:", this.props);
    if(_.isEmpty(this.props.customers))
    {
      return(
      <div>
      <h5>Loading...</h5>
      </div>
    );
    }
    else{
      // var str = JSON.stringify(this.props.customers[0], null, 2)
      // console.log(str);
    return (

      <div>

      <h1>List of Customers</h1>

      <CustomerList customers={this.props.customers[0].customers}/>



      </div>
        );
      }


  }
}

function mapStateToProps({customers}) {
  var str = JSON.stringify(customers, null, 2)
  console.log(str);
  return {
    customers: customers
  };
}

export default connect(mapStateToProps, { fetchCustomers })(CustomerIndex);
