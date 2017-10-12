import axios from 'axios';


export const FETCH_CUSTOMERS='fetch_customers';

//const ROOT_URL='https://randomuser.me/api/?inc=gender,name,nat';
const ROOT_URL='/customer';

export function fetchCustomers()
{
const request=axios.get(ROOT_URL);


return{
  type:FETCH_CUSTOMERS,
  payload:request
};

}
