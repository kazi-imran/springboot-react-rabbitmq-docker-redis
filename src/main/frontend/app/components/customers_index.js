import _ from "lodash";
import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {fetchCustomers,fetchCustomerPage} from "../actions/index";
import {Grid, Row, Col, Button} from "react-bootstrap";
import CustomerList from "./customer_list";
const client = require("../jsfiles/client");
const follow = require("../jsfiles/follow");

class CustomerIndex extends Component {

  constructor(props) {
    super(props);
    this.state = {
      customers: [],
      attributes: [],
      pageSize: 10,
      page:0,
      links: {},
      doFetchData: false,
      doReload: props.doReload,
      isLoading: false

    }
    this.onNavigate = this
      .onNavigate
      .bind(this);
    this.updatePageSize = this
      .updatePageSize
      .bind(this);
    this.onDelete = this
      .onDelete
      .bind(this);
    this.loadCustomers = this
      .loadCustomers
      .bind(this);
    console.log("Inside Constructor");

  }
  // getInitialState() {   return {     isLoading: false   }; }

  componentDidMount() {
    console.log("Inside CcomponentDidMount", this.state);

    this
      .props
      .fetchCustomers(this.state.pageSize,this.state.page);
    this.setState({doReload: false});

  }
  componentDidUpdate()
  {
    console.log("Inside componentDidUpdate");
    //this.props.fetchCustomers(this.state.pageSize);

  }
  componentWillMount()
  {
    console.log("Inside componentWillMount");
    // if(this.state.doReload) {   this.props.fetchCustomers(this.state.pageSize);
    // this.setState({doReload:false}); }

  }
  componentWillUpdate()
  {
    console.log("Inside componentWillUpdate");
    // this.props.fetchCustomers(this.state.pageSize);
  }
  componentWillReceiveProps(nextProps)
  {

    console.log("Inside componentWillReceiveProps");

  }

  onNavigate(navLink) {
    this.props.fetchCustomerPage(navLink);
  }

  onDelete(employee)
  {
    client({method: "DELETE", path: employee._links.self.href}).done(response => {
      this.loadFromServer(this.state.pageSize);
    });

  }

  updatePageSize(pageSize) {
    if (pageSize !== this.state.pageSize) {
      this
      .props
      .fetchCustomers(parseInt(pageSize),this.state.page);
      this.setState({pageSize: pageSize});
    }
  }
  loadCustomers() {
    this
      .props
      .fetchCustomers(this.state.pageSize,this.state.page);
    this.setState({isLoading: true});
  }

  render() {
    //  this.props.fetchCustomers(this.state.pageSize);
    console.log("Props---:", this.props);

    if (_.isEmpty(this.props.customers.customers) || !Array.isArray(this.props.customers.customers)) {
      return (
        <Grid>
          <Row className="show-grid">
            <Col xs={6} md={4}>
              <Button
                bsStyle="primary"
                disabled={this.props.isLoading}
                onClick={!this.props.isLoading
                ? this.loadCustomers
                : null}>
                {this.props.isLoading
                  ? 'Loading...'
                  : 'Load Customers'}
              </Button>
            </Col>
            <Col xs={6} md={4}>Add Customers</Col>
          </Row>
        </Grid>
      ) // else if(!Array.isArray(this.props.customers.customers)) {   return (
      // <div>       <h5>Loading...</h5>     </div>   ); };
    } else {
      // this.setState({isLoading: false});
      console.log("I am not an array");
      return (
        <div>
          <Grid>
            <Row className="show-grid">
              <Col xs={6} md={4}>
                <Button
                  bsStyle="primary"
                  disabled={this.props.isLoading}
                  onClick={!this.props.isLoading
                  ? this.loadCustomers
                  : null}>
                  {this.props.isLoading
                    ? 'Loading...'
                    : 'Load Customers'}
                </Button>
              </Col>
              <Col xs={6} md={4}>Add Customers</Col>
            </Row>
          </Grid>
          <h1/>
          <CustomerList
            customers={this.props.customers.customers}
            attributes={this.props.customers.attributes}
            links={this.props.customers.links}
            page={this.props.customers.page}
            onNavigate={this.onNavigate}
            onDelete={this.onDelete}
            updatePageSize={this.updatePageSize}
            pageSize={this.state.pageSize}/>
        </div>
      );

    }

  }

}

function mapStateToProps(state) {
  // var str = JSON.stringify(state, null, 2);
   console.log("inside customerindex mapStatetoProps", state.customers);
  if (!_.isEmpty(state.customers) && state) {}
  return {customers: state.customers, isLoading: false};
}

export default connect(mapStateToProps, {fetchCustomers,fetchCustomerPage})(CustomerIndex);
