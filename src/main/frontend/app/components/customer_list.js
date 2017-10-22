import _ from "lodash";
import React, {Component} from "react";
import {connect} from "react-redux";
import {
  Panel,
  PageHeader,
  Table,
  Glyphicon,
  Grid,
  Row,
  Col,
  Button,
  Badge,
  Label,
  Form,
  FormGroup,
  ControlLabel
} from "react-bootstrap";
import Customer from "./customer";
import {Link} from 'react-router-dom';
import Select from 'react-select';

class CustomerList extends React.Component {
  constructor(props) {
    super(props);
    this.handleNavFirst = this
      .handleNavFirst
      .bind(this);
    this.handleNavPrev = this
      .handleNavPrev
      .bind(this);
    this.handleNavNext = this
      .handleNavNext
      .bind(this);
    this.handleNavLast = this
      .handleNavLast
      .bind(this);
      this.onChange = this
      .onChange
      .bind(this);  
    console.log("props in CustomerList ", this.props);
    //		this.handleInput = this.handleInput.bind(this);
  }

  handleNavFirst(e) {
    e.preventDefault();
    this
      .props
      .onNavigate(this.props.links.first.href);
  }

  handleNavPrev(e) {
    e.preventDefault();
    this
      .props
      .onNavigate(this.props.links.prev.href);
  }

  handleNavNext(e) {
    e.preventDefault();
    this
      .props
      .onNavigate(this.props.links.next.href);
  }

  handleNavLast(e) {
    e.preventDefault();
    this
      .props
      .onNavigate(this.props.links.last.href);
  }

  onChange(value) {
		this.props.updatePageSize( value );
		console.log('Numeric Select value changed to', value);
	}

  render() {
    var props = this.props;
    console.log("props in customerlist", props);
    const customers = this
      .props
      .customers
      .map(customer => <Customer key={customer.id} customer={customer} onDelete={this.props.onDelete}/>);
    console.log("customers", customers);
    var navLinks = [];
    console.log(this.props.links);
    if ("first" in this.props.links) {
      navLinks.push(
        <button key="first" onClick={this.handleNavFirst}>&lt;&lt;</button>
      );

    }
    if ("prev" in this.props.links) {
      navLinks.push(

        <button key="prev" onClick={this.handleNavPrev}>&lt;</button>

      );
    }
    if ("next" in this.props.links) {
      navLinks.push(
        <button key="next" onClick={this.handleNavNext}>&gt;</button>
      );
    }
    if ("last" in this.props.links) {
      navLinks.push(
        <button key="last" onClick={this.handleNavLast}>&gt;&gt;</button>
      );
    }

    console.log("Navlinks", navLinks);
    var numberOfEntriesOptions = [
      {
        value: 10,
        label: '10'
      }, {
        value: 20,
        label: '20'
      }, {
        value: 30,
        label: '30'
      }, {
        value: 40,
        label: '40'
      }, {
        value: 50,
        label: '50'
      }
    ];

    return (
      <div className="container">
        <PageHeader>List of Customers
          <pre>Total Number of Customers :<Badge>{this.props.page.totalElements}</Badge></pre>
        </PageHeader>

        <Grid>
          <Row className="show-grid">

            <Col xs={4} md={4}>
            <Form inline>
            <FormGroup controlId="formInlineName">
              
                <ControlLabel>Number Of Entries:</ControlLabel>
                <ControlLabel> 
              <div className="col-md-10">
                <Select name="form-field-name" value={this.props.pageSize} simpleValue options={numberOfEntriesOptions} onChange={this.onChange}/>
              </div>
              </ControlLabel>
              </FormGroup>
              </Form >
              
            </Col>

            <Col xs={4} md={4}>
              <h4>
                <Label>Go to Page:</Label>
              </h4>
            </Col>
            <Col xs={4} md={4}>
              <h4>
                <Label>Sort By:</Label>
              </h4>
            </Col>

          </Row>
        </Grid>

        <Table striped bordered condensed hover>
          <thead>
            <tr>

              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Delete</th>
              <th>Thumbnail</th>

            </tr>
          </thead>
          <tbody>
            {customers}

          </tbody>

        </Table>
        <div>
          <p className="text-center">
            {navLinks}
          </p>
        </div>
      </div>
    );
  }
}
export default CustomerList;
