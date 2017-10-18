import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchCustomerDetails} from '../actions/index';
import {Link} from 'react-router-dom';
import { Panel, PageHeader, Table, Button,Glyphicon} from "react-bootstrap";
import _ from "lodash";

import {Field, reduxForm,formValueSelector } from 'redux-form';
const queryString = require('query-string');

class CustomerDetails extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            isDisabled:props.isDisabled
        }
        
        

    }
    componentDidMount() {
        const {id} = this.props.match.params;
        console.log("Inside componentDidMount");
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
      
      //{ input, label, type, meta: { touched, error } }
     renderField(field) {
         console.log("renderfield props",field)
        return(
        <div  className = "form-group row">
        <label className="col-sm-2 col-form-label">{field.label}</label>
        <div className="col-sm-10">
          <input {...field.input} disabled={field.disabled} className="form-control" placeholder={field.label} type={field.type} />
             
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
        
    
     //   console.log("props",this.props);
       // if(!initialValues && isEmpty(initialValues) && !_.has(initialValues, 'customers'))
    //    if(_.isEmpty(initialValues))
    //     {

    //         return <div>Loading Customer details...</div>
    //     }


           
            return (
              <div className="container">
                <form onSubmit={handleSubmit}>
                
                <PageHeader>Customer Profile <small>Id :{this.props.customerid}</small></PageHeader>                   
                <Field 
                    name="customer.firstName"
                    type="text"
                    component={this.renderField}
                    label="First Name"
                    props={{ disabled: this.state.isDisabled }}
                  //  value={initialValues.firstName}
                 //   validate={[required, maxLength15, minLength2]}
                  //  warn={alphaNumeric}
                  />
                  <Field 
                    name="customer.lastName"
                    type="text"
                    component={this.renderField}
                    label="Last Name"
                    props={{ disabled: this.state.isDisabled }}                
                  />
                  <Field 
                    name="customer.email"
                    type="text"
                    component={this.renderField}     
                    label="Email"
                    props={{ disabled: this.state.isDisabled }}                           
                  />                  
                   
                    
                    <div className="form-group ">
                    <div className="row align-items-start">
                   
                    <label className = "col-form-legend col-sm-2">Sex</label>
                    <div className="col-md-2">
                    <div className="form-check">
                    <label className = "form-check-label">
                    
                    <Field
                      name="customer.gender"
                      component="input"
                      type="radio"
                      value="male"
                      //className="form-check-input"
                      props={{ disabled: this.state.isDisabled }}   
                    />{' '}
                    Male
                    
                      
                    </label>
                    </div>  

                    <div className="form-check">
                      <label className = "form-check-label">
                    <Field
                      name="customer.gender"
                      component="input"
                      type="radio"
                      value="female"
                      className="form-check-input"
                      props={{ disabled: this.state.isDisabled }}   
                    />{' '}
                    Female
                    </label>
                    </div>
                    

                    </div>  
                    <div className="col-md-3">
                     I am here
                     </div>
                     <div className="col-md-3">
                     I am here !!!
                     </div>
                     <div className="col-md-2">
                     Go here !!!
                     </div>
                   </div>  
                   
                   </div>
                </form>
                </div>
            );
        


    }

    


}

function mapStateToProps({ customers}) {
    console.log("mapStateToProps",customers);
    if(Array.isArray(customers))
    {
       return customers[0];
    }
    
    return 
        return customers
    ;
    
  
  }

  CustomerDetails = reduxForm({
    form: 'initializeFromState',// a unique identifier for this form
    enableReinitialize : true
  })(CustomerDetails)


// You have to connect() to any reducers that you wish to connect to yourself
CustomerDetails = connect(
    
    
    state => ({
        
            //Array.isArray(state.customers)?state.customers[0]:state.customers       
            initialValues: state.customers,              
            customerid:!_.isEmpty(state.customers.customer)?state.customers.customer.id:1
        }
         // pull initial values from account reducer
    ),
    { fetchCustomerDetails } // bind account loading action creator
  )(CustomerDetails)

  export default CustomerDetails ;

//export default reduxForm({form: 'CustomerForm'}) (connect(mapStateToProps,{fetchCustomerDetails})(CustomerDetails));