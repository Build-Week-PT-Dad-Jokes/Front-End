import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios"
import {Link} from "react-router-dom"
import {showErrors} from "./userUtils"
import PulseLoader from 'react-spinners/PulseLoader';
  

function LoginForm({ errors, touched, isSubmitting }) {

  return (
    <div className="login-container">
      <Form className="main-form">
        
        <div className="errors"> 
        </div>
        <div className="above-boxes">
          <span>Username* </span>
          {showErrors('name',  isSubmitting, touched, errors)}
        </div>
        <div>
          <Field 
            className="text-box"
            type="name" 
            name="name" 
          />
        </div>
        <div className="above-boxes">
          <span>Password*  </span>
          {showErrors('password', isSubmitting, touched, errors)}
        </div>
        
        <div>
          <Field 
            className="text-box"
            type="password" 
            name="password" 
          />
        </div>
        <div className="bottom-form">
          <div>
              <p>Don't have an account? </p> 
              <Link to="/signup">
                <p className="form-link">Create One</p>
              </Link>
          </div>

          <button 
            className="submit-button" 
            type="submit" 
            disabled={isSubmitting}>
              {!!isSubmitting 
                  ? <PulseLoader className="pulse-loader" color="#cbcbcb"/> 
                  : 'Login'}
          </button>
        </div>
      </Form>
    </div>
    
  );
}



const FormikLoginForm = withFormik({

  
  mapPropsToValues({ name, password }) {
    return {
      name: name || "",
      password: password || "",
    };
  },

  validationSchema: Yup.object().shape({
    
    name: Yup.string()
      .required("Username is required"),
    password: Yup.string()
      .required("Password is required"),
    
  }),

handleSubmit(values, { resetForm, setErrors, setSubmitting, setStatus, props }) {
    const {history} = props

    //Need to confirm login credentials with a user on server
    axios
        .post("https://reqres.in/api/users", values)
        .then(response => {
          resetForm();
          setSubmitting(false);
          setStatus(response.data)
        })
        .then(()=>{
          history.push('/home')
        })
        .catch(err => {
          console.log(err); 
          setSubmitting(false);
        });
    }
})(LoginForm);

export default FormikLoginForm;