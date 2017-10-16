import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchCustomerDetails} from '../actions/index';
import {Link} from 'react-router-dom';
import _ from "lodash";

import {Field, reduxForm,formValueSelector } from 'redux-form';
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

    warn (values ) {
        const warnings = {}
        if (values.age < 19) {
          warnings.age = 'Hmm, you seem a bit young...'
        }
        return warnings
      }
      
     renderField({
        field
      }) {
        return(
        <div  className = "form-group">
        <label>{field.label}</label>
        <div>
          <input {...field.input}  className="form-control" placeholder={field.label} type={type} />
          {/* {touched &&
            ((error && <span>{error}</span>) ||
              (warning && <span>{warning}</span>))} */}
        </div>
      </div>
        );
        
    }

    render ()
    {
        const {initialValues}=this.props;
        const { handleSubmit, pristine, reset, submitting } = this.props;
         var props = JSON.stringify(initialValues, null, 2);
    
        console.log("props",this.props);
       // if(!initialValues && isEmpty(initialValues) && !_.has(initialValues, 'customers'))
       if(_.isEmpty(initialValues))
        {

            return <div>Loading Customer details...</div>
        }


           
            return (
                <form onSubmit={handleSubmit}>
                <div >
                <label>First Name</label> 
                <Field 
                    name="customers.firstName"
                    type="text"
                    component="input"
                    label="FirstName"
                  //  value={initialValues.firstName}
                 //   validate={[required, maxLength15, minLength2]}
                  //  warn={alphaNumeric}
                  />
                    </div>
                
                  </form>
            );
        


    }

    


}

function mapStateToProps({ customers}) {
    if(Array.isArray(customers))
    {
        initialValue=customers[0];
    }
    
    return {
        initialValue:customers
    };
    
  
  }

  CustomerDetails = reduxForm({
    form: 'initializeFromState',// a unique identifier for this form
    enableReinitialize : true
  })(CustomerDetails)


// You have to connect() to any reducers that you wish to connect to yourself
CustomerDetails = connect(
    
    state => ({
        
            initialValues: Array.isArray(state.customers)?state.customers[0]:state.customers
        

        }
         // pull initial values from account reducer
    ),
    { fetchCustomerDetails } // bind account loading action creator
  )(CustomerDetails)

  export default CustomerDetails ;

//export default reduxForm({form: 'CustomerForm'}) (connect(mapStateToProps,{fetchCustomerDetails})(CustomerDetails));