import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

import {Link} from 'react-router-dom';

import CustomerIndex from '../components/customers_index';
import CustomerDetails from '../components/customer_details';

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
      <Route path='/customers/' component={AddPropsToRoute(CustomerIndex,{doReload:true})}/>
      <Route path='/customers/:id'  component={AddPropsToRoute(CustomerDetails,{doReload:true})}/>
    </Switch>
  )