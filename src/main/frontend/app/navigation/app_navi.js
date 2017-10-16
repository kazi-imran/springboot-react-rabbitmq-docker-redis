import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import {Link} from 'react-router-dom';

import {Header} from './header_navi';
import {Main} from './main_navi';




 

  export const App = () => (
    <div>
      <Header />
      <Main />
    </div>
  )

  