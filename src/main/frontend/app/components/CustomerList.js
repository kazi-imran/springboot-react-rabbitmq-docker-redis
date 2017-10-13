import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


 class CustomerList extends React.Component{
  constructor(props) {
  		super(props);
    }

    renderCustomerList()
    {
      const customers= _.map(this.props.customers,customer=>{
        return(
        <li key={customer.email}>{customer.email}</li>
      );
      });
        console.log("customersemail",customers);
      return customers;

    }

render() {
  var props=this.props.customers;
  console.log("props",props);

  return(
    <div>
    {this.renderCustomerList()}
    </div>
  );

}

}
export default CustomerList;
