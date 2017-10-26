import React, {Component} from 'react';
import {Field, reduxForm,getFormValues} from 'redux-form';
import {Panel, PageHeader, Table, Button, Glyphicon} from "react-bootstrap";
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import MetaInfoDisplay from '../stateless/meta_info_display';
import {fetchAddressDetails,updateAddressInfo} from '../../actions/index';
import Select from 'react-select';
var deepEqual = require('deep-equal')
class AddressForm extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            accountLink: {},
            addresses: [],
            isDisabled: false
        }

    }

    modalInstance()
    {
        return (
            <div className="static-modal">
                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title>Stale Data</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        The data u r trying to update is stale. The latest data will be fetched
                    </Modal.Body>

                    <Modal.Footer>

                        <Button bsStyle="primary" onClick={this.refreshThepage}>Ok</Button>
                    </Modal.Footer>

                </Modal.Dialog>
            </div>
        );
    }

    

    renderField(field) {

        return (
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">{field.label}</label>
                <div className="col-sm-10">
                    <input
                        {...field.input}
                        disabled={field.isDisabled}
                        className="form-control"
                        placeholder={field.label}
                        type={field.type}/> {/* {touched &&
                        ((error && <span>{error}</span>) ||
                          (warning && <span>{warning}</span>))} */}
                </div>
            </div>
        );

    }

    renderMetaInfo({addresses})
    {

        return (<MetaInfoDisplay
            creationTime={addresses.creationTime}
            createdBy="admin"
            modifiedBy="admin"
            lastModificationTime={addresses.lastModified}/>)
    }

    onSubmit(values) {
        console.log(values);
        const numberOfAddressEntities=this.props.addresses.length;
        for(var i=0;i<numberOfAddressEntities;i++)
        {
            if(!deepEqual(values.addresses[i], this.props.addresses[i]))
            {
                this
                .props
                .updateAddressInfo(values.addresses[i],this.props.addresses[i],this.props.addresses[i].headers); 
                break;
            }
        }
       
        
        
    
      }

    renderAddressEditForm() {
        console.log("all props", this.props);

        return _.map(this.props.addresses, (address, i, j) => {
            const {handleSubmit, pristine, rgetFormValues,eset, submitting} = this.props;
            var addressSelectoptions = [
                {
                    value: 'BILLING',
                    label: 'BILLING'
                }, {
                    value: 'SHIPPING',
                    label: 'SHIPPING'
                }
            ];
            var j = 0;
            return (
                <div key={i}>

                    <PageHeader key={++j}>
                        Address Id : {address.entity.id}
                        <small>
                            <pre> {address.entity.addressType}  ADDRESS</pre>
                        </small>
                    </PageHeader>
                    <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                        <Panel
                            collapsible
                            defaultExpanded
                            header="Address Info"
                            bsStyle="primary"
                            key={++j}>

                            {this.renderMetaInfo({addresses: address.entity})}
                            <Field
                                key={++j}
                                name={`addresses[${i}].entity.country`}
                                type="text"
                                component={this.renderField}
                                label="Country"
                                props={{
                                isDisabled: this.state.isDisabled
                            }}/>
                            <Field
                                key={++j}
                                name={`addresses[${i}].entity.city`}
                                type="text"
                                component={this.renderField}
                                label="City"
                                props={{
                                isDisabled: this.state.isDisabled
                            }}/>
                            <Field
                                key={++j}
                                name={`addresses[${i}].entity.zipCode`}
                                type="text"
                                component={this.renderField}
                                label="Zip Code"
                                props={{
                                isDisabled: this.state.isDisabled
                            }}/>
                            <Field
                                key={++j}
                                name={`addresses[${i}].entity.street1`}
                                type="text"
                                component={this.renderField}
                                label="Street 1"
                                props={{
                                isDisabled: this.state.isDisabled
                            }}/>
                            <Field
                                key={++j}
                                name={`addresses[${i}].entity.street2`}
                                type="text"
                                component={this.renderField}
                                label="Street 2"
                                props={{
                                isDisabled: this.state.isDisabled
                            }}/>
                            <Field
                                key={++j}
                                name={`addresses[${i}].entity.zipCode`}
                                type="text"
                                component={this.renderField}
                                label="Zip Code"
                                props={{
                                isDisabled: this.state.isDisabled
                            }}/>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label">AddressType</label>
                                <div className="col-sm-8">
                                    <Select
                                        name="form-field-name"
                                        value={address.entity.addressType}
                                        options={addressSelectoptions}
                                        disabled={this.state.isDisabled}/>
                                </div>
                            </div>
                            <div className="col-md-4"></div>

                            <div className="col-md-4"></div>
                            <div className="col-md-4 text-center">
                                <figure>
                                    <button
                                        type="submit"
                                        className="btn btn-primary text-right"
                                        disabled={submitting}>Save</button>
                                </figure>
                            </div>

                        </Panel>
                    </form >
                </div>

            )

        });

    }

    componentDidMount() {
        const {accountLink} = this.props;
        this.setState({accountLink: accountLink});
        console.log("AccountLink", this.props);
        this
            .props
            .fetchAddressDetails(accountLink);

    }

    render()
    {
        const {initialValues} = this.props;
        const {accountLink} = this.props;
        var str = JSON.stringify(initialValues, null, 2);
        console.log("initialValues", str);
        if (!this.props.addresses) {
            return (
                <div>
                    Loading..</div >
            )
        } else {
            return (
                <div>
                    {this.renderAddressEditForm()}
                </div>

            )

        }
    }
}

function mapStateToProps(state) {
    console.log("mapStateToProps in address form", state);
    return {addresses: state}

}

AddressForm = reduxForm({
    form: 'initializeAddressForm', // a unique identifier for this form
    enableReinitialize: true
})(AddressForm)

AddressForm = connect(state =>
     ({initialValues: state.addresses, 
        addresses: state.addresses.addresses,
        values: getFormValues('initializeAddressForm')(state),
         statusCode: state.addresses.statusCode,
          headers: state.addresses.headers}),
 {fetchAddressDetails,updateAddressInfo} // bind account loading action creator
)(AddressForm)

export default AddressForm;
//export default connect(mapStateToProps, { fetchAddressDetails })(AddressForm);