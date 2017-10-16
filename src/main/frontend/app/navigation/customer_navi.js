import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import {Link} from 'react-router-dom';

import CustomerIndex from '../components/customers_index';
import CustomerDetails from '../components/customer_details';

export const CustomersNavi = () => (
    <Switch>
      <Route exact path='/customers/' component={CustomerIndex}/>
      <Route path='/customers/:id' component={CustomerDetails}/>
    </Switch>
  )