import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

import {Link} from 'react-router-dom';

import CustomerIndex from '../components/customers_index';
import CustomerDetails from '../components/customer_details';
import NewCustomerForm from '../components/forms/new_customer_form';

const AddPropsToRoute = (WrappedComponent, passedProps)=>{
  return (
      class Route extends Component{
          render(){
              let props = Object.assign({}, this.props, passedProps)
              return  <WrappedComponent {...props} />
          }
      }
  )
}


export const CustomersNavi = () => (

    <Switch>
      
      <Route exact path='/customers/' component={AddPropsToRoute(CustomerIndex,{doReload:true})}/> 
      <Route exact path='/customers/new'  component={AddPropsToRoute(NewCustomerForm,{})}/>    
      
      <Route path='/customers/:id'  component={AddPropsToRoute(CustomerDetails,{isDisabled:true})}/>  
      
      
      
      
    </Switch>
  )