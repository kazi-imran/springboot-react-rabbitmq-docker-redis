import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addNewCustomer} from '../../actions/index';
import {Panel, PageHeader, Table, Button, Glyphicon} from "react-bootstrap";
import MetaInfoDisplay from '../stateless/meta_info_display';
import {Field, reduxForm, formValueSelector} from 'redux-form';
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
  

  onSubmit(customer) {
    console.log("Submitted Values",customer);

    this
      .props
      .addNewCustomer(customer,()=>{
        this.props.history.push('/customers');  })

  }
  

  componentDidMount() {
    
  }

  render()
  {
    const {handleSubmit, pristine, reset, submitting} = this.props;
    return (
      <div className="container">  
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>

        {/* <Button onClick={ ()=> this.setState({ basicPanelOpen: !this.state.basicPanelOpen })}>
           <b> Basic Info</b>
          </Button> */}


        <Panel collapsible defaultExpanded header="Basic Info" bsStyle="primary">

          

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
                <button type="submit" className="btn btn-primary text-center">Save</button>
              </figure>
            </div>
            <div className="col-md-4"></div>

          </div>

        </Panel>

      </form>
      </div>
    );

  }

}

CustomerForm = reduxForm({
  form: 'initializeFromState', // a unique identifier for this form
  enableReinitialize: true
})(CustomerForm)
CustomerForm = connect(state =>
  ({

  }),
{addNewCustomer} // bind account loading action creator
)(CustomerForm)
//(connect(null, {createPost})
export default CustomerForm;