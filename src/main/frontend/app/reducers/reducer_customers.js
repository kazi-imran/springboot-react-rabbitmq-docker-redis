import _ from 'lodash';
import {
  FETCH_CUSTOMERS,
  FETCH_CUSTOMER_DETAILS,
  FETCH_ADDRESS_DETAILS,
  FETCH_CUSTOMER_PAGE,
  UPDATE_CUSTOMER_BASIC_INFO,
  LOAD_RANDOM_USERS
} from '../actions/index';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_CUSTOMERS:
      var str = JSON.stringify(action.payload, null, 2);
      console.log("FETCH_CUSTOMERS", action.payload);
      //return [action.payload];
      return (action.payload);

      break;
    case FETCH_CUSTOMER_DETAILS:
      // var str = JSON.stringify(action.payload, null, 2);
      // console.log("FETCH_CUSTOMER_DETAILS", action.payload);

      return action.payload;

      break;
    case FETCH_CUSTOMER_PAGE:
      // var str = JSON.stringify(action.payload, null, 2);
      // console.log("FETCH_CUSTOMER_DETAILS", action.payload);
      console.log("FETCH_CUSTOMER_PAGE", action.payload);

      return action.payload;

      break;
    case UPDATE_CUSTOMER_BASIC_INFO:
      var str = JSON.stringify(action.payload, null, 2);
      console.log("UPDATE_CUSTOMER_BASIC_INFO", action.payload);

      return action.payload;
      break

    case LOAD_RANDOM_USERS:
      var str = JSON.stringify(action.payload, null, 2);
      console.log("LOAD_RANDOM_USERS", action.payload);

      return action.payload;
      break

    default:
      return state;

  }

}
