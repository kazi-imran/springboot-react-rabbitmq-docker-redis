import _ from 'lodash';
import {FETCH_CUSTOMERS,FETCH_CUSTOMER_DETAILS} from '../actions/index';

export default function(state={},action)
{
switch (action.type) {
  case FETCH_CUSTOMERS:
      
      return [action.payload,...state];

    break;
    case FETCH_CUSTOMER_DETAILS:
      var str = JSON.stringify(action.payload, null, 2);
      console.log(str);
    
    return [action.payload,...state];

  break;  
  default:
    return state;

}

}
