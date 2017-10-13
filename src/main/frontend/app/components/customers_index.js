import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCustomers } from "../actions/index";
import CustomerList from "./customer_list";
const client = require("../jsfiles/client");
const follow = require("../jsfiles/follow");

class CustomerIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [],
      attributes: [],
      pageSize: 2,
      links: {}
    };
     this.onNavigate = this.onNavigate.bind(this);
    this.updatePageSize = this.updatePageSize.bind(this);
this.onDelete = this.onDelete.bind(this);

        // this.onCreate = this.onCreate.bind(this);

  }

  componentDidMount() {
    this.props.fetchCustomers(this.state.pageSize);
  }
  onNavigate(navLink){
    client({method:'GET',path:navLink}).done(customerCollection=>{
      this.setState({
      employees: customerCollection.entity._embedded.employees,
      attributes: this.state.attributes,
      pageSize: this.state.pageSize,
      links: customerCollection.entity._links
    })
  });
}

onDelete(employee)
  {
    client({method: "DELETE", path:employee._links.self.href}).done(response=>{
      this.loadFromServer(this.state.pageSize);
    });

  }

  updatePageSize(pageSize) {
  	if (pageSize !== this.state.pageSize) {
  		this.loadFromServer(pageSize);
  	}
  }
  render() {
    console.log("State---:", this.props);
    if (_.isEmpty(this.props.customers)) {
      return (
        <div>
          <h5>Loading...</h5>
        </div>
      );
    } else {
      // var str = JSON.stringify(this.props.customers[0], null, 2)
      // console.log(str);
      return (
        <div>
          <h1 />

          <CustomerList
            customers={this.props.customers[0].customers}
            attributes={this.props.customers[0].attributes}
            links={this.props.customers[0].links}
            page={this.props.customers[0].page}
            onNavigate={this.onNavigate}
            onDelete={this.onDelete}
				    updatePageSize={this.updatePageSize}
            pageSize={this.props.pageSize}
          />
        </div>
      );
    }
  }
}

function mapStateToProps({ customers }) {
  var str = JSON.stringify(customers, null, 2);
  //  console.log(str);
  return {
    customers: customers
  };
}

export default connect(mapStateToProps, { fetchCustomers })(CustomerIndex);
