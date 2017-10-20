import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Panel, PageHeader, Table, Button, Glyphicon} from "react-bootstrap";
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import MetaInfoDisplay from '../stateless/meta_info_display';
import {fetchAddressDetails} from '../../actions/index';

class AddressForm extends Component {

    constructor(props)
    {
        super(props);
        this.state={
            accountLink:{}
        }

    }

    renderMetaInfo({customerInfo})
    {
      console.log("customerInfo", customerInfo);
      return (<MetaInfoDisplay
        creationTime={customerInfo.creationTime}
        createdBy="admin"
        modifiedBy="admin"
        lastModificationTime={customerInfo.lastModified}/>)
    }

    renderField(field) {
      
        
        return (
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">{field.label}</label>
                <div className="col-sm-10">
                    <input
                        {...field.input}
                        disabled={field.disabled}
                        className="form-control"
                        placeholder={field.label}
                        type={field.type}/> {/* {touched &&
                ((error && <span>{error}</span>) ||
                  (warning && <span>{warning}</span>))} */}
                </div>
            </div>
        );

    }

    componentDidMount() {
        const {accountLink} = this.props;
        this.setState({accountLink : accountLink});
        console.log("AccountLink", this.props);       
       this.props.fetchAddressDetails(accountLink);
       
       
        
    }

    

    render()
    {
        const {initialValues} = this.props;
        const {accountLink} = this.props;        

        console.log("AccountLink", accountLink);
        
        const {handleSubmit, pristine, reset, submitting} = this.props;
        return (
            
            
            <form onSubmit={handleSubmit}>
    
            <Panel collapsible defaultExpanded header="Address Info" bsStyle="primary">
            </Panel>
            </form>
        
            
        )

    }
    
    

}

 function mapStateToProps(state) {
    console.log("mapStateToProps in address form", state);
    return{
        addresses:state
    }   
  
  }

  AddressForm = reduxForm({
    form: 'initializeAddressForm', // a unique identifier for this form
    enableReinitialize: true
  })(AddressForm)

  AddressForm = connect(state => ({
    initialValues: state.addresses,
    addresses:state.addresses
  }), {fetchAddressDetails} // bind account loading action creator
)(AddressForm)  


export default AddressForm;
//export default connect(mapStateToProps, { fetchAddressDetails })(AddressForm);
