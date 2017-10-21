import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Panel, PageHeader, Table, Button, Glyphicon} from "react-bootstrap";
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import MetaInfoDisplay from '../stateless/meta_info_display';
import {fetchAddressDetails} from '../../actions/index';
import Select from 'react-select';



class AddressForm extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            accountLink: {},
            addresses: [],
            isDisabled: true
        }

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

    renderAddressEditForm() {
        console.log("all props", this.state);
        

        return _.map(this.props.addresses, (address, i, j) => {
            const {handleSubmit, pristine, reset, submitting} = this.props;
            var addressSelectoptions = [
                { value: 'BILLING', label: 'BILLING' },
                { value: 'SHIPPING', label: 'SHIPPING' }
              ];
            var j = 0;
            return (
                <div key={i}>
                
                    <PageHeader key={++j}>
                        Address Id : {address.id}
                                  <small><pre> {address.addressType}  ADDRESS</pre></small>
                    </PageHeader>
                    <Panel
                        collapsible
                        defaultExpanded
                        header="Address Info"
                        bsStyle="primary"
                        key={++j}>

                        {this.renderMetaInfo({addresses: address})}
                        <Field
                            key={++j}
                            name={`addresses[${i}].country`}
                            type="text"
                            component={this.renderField}
                            label="Country"
                            props={{
                            isDisabled: this.state.isDisabled
                        }}/>
                        <Field
                            key={++j}
                            name={`addresses[${i}].city`}
                            type="text"
                            component={this.renderField}
                            label="City"
                            props={{
                            isDisabled: this.state.isDisabled
                        }}/>
                        <Field
                            key={++j}
                            name={`addresses[${i}].zipCode`}
                            type="text"
                            component={this.renderField}
                            label="Zip Code"
                            props={{
                            isDisabled: this.state.isDisabled
                        }}/>
                        <Field
                            key={++j}
                            name={`addresses[${i}].street1`}
                            type="text"
                            component={this.renderField}
                            label="Street 1"
                            props={{
                            isDisabled: this.state.isDisabled
                        }}/>
                        <Field
                            key={++j}
                            name={`addresses[${i}].street2`}
                            type="text"
                            component={this.renderField}
                            label="Street 2"
                            props={{
                            isDisabled: this.state.isDisabled
                        }}/>
                        <Field
                            key={++j}
                            name={`addresses[${i}].zipCode`}
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
                            value={address.addressType}
                            options={addressSelectoptions}	
                            disabled={this.state.isDisabled}                          			    
				        	/>                         
                            </div>
                        </div>
                    </Panel>
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

AddressForm = connect(state => ({initialValues: state.addresses, addresses: state.addresses.addresses}), {fetchAddressDetails} // bind account loading action creator
)(AddressForm)

export default AddressForm;
//export default connect(mapStateToProps, { fetchAddressDetails })(AddressForm);