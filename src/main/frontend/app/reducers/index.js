import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import CustomersReducer from './reducer_customers';
import AddressesReducer from './reducer_addresses';

const rootReducer = combineReducers({

  customers:CustomersReducer,
  form:formReducer,
  addresses:AddressesReducer

});

export default rootReducer;
