import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchCustomerDetails} from '../actions/index';
import {Link} from 'react-router-dom';
const queryString = require('query-string');

class CustomerDetails extends Component{
    constructor(props)
    {
        super(props);
        

    }
    componentDidMount() {
        const {id} = this.props.match.params;
        console.log(this.props);
        this.props.fetchCustomerDetails(parseInt(id));  
    

    }

    render ()
    {
        const {customerDetails}=this.props;
        if(!customerDetails)
        {

            return <div>Loading Customer details...</div>
        }

        return(
            <h1>hi  </h1>
        );

    }

    


}

function mapStateToProps({ customers}) {
    var str = JSON.stringify(customers, null, 2);
    
     console.log("customerDetails",str);
    return {
        customerDetails:customers
    };
    //  return {posts};
  
  }


export default connect(mapStateToProps,{fetchCustomerDetails})(CustomerDetails);