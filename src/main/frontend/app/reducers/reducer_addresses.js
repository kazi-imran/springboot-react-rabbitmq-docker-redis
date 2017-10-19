import _ from 'lodash';
import {FETCH_ADDRESS_DETAILS} from '../actions/index';

export default function (state = {}, action) {
  switch (action.type) {
    
    case FETCH_ADDRESS_DETAILS:
      var str = JSON.stringify(action.payload, null, 2);
      console.log("FETCH_ADDRESS_DETAILS", str);

      return action.payload;

      break;
    default:
      return state;

  }

}
