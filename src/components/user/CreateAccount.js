import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios"
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faExclamationCircle, 
  faCheckCircle, 
  } from '@fortawesome/free-solid-svg-icons'

function CreateForm({ errors, touched, isSubmitting }) {

  const checkForError = (type) => {
        return touched[type] && errors[type]
      }
  const showErrors = (type) => {

    if(checkForError(type)) {
      return(
        <div>
          <span className="error-text">
            {errors[type]}</span>
          <FontAwesomeIcon className="error-icon" icon={faExclamationCircle}/>
        </div>
      )
    }
    else if(isSubmitting) {
      return <FontAwesomeIcon className="check-icon" icon={faCheckCircle}/>
    }
  }

  return (
    <div className="signup-container">
      {/* <h1>Sign up</h1> */}
      <Form className="main-form">
        <div className="above-boxes">
          <span>Email*</span> 
          {showErrors('email')}
        </div>
        <div>
          <Field 
            className="text-box"
            type="email" 
            name="email" 
          />
        </div>
        <div className="above-boxes">
          <span>Username* </span>
          {showErrors('name')}
        </div>
        <div>
          <Field 
            className="text-box"
            type="name" 
            name="name" 
          />
        </div>
        <div className="above-boxes">
          <span>Password* </span>
          {showErrors('password')}
        </div>
        
        <div>
          <Field 
            className="text-box"
            type="password" 
            name="password" 
          />
        </div>
        <div className="above-boxes">
          <span>Confirm Password* </span>
          {showErrors('passwordConf')}
        </div>
        
        <div>
          <Field 
            className="text-box"
            type="password" 
            name="passwordConf" 
          />
        </div>
        <div className="bottom-form">
          <div>
              <p>Already have an account? </p> 
              <Link to="/login">
                <p className="form-link">Login</p>
              </Link>
          </div>
            <button 
              className="submit-button" 
              type="submit" 
              disabled={isSubmitting}>
                Create Account
            </button>
        </div>
      </Form>
    </div>
    
  );
}



const FormikAccountForm = withFormik({

  
  mapPropsToValues({ email, password, name, passwordConf }) {
    return {
      name: name || "",
      email: email || "",
      password: password || "",
      passwordConf: passwordConf || ""
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string()
      .required("Username is required"),
    email: Yup.string()
      .email("Invalid Email")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be 8 characters or longer")
      .required("Password is required"),
    passwordConf: Yup.string()
     .required("Please confirm password")
     .oneOf([Yup.ref('password'), null], 'Passwords do not match')
  }),

handleSubmit(values, { resetForm, setErrors, setSubmitting, setStatus, props }) {
  const {history} = props

  //Need to check for username or email already in use on existing users on server
    axios
        .post("https://reqres.in/api/users", values)
        .then(response => {
          resetForm();
          setSubmitting(false);
          setStatus(response.data)
        })
        .then(()=>{
          history.push('/')
        })
        .catch(err => {
          console.log(err); 
          setSubmitting(false);
        });
    }
})(CreateForm);

export default FormikAccountForm;