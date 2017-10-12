import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import CustomersReducer from './reducer_users';

const rootReducer = combineReducers({

  customers:CustomersReducer,
  form:formReducer

});

export default rootReducer;
