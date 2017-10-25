import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchCustomerDetails, updateCustomerBasicInfo} from '../actions/index';
import {Panel, PageHeader, Table, Button, Glyphicon} from "react-bootstrap";
import MetaInfoDisplay from './stateless/meta_info_display';
class CustomerForm extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      //isDisabled: props.isDisabled,
      isDisabled: false,
      basicPanelOpen: true,
      statusCode: 200

    }
    this.onSubmit = this
      .onSubmit
      .bind(this);

  }

  warn(values) {
    const warnings = {}
    if (values.age < 19) {
      warnings.age = 'Hmm, you seem a bit young...'
    }
    return warnings
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

  renderImage(imageSource, imageText)
  {
    return (
      <div className="text-center">
        <figure>
          <img src={imageSource} alt={imageText} className="img-thumbnail"></img>
          <figcaption className="text-center">
            {imageText}
          </figcaption>
        </figure>
      </div>
    );

  }

  onSubmit({customer}) {

    this
      .props
      .updateCustomerBasicInfo(customer, this.props.customerInfo, this.props.headers);

  }
  renderField({
    input,
    label,
    type,
    meta: {
      touched,
      error,
      warning
    }
  }) {
    return (
      <div>
        <label>{label}</label>
        <div>
          <input {...input} placeholder={label} type={type}/> {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
      </div>
    );

  }

  componentDidMount() {
    const {id} = this.props.match.params;
    console.log("Inside componentDidMount");
    console.log(this.props);
    this
      .props
      .fetchCustomerDetails(parseInt(id));

  }

  render()
  {
    const {handleSubmit, pristine, reset, submitting} = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>

        {/* <Button onClick={ ()=> this.setState({ basicPanelOpen: !this.state.basicPanelOpen })}>
           <b> Basic Info</b>
          </Button> */}

        <Panel collapsible defaultExpanded header="Basic Info" bsStyle="primary">

          {this.renderMetaInfo({customerInfo: this.props.customerInfo})}

          <Field
            name="customer.firstName"
            type="text"
            component={this.renderField}
            label="First Name"
            props={{
            disabled: this.state.isDisabled
          }}/>
          <Field
            name="customer.lastName"
            type="text"
            component={this.renderField}
            label="Last Name"
            props={{
            disabled: this.state.isDisabled
          }}/>
          <Field
            name="customer.email"
            type="text"
            component={this.renderField}
            label="Email"
            props={{
            disabled: this.state.isDisabled
          }}/>

          <div className="form-group ">
            <div className="row align-items-start">

              <label className="col-form-legend col-sm-2">Sex</label>
              <div className="col-md-2">
                <div className="form-check">
                  <label className="form-check-label">

                    <Field name="customer.gender" component="input" type="radio" value="male" //className="form-check-input"
                      props={{
                      disabled: this.state.isDisabled
                    }}/>{' '}
                    Male

                  </label>
                </div>

                <div className="form-check">
                  <label className="form-check-label">
                    <Field
                      name="customer.gender"
                      component="input"
                      type="radio"
                      value="female"
                      className="form-check-input"
                      props={{
                      disabled: this.state.isDisabled
                    }}/>{' '}
                    Female
                  </label>
                </div>

              </div>
              <div className="col-md-3">
                <div className="text-center">
                  <figure>
                    <img src={this.props.imageLarge} alt="Image Large" className="img-thumbnail"></img>
                    <figcaption className="text-center">
                      Image Large
                    </figcaption>
                  </figure>
                </div>
              </div>
              <div className="col-md-3">
                <div className="text-center">
                  <figure>
                    <img src={this.props.imageMedium} alt="Image medium" className="img-thumbnail"></img>
                    <figcaption className="text-center">
                      Image medium
                    </figcaption>
                  </figure>
                </div>
              </div>
              <div className="col-md-2">
                <div className="text-center">
                  <figure>
                    <img src={this.props.thumbnail} alt="Image medium" className="img-thumbnail"></img>
                    <figcaption className="text-center"></figcaption>
                  </figure>
                </div>
              </div>
            </div>
            <div className="col-md-4"></div>
            <div className="col-md-4 text-center">
              <figure>
                <button type="submit" className="btn btn-primary text-center">Edit Form</button>
              </figure>
            </div>
            <div className="col-md-4"></div>

          </div>

        </Panel>

      </form>
    );

  }

}

CustomerForm = reduxForm({
  form: 'initializeFromState', // a unique identifier for this form
  enableReinitialize: true
})(CustomerForm)
//(connect(null, {createPost})
export default reduxForm({form: 'CustomerForm'})(CustomerForm);