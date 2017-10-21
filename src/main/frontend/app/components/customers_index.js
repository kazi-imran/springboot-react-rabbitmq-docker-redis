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
      links: {},
      doFetchData:false,
      doReload:props.doReload
      
    }
     this.onNavigate = this.onNavigate.bind(this);
    this.updatePageSize = this.updatePageSize.bind(this);
    this.onDelete = this.onDelete.bind(this);
    console.log("Inside Constructor");    
  
  }

  
  componentDidMount() {
    console.log("Inside CcomponentDidMount",this.state);
    
    this.props.fetchCustomers(this.state.pageSize);
    this.setState({doReload:false});
    
    
  }
  componentDidUpdate()
  {
  console.log("Inside componentDidUpdate");
  //this.props.fetchCustomers(this.state.pageSize);

  }
  componentWillMount()
  {
    console.log("Inside componentWillMount");
    // if(this.state.doReload)
    // {
    //   this.props.fetchCustomers(this.state.pageSize);
    //   this.setState({doReload:false});
    // }
    
  }
  componentWillUpdate()
  {
    console.log("Inside componentWillUpdate");
   // this.props.fetchCustomers(this.state.pageSize);
  }
  componentWillReceiveProps(nextProps)
  {
    
     console.log("Inside componentWillReceiveProps");
    
    // if(this.state.doReload)
    // {
    //   this.props.fetchCustomers(this.state.pageSize);
    //   this.setState({doReload:false});
    // }
    //this.setState({doFetchData:true});
    //  if(nextProps!= this.props)
    //  {
    //   this.componentDidMount(); 
    //  }
    
    
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
  //  this.props.fetchCustomers(this.state.pageSize);
    console.log("Props---:", this.props);
    "I am here"
    if (_.isEmpty(this.props.customers.customers)) {
      return (
        <div>
          <h5>Loading...</h5>
        </div>
      );
    } 
    else if(!Array.isArray(this.props.customers.customers))
    {
      return (
        <div>
          <h5>Loading...</h5>
        </div>
      );
    }    

    else {
     
        console.log("I am not an array");
        return(
        <div>
        <h1 />
        <CustomerList
        customers={this.props.customers.customers}
        attributes={this.props.customers.attributes}
        links={this.props.customers.links}
        page={this.props.customers.page}
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

function mapStateToProps(state) {
  var str = JSON.stringify(state, null, 2);
  console.log("inside customerindex mapStatetoProps",str);
  return {
    customers: state.customers
  };
}

export default connect(mapStateToProps, { fetchCustomers })(CustomerIndex);
