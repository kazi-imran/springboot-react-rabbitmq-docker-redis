import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';


 class CustomerForm extends Component{

      warn (values ) {
        const warnings = {}
        if (values.age < 19) {
          warnings.age = 'Hmm, you seem a bit young...'
        }
        return warnings
      }
      
     renderField({
        input,
        label,
        type,
        meta: { touched, error, warning }
      }) {
        return(
        <div>
        <label>{label}</label>
        <div>
          <input {...input} placeholder={label} type={type} />
          {touched &&
            ((error && <span>{error}</span>) ||
              (warning && <span>{warning}</span>))}
        </div>
      </div>
        );
        
    }
    //   const renderField = ({
    //     input,
    //     label,
    //     type,
    //     meta: { touched, error, warning }
    //   }) => (
    //     <
    //   )
      
      render()
      {
        const { handleSubmit, pristine, reset, submitting } = this.props;
        return (
            <form onSubmit={handleSubmit}>
              <Field 
                name="username"
                type="text"
                component={this.renderField}
                label="Username"
             //   validate={[required, maxLength15, minLength2]}
              //  warn={alphaNumeric}
              />
              </form>
        );
    
      }


}
//(connect(null, {createPost})
export default reduxForm({form: 'CustomerForm'})(CustomerForm);