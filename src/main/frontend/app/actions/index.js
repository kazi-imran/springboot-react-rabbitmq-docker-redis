import axios from 'axios';
const client = require('../jsfiles/client');
const follow = require('../jsfiles/follow');

export const FETCH_CUSTOMERS='fetch_customers';

//const ROOT_URL='https://randomuser.me/api/?inc=gender,name,nat';
const ROOT_URL='customers/?size=1';

export function fetchCustomers(pageSize)
{
//const request=axios.get(ROOT_URL);





return{
  type:FETCH_CUSTOMERS,
  payload:request
};

}
