import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Home from '../components/home';
import {CustomersNavi} from './customer_navi';


export const Main = () => (
    <main>
      <Switch>
      <Route path='/customers/' component={CustomersNavi}/>
      <Route exact path='/' component={Home}/>
       
        
      </Switch>
    </main>
  )