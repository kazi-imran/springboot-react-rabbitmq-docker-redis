import _ from 'lodash';
import {FETCH_CUSTOMERS, FETCH_CUSTOMER_DETAILS, FETCH_ADDRESS_DETAILS} from '../actions/index';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_CUSTOMERS:
      var str = JSON.stringify(action.payload, null, 2);
      console.log("FETCH_CUSTOMERS", str);
      //return [action.payload];
      return action.payload;

      break;
    case FETCH_CUSTOMER_DETAILS:
      var str = JSON.stringify(action.payload, null, 2);
      console.log("FETCH_CUSTOMER_DETAILS", str);

      return action.payload;

      break;
   

      break;
    default:
      return state;

  }

}
