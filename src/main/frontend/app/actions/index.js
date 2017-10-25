import axios from 'axios';
const client = require('../jsfiles/client');
const follow = require('../jsfiles/follow');

export const FETCH_CUSTOMERS = 'fetch_customers';
export const FETCH_CUSTOMER_DETAILS = 'fetch_customer_details';
export const FETCH_ADDRESS_DETAILS = 'fetch_address_details';
export const FETCH_CUSTOMER_PAGE = 'fetch__customer_page';
export const UPDATE_CUSTOMER_BASIC_INFO = 'update_customer_basic_Info';



export function loadRandomUsers(numberOfUsers)
{
 var url="http://localhost:8080/customers/fetchrandomusers?numberOfUsers="+numberOfUsers;

  const request = client({
    method: 'GET',
    path: url,
    headers: {
      'Accept': 'application/hal+json'

    }
  }).then(() => {
    console.log("Loading Random Users");
   

  });
  return {type: "", payload: request};
}

export function deleteAUser(id)
{
 
const deleteURL="http://localhost:8080/customers/delete/"+id
  const request = client({
    method: 'DELETE',
    path: deleteURL,
    headers: {
      'Accept': 'application/hal+json'

    }
  }).then(() => {
    console.log("Deleted A Customer");
   

  });
  return {type: "", payload: request};
}


export function fetchCustomers(pageSize,page) {


  const ROOT_URL = '/api';
  const result = follow(client, ROOT_URL, [
    {
      rel: 'customers',
      params: {
        size: pageSize,
        page:page
      }
    }
  ]).then(customerCollection => {
    var str = JSON.stringify(customerCollection, null, 2)
    console.log("customerCollection", customerCollection);
    return client({
      method: 'GET',
      path: customerCollection.entity._links.profile.href,
      headers: {
        'Accept': 'application/schema+json'
      }
    }).then(schema => {
      console.log("schema", schema);
      //    this.schema = schema.entity;
      return {
        customers: customerCollection.entity._embedded.customers,
        attributes: Object.keys(schema.entity.properties),
        page: customerCollection.entity.page,
        links: customerCollection.entity._links

      }

    });
  }); 

  console.log("result", result);

  return {type: FETCH_CUSTOMERS, payload: result};

}

export function fetchCustomerDetails(id) {

  const ROOT_URL = `http://localhost:8080/api/customers/${id}`;
  //const request=axios.get(selfLink);

  const request = client({
    method: 'GET',
    path: ROOT_URL,
    headers: {
      'Accept': 'application/hal+json'

    }
  }).then(customerDetails => {
    console.log("client----", customerDetails);
    return {customer: customerDetails.entity, links: customerDetails.entity._links,
            headers:customerDetails.headers};

  });

  console.log("fetchCustomerDetails result", request);
  return {type: FETCH_CUSTOMER_DETAILS, payload: request};
}

export function fetchAddressDetails(acountLink) {

  const ROOT_URL = acountLink;
  //const request=axios.get(selfLink);

  const request = client({
    method: 'GET',
    path: ROOT_URL,
    headers: {
      'Accept': 'application/hal+json'

    }
  }).then(accountDetails => {
    var str = JSON.stringify(accountDetails, null, 2)
    console.log("accountDetails", str);
    return client({
      method: 'GET',
      path: accountDetails.entity._links.addresses.href,
      headers: {
        'Accept': 'application/hal+json'
      }
    })
  }).then(addressArrays => {
    //var str = JSON.stringify(addressArrays, null, 2)
    console.log("addressArrays", addressArrays.entity._embedded.addresses);
    return {addresses: addressArrays.entity._embedded.addresses}
  });

  console.log("fetchAddressDetails result", request);
  return {type: FETCH_ADDRESS_DETAILS, payload: request};
}

export function fetchCustomerPage(navLink) {
  
   
    //const request=axios.get(selfLink);
    // client({method: 'GET', path: navLink}).done(customerCollection => {
    //   this.setState({employees: customerCollection.entity._embedded.employees, attributes: this.state.attributes, pageSize: this.state.pageSize, links: customerCollection.entity._links})
  
    const request = client({
      method: 'GET',
      path: navLink,
      headers: {
        'Accept': 'application/hal+json'
  
      }
    }).then(customerCollection => {
      console.log("FETCHING CUSTOMER PAGE", customerCollection);
      return {
        
        customers: customerCollection.entity._embedded.customers,        
        page: customerCollection.entity.page,
        links: customerCollection.entity._links
        };
  
    });
  
    console.log("fetchCustomerDetails result", request);
    return {type: FETCH_CUSTOMER_PAGE, payload: request};
  }


  export function updateCustomerBasicInfo(updatedCustomer,customer,headers)
  {

     var str = JSON.stringify(customer, null, 2);
     console.log("updateCustomerBasicInfo",str);

    const request = client({
      method: 'PUT',
      path: customer._links.self.href,
      entity:updatedCustomer,
      headers: {
        'Content-Type': 'application/json',
        'If-Match': headers.Etag
  
      }
    }).then(response => {
        console.log("updateCustomerBasicInfo", response);
        return {customer: response.entity, links: response.entity.self._links,
          statusCode:response.status.code};
      
  
    });

    console.log("updateCustomerBasicInfo", request);
    return {type: UPDATE_CUSTOMER_BASIC_INFO, payload: request};
  }



  // export function fetchCustomers(pageSize,page) {
  //   const ROOT_URL = '/api';
  //   follow(client, ROOT_URL, [
  //     {rel: 'customers', 
  //     params: {size: pageSize, page:page}}]
  //   ).then(customerCollection => {
  //     return client({
  //       method: 'GET',
  //       path: customerCollection.entity._links.profile.href,
  //       headers: {'Accept': 'application/schema+json'}
  //     }).then(schema => {
  //       this.schema = schema.entity;
  //       this.links = customerCollection.entity._links;
  //       return customerCollection;
  //     });
  //   }).then(customerCollection => {
  //     return customerCollection.entity._embedded.customers.map(customer =>
  //         client({
  //           method: 'GET',
  //           path: customer._links.self.href
  //         })
  //     );
  //   }).then(customerePromises => {
  //     return when.all(customerePromises);
  //   }).done(customers => {
  //     this.setState({
  //       customers: customers,
  //       attributes: Object.keys(this.schema.properties),
  //       pageSize: pageSize,
  //       links: this.links
  //     });
  //   });
  // }