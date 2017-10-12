import _ from 'lodash';
import {FETCH_CUSTOMERS} from '../actions/index';

export default function(state={},action)
{
switch (action.type) {
  case FETCH_CUSTOMERS:
      console.log("Inside Reducers",action.payload);
      //return _.mapKeys(action.payload.data.results, 'email');
      return [action.payload.data.results, ...state];

    break;
  default:
    return state;

}

}
