import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios"
import {Link} from "react-router-dom"
import moment from "moment"
import PulseLoader from 'react-spinners/PulseLoader';
import { connect } from 'react-redux';
import { loginUser } from '../../actions';
import {showErrors} from "./userUtils"

function CreateForm({ status, errors, touched, isSubmitting }) {

  return (
    <div className="signup-container">
      <Form className="main-form">
        {!!status && <p style={{color: '#c92b2b'}}>{status.error}</p>}
        <div className="above-boxes">
          <span>Email*</span> 
          {showErrors('email', isSubmitting, touched, errors)}
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
          {showErrors('name', isSubmitting, touched, errors)}
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
          {showErrors('password', isSubmitting, touched, errors)}
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
          {showErrors('passwordConf', isSubmitting, touched, errors)}
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
                {!!isSubmitting 
                  ? <PulseLoader className="pulse-loader" color="#cbcbcb"/> 
                  : 'Create Account'}
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

handleSubmit(values, { resetForm, setSubmitting, setStatus, props }) {
  const {history, loginUser} = props
  const currentTime = moment().unix()
  const newUser = {
    username: values.name,
    password: values.password,
    email: values.email,
    date_created: currentTime
  }

  //Need to check for username or email already in use on existing users on server
    axios
        .post("https://dadjokesbw.herokuapp.com/api/auth/register", newUser)
        .then(response => {
          resetForm();
          setSubmitting(false);
          setStatus(response.data)
          loginUser(response.data);
          localStorage.setItem("token", response.data.token);
          history.push('/home')
        })
        .catch(err => {
          console.log(err.response);
          setSubmitting(false);
          setStatus({error: "Username not available"})
        })
    }
})(CreateForm);

export default connect(null, { loginUser })(FormikAccountForm);