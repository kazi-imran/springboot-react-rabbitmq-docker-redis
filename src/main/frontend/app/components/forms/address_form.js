import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Panel, PageHeader, Table, Button, Glyphicon} from "react-bootstrap";
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import MetaInfoDisplay from './ststateless/meta_info_display';

class AddressForm extends Component {

    constructor(props)
    {
        super(props);
        this.state={
            addresses=[]
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
        console.log("renderfield props", field)
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

    render()
    {
        return (
            
            <div className="container">
            <form onSubmit={handleSubmit}>
    
            <Panel collapsible defaultExpanded header="Address Info" bsStyle="primary">
            </Panel>
            </form>
        </div>
            
        )

    }
    
    

}

export default AddressForm;