import _ from 'lodash';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchCustomers} from '../actions/index'

class CustomerIndex extends Component{

  componentDidMount(){
      this.props.fetchCustomers();

    }

    render()
     {
       console.log("Customers:",this.props.customers);
       return(
         <h1>List of Customers</h1>
       )
     }
}


function mapStateToProps(state)
{
    console.log("state",state);
return{
  customers:state.customers
};

}

export default connect(mapStateToProps,{fetchCustomers}) (CustomerIndex);
