import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Panel, PageHeader, Table, Button,Glyphicon} from "react-bootstrap";
import Customer from "./customer";


class CustomerList extends React.Component {
  constructor(props) {
    super(props);
    this.handleNavFirst = this.handleNavFirst.bind(this);
		this.handleNavPrev = this.handleNavPrev.bind(this);
		this.handleNavNext = this.handleNavNext.bind(this);
		this.handleNavLast = this.handleNavLast.bind(this);
//		this.handleInput = this.handleInput.bind(this);
  }

  handleNavFirst(e){
	e.preventDefault();
	this.props.onNavigate(this.props.links.first.href);
}

handleNavPrev(e) {
	e.preventDefault();
	this.props.onNavigate(this.props.links.prev.href);
}

handleNavNext(e) {
	e.preventDefault();
	this.props.onNavigate(this.props.links.next.href);
}

handleNavLast(e) {
	e.preventDefault();
	this.props.onNavigate(this.props.links.last.href);
}

  render() {
    var props = this.props;
    console.log("props", props);
    const customers =this.props.customers.map( customer =>
        <Customer
          key={customer._links.self.href}
          customer={customer}
        />
      );
      console.log("customers",customers);
      var navLinks = [];
      console.log(this.props.links);
	if ("first" in this.props.links) {
		navLinks.push(<button key="first" onClick={this.handleNavFirst}>&lt;&lt;</button>);
	}
	if ("prev" in this.props.links) {
		navLinks.push(<button key="prev" onClick={this.handleNavPrev}>&lt;</button>);
	}
	if ("next" in this.props.links) {
		navLinks.push(<button key="next" onClick={this.handleNavNext}>&gt;</button>);
	}
	if ("last" in this.props.links) {
		navLinks.push(<button key="last" onClick={this.handleNavLast}>&gt;&gt;</button>);
	}

  console.log("Navlinks",navLinks);

    return(
      <div>
      <PageHeader>List of Customers</PageHeader>
        <Table striped bordered condensed hover>
          <thead>
            <tr>

              <th>Name</th>
              <th>Email</th>
              <th>Delete</th>

            </tr>
            </thead>
            <tbody>
            {customers}

            </tbody>

        </Table>
        <div>
          {navLinks}
        </div>
        </div>
      );
  }
}
export default CustomerList;
