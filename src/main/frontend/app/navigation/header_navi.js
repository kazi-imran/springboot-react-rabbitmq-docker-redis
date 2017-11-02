import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import {Link} from 'react-router-dom';

export const Header = () => (
    <header>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/customers' replace={true} >Customers</Link></li>
        
        </ul>
      </nav>
    </header>
  )