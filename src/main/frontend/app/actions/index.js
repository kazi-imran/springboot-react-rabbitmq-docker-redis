import axios from 'axios';
const client = require('../jsfiles/client');
const follow = require('../jsfiles/follow');

export const FETCH_CUSTOMERS='fetch_customers';

//const ROOT_URL='https://randomuser.me/api/?inc=gender,name,nat';


export function fetchCustomers(pageSize)
{
//  const request=axios.get(ROOT_URL);

  const ROOT_URL='/api';
    const result=follow(client, ROOT_URL, [
      {
        rel: 'customers',
        params: {
          'size': pageSize
        }
      }
    ]).then(customerCollection => {
      var str = JSON.stringify(customerCollection, null, 2)
      console.log("customerCollection",customerCollection);
       return client({
        method: 'GET',
        path: customerCollection.entity._links.profile.href,
        headers: {
          'Accept': 'application/schema+json'
        }
      })
      .then(schema => {
        console.log("schema",schema);
    //    this.schema = schema.entity;
        return  {
            customers: customerCollection.entity._embedded.customers,
            attributes: Object.keys(schema.entity.properties),
            page: customerCollection.entity.page,
            links: customerCollection.entity._links

          }

      });
    });
    // .done(customerCollection => {
    //       console.log("customerCollection",customerCollection);
    //       const request=   {
    //         customers: customerCollection.entity._embedded.customers,
    //        attributes: Object.keys(this.schema.properties),
    //         pageSize: pageSize,
    //         links: customerCollection.entity._links
    //
    //       }
    //       console.log("request",request);
    //       test=request;
    //       return request;
      //    dispatch(getUsers(request));

//          return request;

      //  this.setState({
      //  customers: customerCollection.entity._embedded.employees,
      //    attributes: Object.keys(this.schema.properties),
      //    pageSize: pageSize,
      //    links: customerCollection.entity._links
    //)}
//       });


//console.log("req1",req1);

  console.log("result",result);

return{
  type:FETCH_CUSTOMERS,
  payload:result
};

}
