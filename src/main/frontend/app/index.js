import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter,HashRouter,Route,Switch} from 'react-router-dom';
import promise from 'redux-promise';
import reducers from './reducers';
import CustomerIndex from './components/customers_index';
import {Link} from 'react-router-dom';
// import PostsNew from './components/posts_new'
 import CustomerDetails from './components/customer_details';
 import   {App} from './navigation/app_navi';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);



ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  
  <div>  
    
     <HashRouter>
    <App />
     </HashRouter>
    {/* {<Route exact path="/customers/" component={CustomerIndex}/>
    <Route path="/customers/:id" component={CustomerDetails}/>
    <Route exact path="/" component={Home}/>} */} 

    </div>
  
  </Provider>
  , document.querySelector('.container'));


 