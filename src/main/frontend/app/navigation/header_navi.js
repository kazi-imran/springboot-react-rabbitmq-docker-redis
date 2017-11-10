import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import {Link} from 'react-router-dom';

export const Header = () => (
    <header>
      <nav className="navbar  navbar-inverse">
      <div className="container-fluid">
        <ul className="nav navbar-nav">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/customers' replace={true} >Customers</Link></li>
        
        </ul>
      
      </div>
      </nav>
    </header>
  )