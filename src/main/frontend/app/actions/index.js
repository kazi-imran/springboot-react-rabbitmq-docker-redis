import axios from 'axios';


export const FETCH_USERS='fetch_users';

//const ROOT_URL='https://randomuser.me/api/?inc=gender,name,nat';
const ROOT_URL='https://randomuser.me/api/';

export function fetchUsers()
{
const request=axios.get(ROOT_URL);


return{
  type:FETCH_USERS,
  payload:request
};

}
